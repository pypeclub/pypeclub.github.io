import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const key_features = [
  {
    label: "Creator",
    link: "docs/artist_tools#creator",
    description: "Universal GUI for defining content for publishing from your DCC app."
  }, {
    label: "Loader",
    link: "docs/artist_tools#loader",
    description: "Universal GUI for loading published assets into your DCC app."
  }, {
    label: "Publisher",
    link: "docs/artist_tools#publisher",
    description: "Universal GUI for validating and publishng content from your DCC app."
  }, {
    label: "Inventory",
    link: "docs/artist_tools#inventory",
    description: "Universal GUI for managing versions of assets loaded into your working scene."
  }, {
    link: "",
    label: "Context Switcher",
    description: "Universal GUI switching between assets, shots and tasks directly from DCC app."
  }, {
    label: "Tray Publisher",
    link: "",
    description: "A standalone GUI for publishing data into pipeline without going though DCC app."
  }, {
    label: "Library Loader",
    link: "",
    description: "A loader GUI that allows yo to load content from dedicated cross project asset library"
  }, {
    label: "Pype Tray",
    link: "",
    description: "Cross platform wrapper app, which is the central point of pype. All other tools are ran from here."
  }, {
    label: "App Launcher",
    link: "",
    description: "Standalone GUI for launching application in the chosen context directly from tray"
  }, {
    label: "Timer Manager",
    link: "",
    description: "Service for monitoring the user activity to start, stop and synchronise time tracking."
  }, {
    label: "Farm rendering",
    link: "",
    description: "Integrations with Deadline and Muster render manager. Render, publish sequences and generate any number of movie outputs automatically."
  }
];

const ftrack = [
  {
    link: "",
    label: "App launchers",
    description: "Start any DCC application directly from ftrack task, with pype loaded."
  }, {
    link: "",
    label: "Project Setup",
    description: "Quickly sets up project with customisable pre-defined structure and attributes."
  }, {
    link: "",
    label: "Publisher",
    description: "Universal GUI for validating and publishng content from your DCC app."
  }, {
    link: "",
    label: "Event Server",
    description: "Built-in ftrack event server takes care of all automation on your ftrack."
  }, {
    link: "",
    label: "Review publishing",
    description: "All reviewables from all DCC aps, including farm renders are pushed to ftrack online review."
  }, {
    link: "",
    label: "Auto Time Tracker",
    description: "Automatically starts and stops ftrack time tracker, base on artist activity."
  }
];

function Feature({link, label, description}) {
  return (
    <div className={styles.card}>
      <div className="card">
        <div className="card__header">
          <h4>{label}</h4>
        </div>
        <div className="card__body">
          <p>
            {description}
          </p>
        </div>
        <div className={classnames(styles.more_item,
                                   "card__footer")}>
          {link != "" &&
            <a href={link}>MORE <i className="fas fa-chevron-right"></i></a>
          }
        </div>
      </div>
    </div>
  );
}


function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  return (
    <Layout
      title={`${siteConfig.title}- Features`}
      description="Pype Feature list">

      {key_features && key_features.length && (
        <section className={classnames("section")}>
          <div className={classnames(styles.card_container, "container")}>
            <h2>Key Features</h2>
            <div className={styles.card_box}>
              {key_features.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      )}

      {ftrack && ftrack.length && (
        <section className={classnames("section darkBackground")}>
          <div className={classnames(styles.card_container, "container")}>
            <h2>Ftrack</h2>
            <div className={styles.card_box}>
              {ftrack.map((props, idx) => (
                <Feature key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      )}

    </Layout>
    );
  }

  export default Home;
