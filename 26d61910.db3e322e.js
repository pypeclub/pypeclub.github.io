(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{113:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=a.a.createContext({}),p=function(e){var t=a.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),u=p(n),b=r,m=u["".concat(s,".").concat(b)]||u[b]||d[b]||o;return n?a.a.createElement(m,c(c({ref:t},i),{},{components:n})):a.a.createElement(m,c({ref:t},i))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},72:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(113)),s={id:"admin_presets_tools",title:"Presets > Tools",sidebar_label:"Tools"},c={unversionedId:"admin_presets_tools",id:"admin_presets_tools",isDocsHomePage:!1,title:"Presets > Tools",description:"Colorspace",source:"@site/docs\\admin_presets_tools.md",slug:"/admin_presets_tools",permalink:"/docs/admin_presets_tools",version:"current",sidebar_label:"Tools",sidebar:"Admin",previous:{title:"Presets > Plugins",permalink:"/docs/admin_presets_plugins"},next:{title:"Changelog",permalink:"/docs/changelog"}},l=[{value:"Colorspace",id:"colorspace",children:[{value:"<code>Default</code> dict",id:"default-dict",children:[]},{value:"<code>aces103-cg</code> dict",id:"aces103-cg-dict",children:[]}]},{value:"Creator Defaults",id:"creator-defaults",children:[]},{value:"Project Folder Structure",id:"project-folder-structure",children:[{value:"<code>__project_root__</code> dict",id:"__project_root__-dict",children:[]}]},{value:"Software Folders",id:"software-folders",children:[]},{value:"Tray Items",id:"tray-items",children:[{value:"<code>item_usage</code> dict",id:"item_usage-dict",children:[]}]},{value:"Muster Templates",id:"muster-templates",children:[]}],i={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"colorspace"},"Colorspace"),Object(o.b)("p",null,"We provide two examples of possible settings for nuke, but these can vary wildly between clients and projects."),Object(o.b)("h3",{id:"default-dict"},Object(o.b)("inlineCode",{parentName:"h3"},"Default")," ","[dict]"),Object(o.b)("p",null,"path: ",Object(o.b)("inlineCode",{parentName:"p"},"pype-config/presets/colorspace/default.json")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'"nuke": {\n    "root": {\n        "colorManagement": "Nuke",\n        "OCIO_config": "nuke-default",\n        "defaultViewerLUT": "Nuke Root LUTs",\n        "monitorLut": "sRGB",\n        "int8Lut": "sRGB",\n        "int16Lut": "sRGB",\n        "logLut": "Cineon",\n        "floatLut": "linear"\n    },\n    "viewer": {\n        "viewerProcess": "sRGB"\n    },\n    "write": {\n        "render": {\n            "colorspace": "linear"\n        },\n        "prerender": {\n            "colorspace": "linear"\n        },\n        "still": {\n            "colorspace": "sRGB"\n        }\n    }\n},\n')),Object(o.b)("h3",{id:"aces103-cg-dict"},Object(o.b)("inlineCode",{parentName:"h3"},"aces103-cg")," ","[dict]"),Object(o.b)("p",null,"path: ",Object(o.b)("inlineCode",{parentName:"p"},"pype-config/presets/colorspace/aces103-cg.json")),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'"nuke": {\n  "root": {\n    "colorManagement": "OCIO",\n    "OCIO_config": "aces_1.0.3",\n    "workingSpaceLUT": "ACES - ACEScg",\n    "defaultViewerLUT": "OCIO LUTs",\n    "monitorLut": "ACES/sRGB D60 sim.",\n    "int8Lut": "Utility - sRGB - Texture",\n    "int16Lut": "Utility - sRGB - Texture",\n    "logLut": "Input - ARRI - V3 LogC (EI800) - Wide Gamut",\n    "floatLut": "ACES - ACES2065-1"\n  },\n  "viewer": {\n    "viewerProcess": "sRGB D60 sim. (ACES)"\n  },\n  "write": {\n    "render": {\n      "colorspace": "ACES - ACEScg"\n    },\n    "prerender": {\n      "colorspace": "ACES - ACEScg"\n    },\n    "still": {\n      "colorspace": "Utility - Curve - sRGB"\n    }\n  }\n},\n')),Object(o.b)("h2",{id:"creator-defaults"},"Creator Defaults"),Object(o.b)("p",null,"path: ",Object(o.b)("inlineCode",{parentName:"p"},"pype-config/presets/tools/creator.json")),Object(o.b)("p",null,"This preset tells the creator tools what family should be pre-selected in different tasks. Keep in mind that the task is matched loosely so for example any task with 'model' in it's name will be considered a modelling task for these purposes."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},'"Family name": ["list, "of, "tasks"]')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'"Model": ["model"],\n"Render Globals": ["light", "render"],\n"Layout": ["layout"],\n"Set Dress": ["setdress"],\n"Look": ["look"],\n"Rig": ["rigging"]\n')),Object(o.b)("h2",{id:"project-folder-structure"},"Project Folder Structure"),Object(o.b)("p",null,"path: ",Object(o.b)("inlineCode",{parentName:"p"},"pype-config/presets/tools/project_folder_structure.json")),Object(o.b)("p",null,"Defines the base folder structure for a project. This is supposed to act as a starting point to quickly creat the base of the project. You can add ",Object(o.b)("inlineCode",{parentName:"p"},"[ftrack.entityType]")," after any of the folders here and they will automatically be also created in ftrack project."),Object(o.b)("h3",{id:"__project_root__-dict"},Object(o.b)("inlineCode",{parentName:"h3"},"__project_root__")," ","[dict]"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'"__project_root__": {\n    "_prod" : {},\n    "_resources" : {\n      "footage": {\n        "ingest": {},\n        "offline": {}\n      },\n      "audio": {},\n      "art_dept": {},\n    },\n    "editorial" : {},\n    "assets[ftrack.Library]": {\n      "characters[ftrack]": {},\n      "locations[ftrack]": {}\n    },\n    "shots[ftrack.Sequence]": {\n      "editorial[ftrack.Folder]": {}\n    }\n}\n')),Object(o.b)("h2",{id:"software-folders"},"Software Folders"),Object(o.b)("p",null,"path: ",Object(o.b)("inlineCode",{parentName:"p"},"pype-config/presets/tools/sw_folders.json")),Object(o.b)("p",null,"Defines extra folders to be created inside the work space when particular task type is launched. Mostly used for configs, that use {app} key in their work template and want to add hosts that are not supported yet."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'"compositing": ["nuke", "ae"],\n"modeling": ["maya", "app2"],\n"lookdev": ["substance"],\n"animation": [],\n"lighting": [],\n"rigging": []\n')),Object(o.b)("h2",{id:"tray-items"},"Tray Items"),Object(o.b)("p",null,"path: ",Object(o.b)("inlineCode",{parentName:"p"},"pype-config/presets/tray/menu_items.json")),Object(o.b)("p",null,"This preset let's admins to turn different pype modules on and off from the tray menu, which in turn makes them unavailable across the pipeline"),Object(o.b)("h3",{id:"item_usage-dict"},Object(o.b)("inlineCode",{parentName:"h3"},"item_usage")," ","[dict]"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'"item_usage": {\n    "User settings": false,\n    "Ftrack": true,\n    "Muster": false,\n    "Avalon": true,\n    "Clockify": false,\n    "Standalone Publish": true,\n    "Logging": true,\n    "Idle Manager": true,\n    "Timers Manager": true,\n    "Rest Api": true\n},\n')),Object(o.b)("h2",{id:"muster-templates"},"Muster Templates"),Object(o.b)("p",null,"path: ",Object(o.b)("inlineCode",{parentName:"p"},"pype-config/presets/muster/templates_mapping.json")),Object(o.b)("p",null,"Muster template mapping maps Muster template ID to name of renderer. Initially it is set Muster defaults. About templates and Muster se Muster Documentation. Mapping is defined in:"),Object(o.b)("p",null,"Keys are renderer names and values are templates IDs."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-python"}),'"3delight": 41,\n"arnold": 46,\n"arnold_sf": 57,\n"gelato": 30,\n"harware": 3,\n"krakatoa": 51,\n"file_layers": 7,\n"mentalray": 2,\n"mentalray_sf": 6,\n"redshift": 55,\n"renderman": 29,\n"software": 1,\n"software_sf": 5,\n"turtle": 10,\n"vector": 4,\n"vray": 37,\n"ffmpeg": 48\n')))}p.isMDXComponent=!0}}]);