(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{90:function(e,a,t){"use strict";t.r(a);var l=t(2),n=t(3),r=t(0),i=t.n(r),s=t(126),o=t.n(s),c=t(117),d=(t(115),t(113)),m=(t(116),t(49)),p=t.n(m),b=(t(248),[{label:"Creator",link:"docs/artist_tools#creator",description:"Universal GUI for defining content for publishing from your DCC app.",docs:"/docs/artist_tools#creator"},{label:"Loader",link:"docs/artist_tools#loader",description:"Universal GUI for loading published assets into your DCC app.",docs:"/docs/artist_tools#loader"},{label:"Publisher",link:"docs/artist_tools#publisher",description:"Universal GUI for validating and publishng content from your DCC app.",image:"",docs:"/docs/artist_tools#publisher"},{label:"Inventory",link:"docs/artist_tools#inventory",description:"Universal GUI for managing versions of assets loaded into your working scene."},{link:"",label:"Context Switcher",description:"Universal GUI switching between assets, shots and tasks directly from DCC app."},{label:"Tray Publisher",link:"",description:"A standalone GUI for publishing data into pipeline without going though DCC app.",image:""},{label:"Library Loader",link:"",description:"A loader GUI that allows yo to load content from dedicated cross project asset library",image:""},{label:"Pype Tray",link:"",description:"Cross platform wrapper app, which is the central point of pype. All other tools are ran from here."},{label:"App Launcher",link:"",description:"Standalone GUI for launching application in the chosen context directly from tray"},{label:"Timer Manager",link:"",description:"Service for monitoring the user activity to start, stop and synchronise time tracking."},{label:"Farm rendering",link:"",description:"Integrations with Deadline and Muster render managers. Render, publish and generate reviews on the farm."},{label:"Remote",link:"",description:"Production proven in fully remote workflows. Pype can run of cloud servers and storage."}]),u=[{link:"",label:"App launchers",description:"Start any DCC application directly from ftrack task, with pype loaded."},{link:"",label:"Project Setup",description:"Quickly sets up project with customisable pre-defined structure and attributes."},{link:"",label:"Publisher",description:"Universal GUI for validating and publishng content from your DCC app."},{link:"",label:"Event Server",description:"Built-in ftrack event server takes care of all automation on your ftrack."},{link:"",label:"Review publishing",description:"All reviewables from all DCC aps, including farm renders are pushed to ftrack online review."},{link:"",label:"Auto Time Tracker",description:"Automatically starts and stops ftrack time tracker, base on artist activity."}],h=[{label:"Launch Application"},{link:"",label:"Review in RV Player"},{link:"",label:"Review in DJV view"},{link:"",label:"Propagate Thumbnails"},{link:"",label:"Prepare New Project"},{link:"",label:"Delete Old Subsets"},{link:"",label:"Create Folders"},{link:"",label:"Open Location"},{link:"",label:"Kill old ftrack jobs"},{link:"",label:"Sort Client Review"},{link:"",label:"Start Next Task"},{link:"",label:"Version to Task Status"},{link:"",label:"Autosync to Pype DB"}],k=[{label:"Look Management",link:"docs/artist_hosts_maya#look-development",description:"Publish shading networks with textures and assign them to all assets in the scene at once"},{label:"Project Shelves",description:"Add any custom projects scripts to dynamically generated maya shelves"},{label:"Playblasts",link:"docs/artist_hosts_maya#reviews",description:"Makes all your playblasts consistent, with burnins and correct viewport settings"},{label:"Model > Render",description:"We cover full project data flow from model throght animation, till final render."},{label:"Plugins Support",description:"Full support for Arnold, Vray, Redshift and Yeti. With more added upon client requests."}],E=[{label:"Model"},{label:"Look"},{label:"Rig"},{label:"Setdress"},{label:"Animation"},{label:"Point Cache"},{label:"VDB Cache"},{label:"Assembly"},{label:"Camera"},{label:"RenderSetup"},{label:"Render"},{label:"Plate"},{label:"Review"},{label:"Workfile"},{label:".ASS StandIn"},{label:"Yeti Cache"},{label:"Yeti Rig"},{label:"Vray Scene"},{label:"Vray Proxy"}],g=[{label:"Color Managed",description:"Fully colour managed outputs for work and review."},{label:"Script Building",description:"Automatically build first workfiles from published plates or renders."},{label:"Node Presets",description:"Template system for centrally controlled node parameters."},{label:"Rendering",description:"Support for local and farm renders, including baked reviews."},{label:"Slates",description:"Generate slates and attach them to rendered."}],v=[{label:"Model"},{label:"Camera"},{label:"Render"},{label:"Plate"},{label:"Review"},{label:"Group"},{label:"Workfile"},{label:"LUT"},{label:"Cache"},{label:"Gizmo"},{label:"Prerender"}],f=[],y=[{label:"Render"},{label:"Plate"},{label:"Review"},{label:"LUT"},{label:"Nukenodes"},{label:"Gizmo"},{label:"Workfile"}],N=[{label:"Model"},{label:"Rig"},{label:"Setdress"},{label:"Layout"},{label:"Animation"},{label:"Point Cache"},{label:"Camera"},{label:"RenderSetup"},{label:"Render"},{label:"Review"},{label:"Workfile"}],_=[{label:"Model"},{label:"Point Cache"},{label:"VDB Cache"},{label:"Camera"},{label:"Review"},{label:"Workfile"}],w=[{label:"Render"},{label:"Plate"},{label:"Review"},{label:"Workfile"}],C=[{label:"Render"},{label:"Plate"},{label:"Review"},{label:"Template"},{label:"Rig"},{label:"Pallete"},{label:"Workfile"}],S=[{label:"Render"},{label:"Plate"},{label:"Image"},{label:"LayeredImage"},{label:"Workfile"}],P=function(e){function a(){return e.apply(this,arguments)||this}return Object(n.a)(a,e),a.prototype.render=function(){var e=this.props.label,a=this.props.description,t=this.props.image||"",l=this.props.demo||"",n=this.props.docs||"";return i.a.createElement("div",{className:"card"},i.a.createElement("div",{class:"card__image"},""!=t&&i.a.createElement("img",{src:t,alt:"Image alt text",title:"Logo Title Text 1"})),i.a.createElement("div",{className:"card__body"},i.a.createElement("h4",null,e),i.a.createElement("p",null,a)),i.a.createElement("div",{className:o()("card__footer")},i.a.createElement("div",{class:"button-group button-group--block"},""!=l&&i.a.createElement("a",{href:l,class:"button button--secondary"},"Demo"),""!=n&&i.a.createElement("a",{href:n,class:"button button--secondary"},"Docs"))))},a}(i.a.Component),R=function(e){function a(){return e.apply(this,arguments)||this}return Object(n.a)(a,e),a.prototype.render=function(){var e=this.props.label,a=(this.props.link,this.props.description),t=this.props.demo||"",l=this.props.docs||"";return i.a.createElement("div",{className:"card card_medium"},i.a.createElement("div",{className:"card__header"},i.a.createElement("h4",null,e)),i.a.createElement("div",{className:"card__body"},i.a.createElement("p",null,a)),i.a.createElement("div",{className:o()(p.a.more_item,"card__footer")},i.a.createElement("div",{class:"button-group button-group--block"},""!=t&&i.a.createElement("a",{href:t,class:"button button--secondary"},"Demo"),""!=l&&i.a.createElement("a",{href:l,class:"button button--secondary"},"Docs"))))},a}(i.a.Component),j=function(e){function a(){return e.apply(this,arguments)||this}return Object(n.a)(a,e),a.prototype.render=function(){var e=this.props.label;this.props.link,this.props.description;return i.a.createElement("div",{className:"card card_small"},i.a.createElement("div",{className:"card__body"},i.a.createElement("h5",null,e)))},a}(i.a.Component);a.default=function(){var e=Object(d.a)().siteConfig,a=void 0===e?{}:e;return i.a.createElement(c.a,{title:a.title+"- Features",description:"Pype Feature list"},i.a.createElement("section",{className:o()("section lightBackground")},i.a.createElement("div",{className:o()(p.a.card_container,"container")},i.a.createElement("h2",null,"Key Features"),b&&b.length&&i.a.createElement("div",{className:p.a.card_box},b.map((function(e,a){return i.a.createElement(P,Object(l.a)({key:a},e))}))))),i.a.createElement("section",{className:o()("section darkBackground")},i.a.createElement("div",{className:o()(p.a.card_container,"container")},i.a.createElement("h2",{id:"ftrack"},"Ftrack"),u&&u.length&&i.a.createElement("div",{className:p.a.card_box},u.map((function(e,a){return i.a.createElement(R,Object(l.a)({key:a},e))}))),i.a.createElement("h3",null," Actions and Events"),u&&u.length&&i.a.createElement("div",{className:p.a.card_box},h.map((function(e,a){return i.a.createElement(j,Object(l.a)({key:a},e))}))))),i.a.createElement("section",{className:o()("section lightBackground")},i.a.createElement("div",{className:o()(p.a.card_container,"container")},i.a.createElement("h2",{id:"maya"},"Autodesk Maya"),i.a.createElement("p",{className:"sectionDescription"},"versions 2017 and higher"),k&&k.length&&i.a.createElement("div",{className:p.a.card_box},k.map((function(e,a){return i.a.createElement(R,Object(l.a)({key:a},e))}))),i.a.createElement("h3",{className:""}," Supported Families "),E&&E.length&&i.a.createElement("div",{className:p.a.card_box},E.map((function(e,a){return i.a.createElement(j,Object(l.a)({key:a},e))}))))),i.a.createElement("section",{className:o()("section darkBackground")},i.a.createElement("div",{className:o()(p.a.card_container,"container")},i.a.createElement("h2",{id:"nuke"},"Foundry Nuke | NukeX"),i.a.createElement("p",{className:"sectionDescription"},"versions 11.0 and higher"),g&&g.length&&i.a.createElement("div",{className:p.a.card_box},g.map((function(e,a){return i.a.createElement(R,Object(l.a)({key:a},e))}))),i.a.createElement("h3",{className:""}," Supported Families "),v&&v.length&&i.a.createElement("div",{className:p.a.card_box},v.map((function(e,a){return i.a.createElement(j,Object(l.a)({key:a},e))}))))),i.a.createElement("section",{className:o()("section lightBackground")},i.a.createElement("div",{className:o()(p.a.card_container,"container")},i.a.createElement("h2",{id:"hiero"},"Foundry Hiero | Nuke Studio"),i.a.createElement("p",{className:"sectionDescription"},"versions 11.0 and higher"),f&&f.length&&i.a.createElement("div",{className:p.a.card_box},f.map((function(e,a){return i.a.createElement(R,Object(l.a)({key:a},e))}))),i.a.createElement("h3",{className:""}," Supported Families "),y&&y.length&&i.a.createElement("div",{className:p.a.card_box},y.map((function(e,a){return i.a.createElement(j,Object(l.a)({key:a},e))}))))),i.a.createElement("section",{className:o()("section darkBackground")},i.a.createElement("div",{className:o()(p.a.card_container,"container")},i.a.createElement("h2",{id:"houdini"},"Houdini"),i.a.createElement("p",{className:"sectionDescription"},"versions 16.0 and higher"),i.a.createElement("h3",{className:""}," Supported Families "),_&&_.length&&i.a.createElement("div",{className:p.a.card_box},_.map((function(e,a){return i.a.createElement(j,Object(l.a)({key:a},e))}))))),i.a.createElement("section",{className:o()("section lightBackground")},i.a.createElement("div",{className:o()(p.a.card_container,"container")},i.a.createElement("h2",null,"Blender"),i.a.createElement("p",{className:"sectionDescription"},"versions 2.80 and higher"),i.a.createElement("h3",{className:""}," Supported Families "),N&&N.length&&i.a.createElement("div",{className:p.a.card_box},N.map((function(e,a){return i.a.createElement(j,Object(l.a)({key:a},e))}))))),i.a.createElement("section",{className:o()("section darkBackground")},i.a.createElement("div",{className:o()(p.a.card_container,"container")},i.a.createElement("h2",null,"Fusion"),i.a.createElement("p",{className:"sectionDescription"},"versions 9 and higher"),i.a.createElement("h3",{className:""}," Supported Families "),w&&w.length&&i.a.createElement("div",{className:p.a.card_box},w.map((function(e,a){return i.a.createElement(j,Object(l.a)({key:a},e))}))))),i.a.createElement("section",{className:o()("section darkBackground")},i.a.createElement("div",{className:o()(p.a.card_container,"container")},i.a.createElement("h2",null,"Harmony"),i.a.createElement("p",{className:"sectionDescription"},"versions 17 and higher"),i.a.createElement("h3",{className:""}," Supported Families "),C&&C.length&&i.a.createElement("div",{className:p.a.card_box},C.map((function(e,a){return i.a.createElement(j,Object(l.a)({key:a},e))}))))),i.a.createElement("section",{className:o()("section darkBackground")},i.a.createElement("div",{className:o()(p.a.card_container,"container")},i.a.createElement("h2",null,"Photoshop"),i.a.createElement("p",{className:"sectionDescription"},"versions 2020 and higher"),i.a.createElement("h3",{className:""}," Supported Families "),S&&S.length&&i.a.createElement("div",{className:p.a.card_box},S.map((function(e,a){return i.a.createElement(j,Object(l.a)({key:a},e))}))))))}}}]);