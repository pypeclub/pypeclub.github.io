(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{113:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(127)),i={id:"artist_concepts",title:"Key concepts",sidebar_label:"Key Concepts"},s={unversionedId:"artist_concepts",id:"artist_concepts",isDocsHomePage:!1,title:"Key concepts",description:"Glossary",source:"@site/docs/artist_concepts.md",slug:"/artist_concepts",permalink:"/docs/artist_concepts",version:"current",sidebar_label:"Key Concepts",sidebar:"artist",previous:{title:"Getting started with Pype",permalink:"/docs/artist_getting_started"},next:{title:"Publishing",permalink:"/docs/artist_publish"}},l=[{value:"Glossary",id:"glossary",children:[{value:"Asset",id:"asset",children:[]},{value:"Subset",id:"subset",children:[]},{value:"Version",id:"version",children:[]},{value:"Representation",id:"representation",children:[]},{value:"Family",id:"family",children:[]},{value:"Host",id:"host",children:[]},{value:"Tool",id:"tool",children:[]},{value:"Publish",id:"publish",children:[]},{value:"Load",id:"load",children:[]}]}],c={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"glossary"},"Glossary"),Object(o.b)("h3",{id:"asset"},"Asset"),Object(o.b)("p",null,"In our pipeline all the main entities the project is made from are internally considered ",Object(o.b)("em",{parentName:"p"},"'Assets'"),". Episode, sequence, shot, character, prop, etc. All of these behave identically in the pipeline. Asset names need to be absolutely unique within the project because they are their key identifier."),Object(o.b)("h3",{id:"subset"},"Subset"),Object(o.b)("p",null,"Usually, an asset needs to be created in multiple ",Object(o.b)("em",{parentName:"p"},"'flavours'"),". A character might have multiple different looks, model needs to be published in different resolutions, a standard animation rig might not be useable in a crowd system and so on. 'Subsets' are here to accommodate all this variety that might be needed within a single asset. A model might have subset: ",Object(o.b)("em",{parentName:"p"},"'main'"),", ",Object(o.b)("em",{parentName:"p"},"'proxy'"),", ",Object(o.b)("em",{parentName:"p"},"'sculpt'"),", while data of ",Object(o.b)("em",{parentName:"p"},"'look'")," family could have subsets ",Object(o.b)("em",{parentName:"p"},"'main'"),", ",Object(o.b)("em",{parentName:"p"},"'dirty'"),", ",Object(o.b)("em",{parentName:"p"},"'damaged'"),". Subsets have some recommendations for their names, but ultimately it's up to the artist to use them for separation of publishes when needed."),Object(o.b)("h3",{id:"version"},"Version"),Object(o.b)("p",null,"A numbered iteration of a given subset. Each version contains at least one ",Object(o.b)("a",{parentName:"p",href:"#representation",title:"representation"},"representation"),"."),Object(o.b)("h3",{id:"representation"},"Representation"),Object(o.b)("p",null,"Each published variant can come out of the software in multiple representations. All of them hold exactly the same data, but in different formats. A model, for example, might be saved as ",Object(o.b)("inlineCode",{parentName:"p"},".OBJ"),", Alembic, Maya geometry or as all of them, to be ready for pickup in any other applications supporting these formats."),Object(o.b)("h3",{id:"family"},"Family"),Object(o.b)("p",null,"Each published ",Object(o.b)("a",{parentName:"p",href:"#subset",title:"subset"},"subset")," can have exactly one family assigned to it. Family determines the type of data that the subset holds. Family doesn't dictate the file type, but can enforce certain technical specifications. For example Pype default configuration expects ",Object(o.b)("inlineCode",{parentName:"p"},"model")," family to only contain geometry without any shaders or joins when it is published."),Object(o.b)("h3",{id:"host"},"Host"),Object(o.b)("p",null,"General term for Software or Application supported by Pype and Avalon. These are usually DCC applications like Maya, Houdini or Nuke, but can also be a web based service like Ftrack or Clockify."),Object(o.b)("h3",{id:"tool"},"Tool"),Object(o.b)("p",null,"Small piece of software usually dedicated to a particular purpose. Most of pype and avalon tools have GUI, but some are command line only"),Object(o.b)("h3",{id:"publish"},"Publish"),Object(o.b)("p",null,"Process of exporting data from your work scene to versioned, immutable file that can be used by other artists in the studio."),Object(o.b)("h3",{id:"load"},"Load"),Object(o.b)("p",null,"Process of importing previously published subsets into your current scene, using any of the pype tools.\nLoading asset using proper tools will ensure that all your scene content stays version controlled and updatable at a later point"))}p.isMDXComponent=!0},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=a.a.createContext({}),p=function(e){var t=a.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,m=u["".concat(i,".").concat(d)]||u[d]||b[d]||o;return n?a.a.createElement(m,s(s({ref:t},c),{},{components:n})):a.a.createElement(m,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);