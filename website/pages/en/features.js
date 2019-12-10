/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock;
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;


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


const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="navRow">
      <div className="navRowBlock">{props.children}</div>
    </div>
  </div>
);


class HomeSplash extends React.Component {
  render() {
    const language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <PromoSection>
            <Button href={'#ftrack'}>Ftrack</Button>
            <Button href={'#maya'}>Maya</Button>
            <Button href={'#nuke'}>Nuke</Button>
            <Button href={'#houdini'}>Houdini</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}


const BlockElement = props => (
  <div class="blockElement alignCenter fourByGridBlock">
    <div class="blockContent">
      {props.children}
    </div>
  </div>
);

class Section extends React.Component {
  render() {
    return(
    <Container
      padding={['bottom', 'top']}
      id={this.props.id}
      background={this.props.background}>
        <h2 class="noTopMargin">{this.props.title}</h2>
          {this.props.children}
    </Container>
  );
}}


class Featurecard extends React.Component {
  render() {
    const title = this.props.label
    // const link = "docs/" + (this.props.name || title)
    const link = (this.props.link || "javascript:void(0);")
    // const thumbnail = "doc/img/features/" + this.props.name + ".png"
    // const thumbnail = "https://picsum.photos/400/250"
    const thumbnail = ""
    const description = this.props.description

    return (
      <div class="cards-list-item-outer">
        <div class="cards-list-item-inner">

          <a href={link} class="cards-list-item-thumbnail">
          <img src={thumbnail}></img>
          </a>

          <a href={link}
          class="cards-list-item-title">{title}</a>

          <a href={link} class="cards-list-item-excerpt">{description}</a>

          <div class="cards-list-item-more">

          {link != "javascript:void(0);" &&
                <a href={link} class="more-item url ml-auto">MORE <i class="fa fa-chevron-right"></i></a>
              }

          </div>

        </div>
      </div>
    );
  }
}

class FeaturecardMedium extends React.Component {
  render() {
    const title = this.props.label
    const link = (this.props.link || "javascript:void(0);")
    const description = this.props.description

    return (
      <div class="cards-list-item-outer medium">
        <div class="cards-list-item-inner">

          <a href={link}
          class="cards-list-item-title medium">{title}</a>

          <a href={link}
          class="cards-list-item-excerpt">{description}</a>

          <div class="cards-list-item-more">
          {link != "javascript:void(0);" &&
            <a href={link} class="more-item url ml-auto">MORE <i class="fa fa-chevron-right"></i></a>
          }
          </div>

        </div>
      </div>
    );
  }
}

class FeaturecardSmall extends React.Component {
  render() {
    const title = this.props.label
    const link = (this.props.link || "javascript:void(0);")
    const description = this.props.description

    return (
      <div class="cards-list-item-outer small">
        <div class="cards-list-item-inner">

          <a href={link} class="cards-list-item-thumbnail">
          <img src={this.props.img}></img>
          </a>

          <a href={link}
          class="cards-list-item-title small">{title}</a>

        </div>
      </div>
    );
  }
}





class Index extends React.Component {
  render() {
    const language = this.props.language || '';

    return (
      <div>
      <div className="mainContainer">

          <HomeSplash>
          </HomeSplash>


      <Section background="light" title="Key Pype Features">
        <div class="cards-list">

          <Featurecard
            label="Creator"
            link="docs/artist_tools#creator"
            description="Universal GUI for defining content for publishing from your DCC app.">
          </Featurecard>

          <Featurecard
            label="Loader"
            link="docs/artist_tools#loader"
            description="Universal GUI for loading published assets into your DCC app.">
          </Featurecard>

          <Featurecard
            label="Publisher"
            link="docs/artist_tools#publisher"
            description="Universal GUI for validating and publishng content from your DCC app.">
          </Featurecard>

          <Featurecard
            label="Inventory"
            link="docs/artist_tools#inventory"
            description="Universal GUI for managing versions of assets loaded into your working scene.">
          </Featurecard>

          <Featurecard
            label="Context Switcher"
            description="Universal GUI switching between assets, shots and tasks directly from DCC app.">
          </Featurecard>

          <Featurecard
            label="Tray Publisher"
            description="A standalone GUI for publishing data into pipeline without going though DCC app.">
          </Featurecard>

          <Featurecard
            label="Library Loader"
            description="A loader GUI that allows yo to load content from dedicated cross project asset library">
          </Featurecard>

          <Featurecard
            label="Pype Tray"
            description="Cross platform wrapper app, which is the central point of pype. All other tools are ran from here.">
          </Featurecard>

          <Featurecard
            label="App Launcher"
            description="Standalone GUI for launching application in the chosen context directly from tray">
          </Featurecard>

          <Featurecard
            label="Timer Manager"
            description="Service for monitoring the user activity to start, stop and synchronise time tracking.">
          </Featurecard>

          <Featurecard
            label="Farm rendering"
            description="Integrations with Deadline and Muster render manager. Render, publish sequences and generate any number of movie outputs automatically.">
          </Featurecard>
        </div>
      </Section>

      <Section background="dark" title="Ftrack" id="ftrack">

        <p class="sectionDescription">versions 4.0 and higher</p>

        <div class="cards-list">
          <FeaturecardMedium
            label="App launchers"
            description="Start any DCC application directly from ftrack task, with pype loaded.">
          </FeaturecardMedium>

          <FeaturecardMedium
            label="Project Setup"
            description="Quickly sets up project with customisable pre-defined structure and attributes.">
          </FeaturecardMedium>

          <FeaturecardMedium
            label="Event Server"
            description="Built-in ftrack event server takes care of all automation on your ftrack.">
          </FeaturecardMedium>

          <FeaturecardMedium
            label="Review publishing"
            description="All reviewables from all DCC aps, including farm renders are pushed to ftrack online review.">
          </FeaturecardMedium>

          <FeaturecardMedium
            label="Auto Time Tracker"
            description="Automatically starts and stops ftrack time tracker, base on artist activity.">
          </FeaturecardMedium>

        </div>

        <h3 class="alignCenter"> Ftrack Actions and Events</h3>
        <div class="cards-list">

          <FeaturecardSmall label="Launch Application"></FeaturecardSmall>
          <FeaturecardSmall label="Review in RV Player"></FeaturecardSmall>
          <FeaturecardSmall label="Review in DJV view"></FeaturecardSmall>
          <FeaturecardSmall label="Update Thumbnails"></FeaturecardSmall>
          <FeaturecardSmall label="Prepare New Project"></FeaturecardSmall>
          <FeaturecardSmall label="Delete Old Subsets"></FeaturecardSmall>
          <FeaturecardSmall label="Create Folders"></FeaturecardSmall>
          <FeaturecardSmall label="Open Location"></FeaturecardSmall>
          <FeaturecardSmall label="Kill old ftrack jobs"></FeaturecardSmall>
          <FeaturecardSmall label="Sort Client Review"></FeaturecardSmall>
          <FeaturecardSmall label="Thumbnail Updates"></FeaturecardSmall>
          <FeaturecardSmall label="Start Next Task"></FeaturecardSmall>
          <FeaturecardSmall label="Version to Task Status"></FeaturecardSmall>
          <FeaturecardSmall label="Autosync to Pype DB"></FeaturecardSmall>

        </div>

      </Section>

      <Section background="light" title="Autodesk Maya" id="maya">

        <p class="sectionDescription">versions 2017 and higher</p>

          <div class="cards-list">
            <FeaturecardMedium
              label="Look Management"
              link="docs/artist_hosts_maya#look-development"
              description="Publish maya shading networks with textures and assign them to all assets in the scene at once">
            </FeaturecardMedium>

            <FeaturecardMedium
              label="Project Shelves"
              description="Add any custom projects scripts to dynamically generated maya shelves">
            </FeaturecardMedium>

            <FeaturecardMedium
              label="Playblasts"
              link="docs/artist_hosts_maya#reviews"
              description="Makes sure all your playblasts are consistent, with burnins and and correct viewport settings">
            </FeaturecardMedium>

            <FeaturecardMedium
              label="Model > Render"
              description="We cover full project data flow from model throght animation, till final render.">
            </FeaturecardMedium>

            <FeaturecardMedium
              label="Plugins Support"
              description="Full production workflows support for Arnold, Vray, Redshift and Yeti. With more added upon client requests.">
            </FeaturecardMedium>

          </div>

          <h3 class="alignCenter"> Supported Families </h3>
          <div class="cards-list">
            <FeaturecardSmall label="Model"></FeaturecardSmall>
            <FeaturecardSmall label="Look"></FeaturecardSmall>
            <FeaturecardSmall label="Rig"></FeaturecardSmall>
            <FeaturecardSmall label="Setdress"
                              link="docs/artist_hosts_maya#set-dressing-in-maya">
            </FeaturecardSmall>
            <FeaturecardSmall label="Animation"></FeaturecardSmall>
            <FeaturecardSmall label="Point Cache"></FeaturecardSmall>
            <FeaturecardSmall label="VDB Cache"></FeaturecardSmall>
            <FeaturecardSmall label="Assembly"></FeaturecardSmall>
            <FeaturecardSmall label="Camera"></FeaturecardSmall>
            <FeaturecardSmall label="RenderSetup"></FeaturecardSmall>
            <FeaturecardSmall label="Render"></FeaturecardSmall>
            <FeaturecardSmall label="Plate"></FeaturecardSmall>
            <FeaturecardSmall label="Review"></FeaturecardSmall>
            <FeaturecardSmall label="Workfile"></FeaturecardSmall>
            <FeaturecardSmall label=".ASS StandIn"></FeaturecardSmall>
            <FeaturecardSmall label="Yeti Cache"></FeaturecardSmall>
            <FeaturecardSmall label="Yeti Rig"></FeaturecardSmall>
            <FeaturecardSmall label="Vray Scene"></FeaturecardSmall>
            <FeaturecardSmall label="Vray Proxy"></FeaturecardSmall>
        </div>

      </Section>

      <Section background="dark" title="Foundry Nuke | Nuke Studio | Hiero"
        id="nuke">

        <p class="sectionDescription">versions 11.0 and higher</p>

        <div class="cards-list">
          <FeaturecardMedium
            label="Color Managed"
            description="Fully colour managed outputs for work and review.">
          </FeaturecardMedium>

          <FeaturecardMedium
            label="Script Building"
            description="Automatically build first workfiles from published plates or renders.">
          </FeaturecardMedium>

          <FeaturecardMedium
            label="Node Presets"
            description="Template system for centrally controlled node parameters.">
          </FeaturecardMedium>

          <FeaturecardMedium
            label="Data ingest"
            description="Create shots and sequences from nuke studio timeline, inlcuding all metadata.">
          </FeaturecardMedium>
        </div>

        <h3 class="alignCenter"> Supported Families </h3>
        <div class="cards-list">
          <FeaturecardSmall label="Model"></FeaturecardSmall>
          <FeaturecardSmall label="Camera"></FeaturecardSmall>
          <FeaturecardSmall label="Render"></FeaturecardSmall>
          <FeaturecardSmall label="Plate"></FeaturecardSmall>
          <FeaturecardSmall label="Review"></FeaturecardSmall>
          <FeaturecardSmall label="Group"></FeaturecardSmall>
          <FeaturecardSmall label="Workfile"></FeaturecardSmall>
          <FeaturecardSmall label="LUT"></FeaturecardSmall>
          <FeaturecardSmall label="Cache"></FeaturecardSmall>
        </div>

      </Section>

      <Section background="light" title="Side FX Houdini"
        id="nuke">

        <p class="sectionDescription">versions 16.5 and higher</p>


        <h3 class="alignCenter"> Supported Families </h3>
        <div class="cards-list">
          <FeaturecardSmall label="Model"></FeaturecardSmall>
          <FeaturecardSmall label="Animation"></FeaturecardSmall>
          <FeaturecardSmall label="Pointcache"></FeaturecardSmall>
          <FeaturecardSmall label="VDB"></FeaturecardSmall>
          <FeaturecardSmall label="Workfile"></FeaturecardSmall>
          <FeaturecardSmall label="Camera"></FeaturecardSmall>
        </div>

      </Section>

      </div>
    </div>
    );
  }
}

module.exports = Index;
