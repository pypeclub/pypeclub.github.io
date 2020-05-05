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
    <img src="img/favicon/logotype_main.png" alt='pype.club'></img>
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
    <GridBlock align="left" contents={props.children} layout={props.layout} />
  </Container>
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

const Collaborators = props => {


  const collabs = siteConfig.users.filter(user => user.pinned).map(user => (
    <a href={user.infoLink} key={user.infoLink}>
      <img src={user.image} alt={user.caption} title={user.caption} />
    </a>
  ));

  return (
    <div className="productShowcaseSection paddingBottom">
      <h2>Collaborators</h2>
      <div className="logos">{collabs}</div>

    </div>
  );
};


class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper"><div>
          <div className="inner">
            <ProjectTitle />
            <PromoSection>
              <Button href={'https://github.com/pypeclub/pype'}>Source Code</Button>
              <Button href="mailto:info@pype.club">Get in touch</Button>
              <Button href={'https://discord.gg/sFNPWXG'}>Join our chat</Button>
              <Button href={'https://pypeclub.atlassian.net/servicedesk'}>Client Support</Button>
            </PromoSection>
            <p>
            Helping VFX and animation studios that lack the resources to design and maintain a major software project in-house.</p>
            <p>
            We are your pipeline department, in a remote office.</p>
          </div>

          </div>
        </div>
      </div>

      <div className="mainContainer">

        <div className="container lightBackground paddingBottom paddingTop">
          <div className="wrapper">
              <h2 className="noTopMargin">Services</h2>
            <div className="gridBlock">

              <div className="blockElement alignCenter fourByGridBlock">

                <div className="blockContent">
                  <h3>
                    Training
                  </h3>
                  <div>
                      <p>From helping your TDs and production managers to complete on-site Ftrack and workflow training.</p>
                    </div>
                </div>
              </div>
              <div className="blockElement alignCenter fourByGridBlock">
                <div className="blockContent">
                  <h3>
                    Consulting
                  </h3>
                  <div>
                      <p>An outside, independent point of view. We’ll work with you on all fronts to get your productions running smoothly.</p></div>
                </div>
              </div>
              <div className="blockElement alignCenter fourByGridBlock">
                <div className="blockContent">
                  <h3>
                  Support
                  </h3>
                  <div>
                      <p>Experience and time is what we are selling. Whether you want to deploy our open source tools or you need a bespoke solution.</p></div>
                </div>
              </div>
              <div className="blockElement alignCenter fourByGridBlock">
                <div className="blockContent">
                  <h3>
                    Coding
                  </h3>
                  <div>
                      <p>We build an open, peer-reviewed pipeline, which can be shared across studio to reduce the cost and speed up the development.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container darkBackground paddingBottom paddingTop">
          <div className="wrapper">
            <div className="gridBlock">
              <div className="blockElement imageAlignSide imageAlignLeft twoByGridBlock">
                <div className="blockImage"><img src="/img/frontpage/undraw_mind_map_cwng.svg"></img></div>
                <div className="blockContent">
                  <h2>What is Pype?
                  </h2>
                      <p>Multi-platform open-source pipeline built around the <a href="https://getavalon.github.io/2.0/">Avalon </a> platform, expanding it with extra features and integrations. Pype connects asset database, project management and time tracking into a single modular system. It has tight integration with Ftrack, but it can also run independently.</p>

                      <p>
                      Avalon with Pype provides a safe and stable technical backbone for your studio, without the worry of a vendor lock. You will always have full access to the source and your project database will run locally.
                      </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container ligthBackground paddingBottom paddingTop">
          <div className="wrapper">
            <div className="gridBlock">
              <div className="blockElement imageAlignSide imageAlignLeft twoByGridBlock">

                <div className="blockContent">
                  <h2>About us
                  </h2>
                      <p>
                      Our core team is formed from industry experts with years of production and pipeline experience. We perfectly understand the problems your studio is facing, because we’ve dealt with them, first hand, before. Instead of selling software, we offer our experience and time.
                      </p>
                      <p>Pype Club is a <a href="https://www.ftrack.com/en/developer/ftrack-developer-network">Ftrack Approved Developer</a>
                      </p>
                </div>

                <div className="blockImage"><img src="/img/frontpage/undraw_programming.svg"></img></div>

              </div>
            </div>
          </div>
        </div>


        <div className="productShowcaseSection darkBackground paddingBottom paddingTop">
          <h2>Pype Integrations</h2>

          <div className="showcase">
            <a className="link" href="http://localhost:3000/features#maya">
              <img src="/img/app_maya.png" alt="" title=""></img>
              <span className="caption">Maya</span>
            </a>

            <a className="link" href="http://localhost:3000/features#nuke">
              <img src="/img/app_nuke.png" alt="" title=""></img>
              <span className="caption">Nuke</span>
            </a>

            <a className="link" href="http://localhost:3000/features#nuke">
              <img src="/img/app_nuke.png" alt="" title=""></img>
              <span className="caption">Nuke Studio</span>
            </a>

            <a className="link" href="http://localhost:3000/features#nuke">
              <img src="/img/app_hiero.png" alt="" title=""></img>
              <span className="caption">Hiero</span>
            </a>

            <a className="link" href="">
              <img src="/img/app_houdini.png" alt="" title=""></img>
              <span className="caption">Houdini</span>
            </a>

            <a className="link" href="http://localhost:3000/features#maya">
              <img src="/img/app_blender.png" alt="" title=""></img>
              <span className="caption">Blender</span>
            </a>

            <a className="link" href="">
              <img src="/img/app_fusion.png" alt="" title=""></img>
              <span className="caption">Fusion</span>
            </a>

            <a className="link" href="http://localhost:3000/features#ftrack">
              <img src="/img/app_ftrack.png" alt="" title=""></img>
              <span className="caption">Ftrack</span>
            </a>

            <a className="link" href="">
              <img src="/img/app_clockify.png" alt="" title=""></img>
              <span className="caption">Clockify</span>
            </a>

            <a className="link" href="">
              <img src="/img/app_premiere.png" alt="" title=""></img>
              <span className="caption">Premiere Pro</span>
            </a>

            <a className="link" href="">
              <img src="/img/app_deadline.png" alt="" title=""></img>
              <span className="caption">Deadline</span>
            </a>

            <a className="link" href="">
              <img src="/img/app_muster.png" alt="" title=""></img>
              <span className="caption">Muster</span>
            </a>

            <a className="link" href="http://localhost:3000/features#nuke">
              <img src="/img/app_unreal.png" alt="" title=""></img>
              <span className="caption">Unreal Engine</span>
            </a>
          </div>

          <p> <span>In development by us or a community of <a href="https://github.com/getavalon/core/pulls">avalon core</a> developers.</span></p>

          <div className="showcase">

            <a className="link" href="http://localhost:3000/features#nuke">
              <img src="/img/app_photoshop.png" alt="" title=""></img>
              <span className="caption">Photoshop</span>
            </a>

            <a className="link" href="http://localhost:3000/features#nuke">
              <img src="/img/app_toonboom.png" alt="" title=""></img>
              <span className="caption">Toon Boom</span>
            </a>

          </div>

        </div>

        <div className="productShowcaseSection lightBackground paddingTop">
          <h2>Collaborators</h2>
          <p><span>Studios and projects which are continuously helping pype grow and get better.</span></p>

          <div className="showcase">
            <a className="collab" href="http://kredenc.studio">
              <img src="/img/kredenc.png" height="50px" alt="" title=""></img>
              <span className="caption"></span>
            </a>

            <a className="collab" href="http://bumpybox.com">
              <img src="/img/bumpybox.png" height="60px" alt="" title=""></img>
              <span className="caption"></span>
            </a>

            <a className="collab" href="http://colorbleed.nl">
              <img src="/img/colorbleed_logo.png" height="60px" alt="" title=""></img>
              <span className="caption"></span>
            </a>

            <a className="collab" href="https://www.moonshine.tw/">
              <img src="/img/moonshine_logotype.png" height="70px" alt="" title=""></img>
              <span className="caption"></span>
            </a>

            <a className="collab" href="https://getavalon.github.io/2.0/">
              <img src="/img/avalon_logotype.png" height="50px" alt="" title=""></img>
              <span className="caption"></span>
            </a>


          </div>
        </div>

        <Showcase language={language} />
      </div>
    </div>
    );
  }
}

module.exports = Index;
