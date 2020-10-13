(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{112:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=u(n),m=r,d=p["".concat(c,".").concat(m)]||p[m]||b[m]||o;return n?a.a.createElement(d,i(i({ref:t},l),{},{components:n})):a.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var r=n(2),a=n(6),o=(n(0),n(112)),c={id:"admin_anatomy",title:"Project Anatomy",sidebar_label:"Folder Structure"},i={unversionedId:"admin_anatomy",id:"admin_anatomy",isDocsHomePage:!1,title:"Project Anatomy",description:"PROJECT Structure",source:"@site/docs/admin_anatomy.md",slug:"/admin_anatomy",permalink:"/docs/admin_anatomy",version:"current",sidebar_label:"Folder Structure"},s=[{value:"PROJECT Structure",id:"project-structure",children:[]},{value:"ASSET Structure",id:"asset-structure",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"project-structure"},"PROJECT Structure"),Object(o.b)("p",null,"This is example project structure when using Pype:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"Project\n  \u251c\u2500\u2500\u2500assets\n  \u2502   \u251c\u2500\u2500\u2500Bob\n  \u2502   \u2514\u2500\u2500\u2500...\n  \u2514\u2500\u2500\u2500episodes\n      \u2514\u2500\u2500\u2500ep01\n          \u2514\u2500\u2500\u2500sq01\n              \u2514\u2500\u2500\u2500ep01_sq01_sh001\n                  \u251c\u2500\u2500\u2500publish\n                  \u2514\u2500\u2500\u2500work\n")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(r.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(r.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(r.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"Shot naming")),Object(o.b)("div",Object(r.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"We do strongly recommend to name shots with their full hierarchical name. Avalon doesn't allow two assets with same name in project. Therefor if you have for example:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"sequence01 / shot001\n")),Object(o.b)("p",{parentName:"div"},"and then"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"sequence02 / shot001\n")),Object(o.b)("p",{parentName:"div"},"you'll run into trouble because there are now two ",Object(o.b)("inlineCode",{parentName:"p"},"shot001"),"."),Object(o.b)("p",{parentName:"div"},"Better way is to use full qualified name for shot. So the above become:"),Object(o.b)("pre",{parentName:"div"},Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"sequence01 / sequence01_shot001\n")),Object(o.b)("p",{parentName:"div"},"This has two advantages: there will be no duplicities this way and artists can see just by looking at filename the whole hierarchy."))),Object(o.b)("h2",{id:"asset-structure"},"ASSET Structure"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-text"}),"Bob\n  \u251c\u2500\u2500\u2500publish\n  \u2502   \u251c\u2500\u2500\u2500model\n  \u2502   \u2502   \u251c\u2500\u2500\u2500modelMain\n  \u2502   \u2502   \u251c\u2500\u2500\u2500modelProxy\n  \u2502   \u2502   \u2514\u2500\u2500\u2500modelSculpt\n  \u2502   \u251c\u2500\u2500\u2500workfile\n  \u2502   \u2502   \u2514\u2500\u2500\u2500taskName\n  \u2502   \u251c\u2500\u2500\u2500rig\n  \u2502   \u2502   \u2514\u2500\u2500\u2500rigMain\n  \u2502   \u251c\u2500\u2500\u2500look\n  \u2502   \u2502   \u251c\u2500\u2500\u2500lookMain\n  \u2502   \u2502   \u2502   \u2514\u2500\u2500\u2500v01\n  \u2502   \u2502   \u2502       \u2514\u2500\u2500\u2500texture\n  \u2502   \u2502   \u2514\u2500\u2500\u2500lookWet\n  \u2502   \u251c\u2500\u2500\u2500camera\n  \u2502   \u2502   \u251c\u2500\u2500\u2500camMain\n  \u2502   \u2502   \u2514\u2500\u2500\u2500camLayout\n  \u2502   \u251c\u2500\u2500\u2500cache\n  \u2502   \u2502   \u251c\u2500\u2500\u2500cacheChar01\n  \u2502   \u2502   \u2514\u2500\u2500\u2500cacheRock01\n  \u2502   \u251c\u2500\u2500\u2500vrproxy\n  \u2502   \u251c\u2500\u2500\u2500fx\n  \u2502   \u2514\u2500\u2500\u2500setdress\n  \u2514\u2500\u2500\u2500work\n      \u251c\u2500\u2500\u2500concept\n      \u251c\u2500\u2500\u2500fur\n      \u251c\u2500\u2500\u2500modelling\n      \u251c\u2500\u2500\u2500rig\n      \u251c\u2500\u2500\u2500look\n      \u2514\u2500\u2500\u2500taskName\n")))}u.isMDXComponent=!0}}]);