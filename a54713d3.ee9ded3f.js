(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{103:function(e,a,t){"use strict";t.r(a);var l=t(3),r=t(4),n=t(0),s=t.n(n),c=t(155),o=t.n(c),i=t(136),d=(t(130),t(22)),m=(t(132),t(62)),p=t.n(m),b=(t(274),[{label:"Workfiles",description:"Save and load workfiles in progress. Change the context inside of the application.",docs:"/docs/artist_tools#workfiles"},{label:"Creator",description:"Universal GUI for defining content for publishing from your DCC app.",docs:"/docs/artist_tools#creator"},{label:"Loader",description:"Universal GUI for loading published assets into your DCC app.",docs:"/docs/artist_tools#loader"},{label:"Publisher",description:"Universal GUI for validating and publishng content from your DCC app.",image:"",docs:"/docs/artist_tools#publisher"},{label:"Inventory",description:"Universal GUI for managing versions of assets loaded into your working scene.",docs:"docs/artist_tools#inventory"},{label:"Library Loader",description:"A loader GUI that allows yo to load content from dedicated cross project asset library",docs:"docs/artist_tools#library-loader",image:""},{label:"Tray Publisher",link:"",description:"A standalone GUI for publishing data into pipeline without going though DCC app.",image:""},{label:"Pype Tray",link:"",description:"Cross platform wrapper app, which is the central point of pype. All other tools are ran from here."},{label:"App Launcher",link:"",description:"Standalone GUI for launching application in the chosen context directly from tray"},{label:"Timer Manager",link:"",description:"Service for monitoring the user activity to start, stop and synchronise time tracking."},{label:"Farm rendering",link:"",description:"Integrations with Deadline and Muster render managers. Render, publish and generate reviews on the farm."},{label:"Remote",link:"",description:"Production proven in fully remote workflows. Pype can run of cloud servers and storage."}]),u=[{docs:"docs/manager_ftrack_actions#applications",label:"App launchers",description:"Start any DCC application directly from ftrack task, with pype loaded."},{docs:"docs/manager_ftrack#project-management",label:"Project Setup",description:"Quickly sets up project with customisable pre-defined structure and attributes."},{docs:"docs/admin_ftrack#event-server",label:"Event Server",description:"Built-in ftrack event server takes care of all automation on your ftrack."},{docs:"",label:"Review publishing",description:"All reviewables from all DCC aps, including farm renders are pushed to ftrack online review."},{docs:"",label:"Auto Time Tracker",description:"Automatically starts and stops ftrack time tracker, base on artist activity."}],h=[{docbase:"docs/manager_ftrack_actions",label:"Launch Applications"},{docbase:"docs/manager_ftrack_actions#",label:"RV Player"},{docbase:"docs/manager_ftrack_actions#",label:"DJV view"},{docbase:"docs/manager_ftrack_actions#",label:"Prepare Project"},{docbase:"docs/manager_ftrack_actions#",label:"Delete Asset/Subset",target:"delete-assetsubset"},{docbase:"docs/manager_ftrack_actions#",label:"Create Folders"},{docbase:"docs/manager_ftrack_actions#",label:"Create Project Structure"},{docbase:"docs/manager_ftrack_actions#",label:"Open File"},{docbase:"docs/manager_ftrack_actions#",label:"Kill old jobs",target:"job-killer"},{docbase:"docs/manager_ftrack_actions#",label:"Sort Review"},{docbase:"docs/manager_ftrack_actions#",label:"Sync to Avalon"},{docbase:"docs/manager_ftrack_actions#",label:"Propagate Thumbnails",target:"thumbnail"}],g=[{label:"Look Management",docs:"docs/artist_hosts_maya#look-development",description:"Publish shading networks with textures and assign them to all assets in the scene at once"},{label:"Project Shelves",description:"Add any custom projects scripts to dynamically generated maya shelves"},{label:"Playblasts",docs:"docs/artist_hosts_maya#reviews",description:"Makes all your playblasts consistent, with burnins and correct viewport settings"},{label:"Model > Render",description:"We cover full project data flow from model throght animation, till final render.",docs:"docs/artist_hosts_maya#working-with-pype-in-maya"},{label:"Plugins Support",description:"Full support for Arnold, Vray, Redshift and Yeti. With more added upon client requests.",docs:"docs/artist_hosts_maya#working-with-yeti-in-pype"}],f=[{label:"Model"},{label:"Look"},{label:"Rig"},{label:"Setdress"},{label:"Animation"},{label:"Cache"},{label:"VDB Cache"},{label:"Assembly"},{label:"Camera"},{label:"RenderSetup"},{label:"Render"},{label:"Plate"},{label:"Review"},{label:"Workfile"},{label:".ASS StandIn"},{label:"Yeti Cache"},{label:"Yeti Rig"},{label:"Vray Scene"},{label:"Vray Proxy"}],k=[{label:"Color Managed",description:"Fully colour managed outputs for work and review.",docs:"docs/artist_hosts_nuke#set-colorspace"},{label:"Script Building",description:"Automatically build first workfiles from published plates or renders",docs:"docs/artist_hosts_nuke#build-first-work-file"},{label:"Node Presets",description:"Template system for centrally controlled node parameters."},{label:"Rendering",description:"Support for local and farm renders, including baked reviews."},{label:"Slates",description:"Generate slates and attach them to rendered."}],E=[{label:"Model"},{label:"Camera"},{label:"Render"},{label:"Plate"},{label:"Review"},{label:"Group"},{label:"Workfile"},{label:"LUT"},{label:"Cache"},{label:"Gizmo"},{label:"Prerender"}],v=[{label:"Render"},{label:"Plate"},{label:"Review"},{label:"LUT"},{label:"Nukenodes"},{label:"Gizmo"},{label:"Workfile"}],y=[{label:"Model"},{label:"Rig"},{label:"Setdress"},{label:"Layout"},{label:"Animation"},{label:"Point Cache"},{label:"Camera"},{label:"RenderSetup"},{label:"Render"},{label:"Review"},{label:"Workfile"}],_=[{label:"Model"},{label:"Point Cache"},{label:"VDB Cache"},{label:"Camera"},{label:"Review"},{label:"Workfile"}],N=[{label:"Render"},{label:"Plate"},{label:"Review"},{label:"Workfile"}],w=[{label:"Render"},{label:"Plate"},{label:"Review"},{label:"Template"},{label:"Rig"},{label:"Pallete"},{label:"Workfile"}],C=[{label:"Render"},{label:"Plate"},{label:"Image"},{label:"LayeredImage"},{label:"Workfile"}],S=function(e){function a(){return e.apply(this,arguments)||this}return Object(r.a)(a,e),a.prototype.render=function(){var e=this.props.label,a=this.props.description,t=this.props.image||"",l=this.props.demo||"",r=this.props.docs||"";return s.a.createElement("div",{className:"card"},s.a.createElement("div",{class:"card__image"},""!=t&&s.a.createElement("img",{src:t,alt:"Image alt text",title:"Logo Title Text 1"})),s.a.createElement("div",{className:"card__body"},s.a.createElement("h4",null,e),s.a.createElement("p",null,a)),s.a.createElement("div",{className:o()("card__footer")},s.a.createElement("div",{class:"button-group button-group--block"},""!=l&&s.a.createElement("a",{href:l,class:"button button--secondary"},"Demo"),""!=r&&s.a.createElement("a",{href:r,class:"button button--secondary"},"Docs"))))},a}(s.a.Component),j=function(e){function a(){return e.apply(this,arguments)||this}return Object(r.a)(a,e),a.prototype.render=function(){var e=this.props.label,a=(this.props.link,this.props.description),t=this.props.demo||"",l=this.props.docs||"";return s.a.createElement("div",{className:"card card_medium"},s.a.createElement("div",{className:"card__header"},s.a.createElement("h4",null,e)),s.a.createElement("div",{className:"card__body"},s.a.createElement("p",null,a)),s.a.createElement("div",{className:o()("card__footer")},s.a.createElement("div",{class:"button-group button-group--block"},""!=t&&s.a.createElement("a",{href:t,class:"button button--secondary"},"Demo"),""!=l&&s.a.createElement("a",{href:l,class:"button button--secondary"},"Docs"))))},a}(s.a.Component),P=function(e){function a(){return e.apply(this,arguments)||this}return Object(r.a)(a,e),a.prototype.render=function(){var e=this.props.label,a=(this.props.description,this.props.docbase||"docs/artist_publish#"),t=(this.props.target||e).toLowerCase();return s.a.createElement("div",{className:"card card_small"},s.a.createElement("a",{href:a+t.split(" ").join("-")},s.a.createElement("div",{className:"card__body"},s.a.createElement("h5",null,e))))},a}(s.a.Component);a.default=function(){var e=Object(d.default)().siteConfig,a=void 0===e?{}:e;return s.a.createElement(i.a,{title:a.title+"- Features",description:"Pype Feature list"},s.a.createElement("section",{className:o()("section lightBackground")},s.a.createElement("div",{className:o()(p.a.card_container,"container")},s.a.createElement("h2",null,"Key Features"),b&&b.length&&s.a.createElement("div",{className:p.a.card_box},b.map((function(e,a){return s.a.createElement(S,Object(l.a)({key:a},e))}))))),s.a.createElement("section",{className:o()("section darkBackground")},s.a.createElement("div",{className:o()(p.a.card_container,"container")},s.a.createElement("h2",{id:"ftrack"},"Ftrack"),u&&u.length&&s.a.createElement("div",{className:p.a.card_box},u.map((function(e,a){return s.a.createElement(j,Object(l.a)({key:a},e))}))),s.a.createElement("h3",null," Actions and Events"),u&&u.length&&s.a.createElement("div",{className:p.a.card_box},h.map((function(e,a){return s.a.createElement(P,Object(l.a)({key:a},e))}))))),s.a.createElement("section",{className:o()("section lightBackground")},s.a.createElement("div",{className:o()(p.a.card_container,"container")},s.a.createElement("h2",{id:"maya"},"Autodesk Maya"),s.a.createElement("p",{className:"sectionDescription"},"versions 2017 and higher"),g&&g.length&&s.a.createElement("div",{className:p.a.card_box},g.map((function(e,a){return s.a.createElement(j,Object(l.a)({key:a},e))}))),s.a.createElement("h3",{className:""}," Supported Families "),f&&f.length&&s.a.createElement("div",{className:p.a.card_box},f.map((function(e,a){return s.a.createElement(P,Object(l.a)({key:a},e))}))))),s.a.createElement("section",{className:o()("section darkBackground")},s.a.createElement("div",{className:o()(p.a.card_container,"container")},s.a.createElement("h2",{id:"nuke"},"Foundry Nuke | NukeX"),s.a.createElement("p",{className:"sectionDescription"},"versions 11.0 and higher"),k&&k.length&&s.a.createElement("div",{className:p.a.card_box},k.map((function(e,a){return s.a.createElement(j,Object(l.a)({key:a},e))}))),s.a.createElement("h3",{className:""}," Supported Families "),E&&E.length&&s.a.createElement("div",{className:p.a.card_box},E.map((function(e,a){return s.a.createElement(P,Object(l.a)({key:a},e))}))))),s.a.createElement("section",{className:o()("section lightBackground")},s.a.createElement("div",{className:o()(p.a.card_container,"container")},s.a.createElement("h2",{id:"hiero"},"Foundry Hiero | Nuke Studio"),s.a.createElement("p",{className:"sectionDescription"},"versions 11.0 and higher"),s.a.createElement("h3",{className:""}," Supported Families "),v&&v.length&&s.a.createElement("div",{className:p.a.card_box},v.map((function(e,a){return s.a.createElement(P,Object(l.a)({key:a},e))}))))),s.a.createElement("section",{className:o()("section darkBackground")},s.a.createElement("div",{className:o()(p.a.card_container,"container")},s.a.createElement("h2",{id:"houdini"},"Houdini"),s.a.createElement("p",{className:"sectionDescription"},"versions 16.0 and higher"),s.a.createElement("h3",{className:""}," Supported Families "),_&&_.length&&s.a.createElement("div",{className:p.a.card_box},_.map((function(e,a){return s.a.createElement(P,Object(l.a)({key:a},e))}))))),s.a.createElement("section",{className:o()("section lightBackground")},s.a.createElement("div",{className:o()(p.a.card_container,"container")},s.a.createElement("h2",null,"Blender"),s.a.createElement("p",{className:"sectionDescription"},"versions 2.80 and higher"),s.a.createElement("h3",{className:""}," Supported Families "),y&&y.length&&s.a.createElement("div",{className:p.a.card_box},y.map((function(e,a){return s.a.createElement(P,Object(l.a)({key:a},e))}))))),s.a.createElement("section",{className:o()("section darkBackground")},s.a.createElement("div",{className:o()(p.a.card_container,"container")},s.a.createElement("h2",null,"Fusion"),s.a.createElement("p",{className:"sectionDescription"},"versions 9 and higher"),s.a.createElement("h3",{className:""}," Supported Families "),N&&N.length&&s.a.createElement("div",{className:p.a.card_box},N.map((function(e,a){return s.a.createElement(P,Object(l.a)({key:a},e))}))))),s.a.createElement("section",{className:o()("section lightBackground")},s.a.createElement("div",{className:o()(p.a.card_container,"container")},s.a.createElement("h2",null,"Harmony"),s.a.createElement("p",{className:"sectionDescription"},"versions 17 and higher"),s.a.createElement("h3",{className:""}," Supported Families "),w&&w.length&&s.a.createElement("div",{className:p.a.card_box},w.map((function(e,a){return s.a.createElement(P,Object(l.a)({key:a},e))}))))),s.a.createElement("section",{className:o()("section darkBackground")},s.a.createElement("div",{className:o()(p.a.card_container,"container")},s.a.createElement("h2",null,"Photoshop"),s.a.createElement("p",{className:"sectionDescription"},"versions 2020 and higher"),s.a.createElement("h3",{className:""}," Supported Families "),C&&C.length&&s.a.createElement("div",{className:p.a.card_box},C.map((function(e,a){return s.a.createElement(P,Object(l.a)({key:a},e))}))))))}}}]);