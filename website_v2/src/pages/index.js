import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Training</>,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: <>Consulting</>,
    description: (
      <>
        An outside, independent point of view. We’ll work with you on all fronts to get your productions running smoothly.
      </>
    ),
  },
  {
    title: <>Support</>,
    description: (
      <>
        Experience and time is what we are selling. Whether you want to deploy our open source tools or you need a bespoke solution.
      </>
    ),
  },
  {
    title: <>Coding</>,
    description: (
      <>
        We build an open, peer-reviewed pipeline, which can be shared across studio to reduce the cost and speed up the development.
      </>
    ),
  },
];

function Feature({imageUrl, title, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames('col col--3', styles.feature)}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}- code.training.support`}
      description="Description will go into a meta tag in <head />">
      <header className={classnames('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">
            PYPE.club
          </h1>
          <h2><small className="hero__subtitle">{siteConfig.tagline}</small></h2>
          <div className={styles.buttons}>
            <Link
              className={classnames(
                'button button--outline',
                styles.button,
              )}
              to={'https://github.com/pypeclub/pype'}>
              Source Code
            </Link>
            <Link
              className={classnames(
                'button button--outline',
                styles.button,
              )}
              to={'mailto:info@pype.club'}>
              Get in touch
            </Link>
            <Link
              className={classnames(
                'button button--outline',
                styles.button,
              )}
              to={'https://discord.gg/sFNPWXG'}>
              Join our chat
            </Link>
            <Link
              className={classnames(
                'button button--outline',
                styles.button,
              )}
              to={'https://pypeclub.atlassian.net/servicedesk'}>
              Client Support
            </Link>

            <p>
            Helping VFX and animation studios that lack the resources to design and maintain a major software project in-house.</p>
            <p>
            We are your pipeline department, in a remote office.</p>

          </div>
        </div>
      </header>
      <main>
        {features && features.length && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
        <section className={classnames(styles.features, "darkBackground")}>
          <div className="container">
            <div className={classnames('row')}>
              <div className="col col--6">
              <img src="/img/frontpage/undraw_mind_map_cwng.svg" />
              </div>
              <div className="col col--6">
                <h2>What is Pype?
                </h2>
                    <p>Multi-platform open-source pipeline built around the <a href="https://getavalon.github.io/2.0/">Avalon </a> platform, expanding it with extra features and integrations. Pype connects asset database, project management and time tracking into a single modular system. It has tight integration with Ftrack, but it can also run independently.</p>

                    <p>
                    Avalon with Pype provides a safe and stable technical backbone for your studio, without the worry of a vendor lock. You will always have full access to the source and your project database will run locally.
                    </p>
              </div>
            </div>
          </div>
        </section>
        <section className={classnames(styles.features)}>
          <div className="container">
            <div className={classnames('row',)}>
                <div className="col col--6">
                <h2>About us
                </h2>
                <p>
                Our core team is formed from industry experts with years of production and pipeline experience. We perfectly understand the problems your studio is facing, because we’ve dealt with them, first hand, before. Instead of selling software, we offer our experience and time.
                </p>
                <p>Pype Club is a <a href="https://www.ftrack.com/en/developer/ftrack-developer-network">Ftrack Approved Developer</a>
                </p>
                </div>
                <div className="col col--6">
                <img src="/img/frontpage/undraw_programming.svg" />
                </div>
            </div>
          </div>
        </section>
        <section className={classnames(styles.features, "darkBackground")}>
          <div className="container">
              <h2>Pype Integrations</h2>
              <div className={classnames(
                'showcase',
                )}>
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
                  <img src="/img/app_photoshop.png" alt="" title=""></img>
                  <span className="caption">Photoshop</span>
                </a>

                <a className="link" href="">
                  <img src="/img/app_deadline.png" alt="" title=""></img>
                  <span className="caption">Deadline</span>
                </a>

                <a className="link" href="">
                  <img src="/img/app_muster.png" alt="" title=""></img>
                  <span className="caption">Muster</span>
                </a>

                <a className="link" href="">
                  <img src="/img/app_unreal.png" alt="" title=""></img>
                  <span className="caption">Unreal Engine</span>
                </a>

                <a className="link" href="">
                  <img src="/img/app_toonboom.png" alt="" title=""></img>
                  <span className="caption">Harmony</span>
                </a>
              </div>

              <p> <span>In development by us or a community of <a href="https://github.com/getavalon/core/pulls">avalon core</a> developers.</span></p>
              <div className={classnames(
                'showcase',
                )}>

                <a className="link" href="http://localhost:3000/features#storyboardpro">
                  <img src="/img/app_storyboardpro.svg" alt="" title=""></img>
                  <span className="caption">Storyboard Pro</span>
                </a>
                <a className="link" href="http://localhost:3000/features#storyboardpro">
                  <img src="/img/app_resolve.png" alt="" title=""></img>
                  <span className="caption">DaVinci Resolve</span>
                </a>
              </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
