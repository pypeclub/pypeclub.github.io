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
    <img src={props.img_src} alt="Project Logo" />
  </div>
);

const ProjectTitle = () => (
  <h2 className="projectTitle">
    {siteConfig.title}
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

class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href="#try">Try It Out</Button>
            <Button href={'https://github.com/pypeclub/pype'}>Source Code</Button>
            <Button href={'https://pypeclub.atlassian.net/servicedesk'}>Support</Button>
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
  <Block layout="fourColumn">
    {[
      {
        content: 'This is the content of my feature',
        image: imgUrl('pype_textlog_v01.png'),
        imageAlign: 'top',
        title: 'Open',
      },
      {
        content: 'The content of my second feature',
        imageAlign: 'top',
        title: 'Peer reviewed',
      },
    ]}
  </Block>
);

const FeatureCallout = props => (
  <div
    className="productShowcaseSection paddingBottom"
    style={{textAlign: 'center'}}>
    <h2>Our Goal</h2>
    <MarkdownBlock>We provide direct access to a team of experienced VFX developers and maintain  pipeline solutions for animation and vfx studios, that lack the staff and resources to design and maintain a major software project within their own R’n’D department.
We are your pipeline department, in a remote office.
</MarkdownBlock>
  </div>
);

const Team = () => (
  <Block background="dark">
    {[
      {
        content: 'Out core team is formed from industry experts with years of production and pipeline experience, who perfectly understand  the problems your studio is dealing with, because we’ve dealt with the same before.Instead of selling a software, we offer our experience and time. Whether you want to deploy our recommended solutions or you needs a completely bespoke pipeline. We’ll work with you on all fronts to get youy production under control.',
        imageAlign: 'right',
        title: 'Team',
      },
    ]}
  </Block>
);

const Description = () => (
  <Block background="light">
    {[
      {
        content: 'We are building, maintaining and contributing to an open, peer-reviewed pipeline, that can be shared across the companies to reduce the cost and speed up the development. We will make your studio connected into a community driven platform which is constantly updated by latest production standards. ',
        imageAlign: 'right',
        title: 'Software',
      },
    ]}
  </Block>
);

const TryOut = () => (
  <Block background="dark">
    {[
      {
        content: 'Coding is not all we do. Sometimes all the systems are already in place and all that is needed to get the ball rolling, or take out a kink from the road is an advice from outside or simply some training. We provide and enjoy both. From helping your TDs to full on-site ftrack and pype training.',
        imageAlign: 'left',
        title: 'Consultations',
      },
    ]}
  </Block>
);

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
    <div className="productShowcaseSection paddingBottom">
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
          <Team />
          <Description />
          <TryOut />
          <Showcase language={language} />
        </div>
      </div>
    );
  }
}

module.exports = Index;
