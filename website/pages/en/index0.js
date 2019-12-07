/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(`${process.cwd()}/siteConfig.js`);

function imgUrl(img) {
  return `${siteConfig.baseUrl}img/${img}`;
}

function docUrl(doc, language) {
  return `${siteConfig.baseUrl}docs/${language ? `${language}/` : ''}${doc}`;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? `${language}/` : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src="img/pype-logo-light.png"></img>
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    <img src="img/pype-logo-green.png" alt='pype.club'></img>
    <small className="tagline">{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

const CollabSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock partners">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href={'https://github.com/pypeclub/pype'}>Source Code</Button>
            <Button href="mailto:info@pype.club">Get in touch</Button>
            <Button href={'https://pypeclub.atlassian.net/servicedesk'}>Client Support</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Features = () => (
  <Block layout="fourColumn" background="light">
    {[
      {
        // content: 'This is the content of my feature',
        image: imgUrl('maya.png'),
        imageAlign: 'top',
        title: 'Maya',
      },
      {
        // content: 'The content of my second feature',
        image: imgUrl('nuke.png'),
        imageAlign: 'top',
        title: 'Nuke',
      },
      {
        // content: 'The content of my second feature',
        image: imgUrl('nuke.png'),
        imageAlign: 'top',
        title: 'Nuke Studio',
      },
      {
        // content: 'The content of my second feature',
        image: imgUrl('houdini.png'),
        imageAlign: 'top',
        title: 'Houdini',
      },
      {
        // content: 'The content of my second feature',
        image: imgUrl('ftrack-logo-round.png'),
        imageAlign: 'top',
        title: 'Ftrack',
      },
      {
        // content: 'The content of my second feature',
        image: imgUrl('clockify.png'),
        imageAlign: 'top',
        title: 'Clockify',
      },
    ]}
  </Block>
);

const FeatureCallout = props => (
  <div
    className="productShowcaseSection paddingBottom paddingTop"
    style={{textAlign: 'center'}}>
    <MarkdownBlock>We provide access to experienced VFX developers and maintain pipeline solutions for animation and vfx studios, that lack the staff and resources to design and maintain a major software project within their own R’n’D department.
We are your pipeline department, in a remote office.
</MarkdownBlock>
  </div>
);

const Services = () => (

  <Block layout="fourColumn" background="dark">

    {[
      {
        content: 'From helping your TDs and production managers to full on-site ftrack and workflow training.',
        imageAlign: 'top',
        title: 'Training',
      },
      {
        content: 'An outside, indendent point of view. We’ll work with you on all fronts to get your production under control.',
        imageAlign: 'top',
        title: 'Consulting',
      },
      {
        content: 'We don\'t sell a software, we offer our experience and time. Whether you want to deploy our recommended tools or you need a bespoke solution.',
        imageAlign: 'right',
        title: 'Support',
      },
      {
        content: 'We build, maintain and contribute to an open, peer-reviewed code, that can be shared across companies to reduce the cost and speed up the development. ',
        imageAlign: 'right',
        title: 'Coding',
      },
    ]}
  </Block>
);


const Knowledge = () => (
  <Block background="dark">
    {[
      {
        content: 'We will make your studio connected into a community driven platform which is constantly updated by latest production standards. ',
        imageAlign: 'left',
        title: 'Knowledge',
      },
    ]}
  </Block>
);


const Collaborators = props => {

  return (

    <div className="productShowcaseSection paddingTop">
      <h2>Collaborators</h2>
      <CollabSection>
      <a href="http://kredenc.studio">
        <img src="img/kredenc.png" alt="kredenc" title="Kredenc Studio" />
      </a>
        <a href="http://colorbleed.nl">
          <img src="img/colorbleed_logo.png" alt="colorbleed" title="colorbleed" />
        </a>
        <a href="http://bumpybox.com">
          <img src="img/bumpybox.png" alt="bumpy box" title="Bumpy Box" />
        </a>
      </CollabSection>
    </div>
  );
};


const Showcase = props => {
  if ((siteConfig.users || []).length === 0) {
    return null;
  }

  const showcase = siteConfig.users.filter(user => user.pinned).map(user => (
    <a href={user.infoLink} key={user.infoLink}>
      <img src={user.image} alt={user.caption} title={user.caption} />
    </a>
  ));

  return (
    <div className="productShowcaseSection paddingTop paddingBottom">
      <h2>Clients</h2>
      <div className="logos">{showcase}</div>

    </div>
  );
};

class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer">
          <FeatureCallout />
          <Features />
          <Services />
          <Collaborators />
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
