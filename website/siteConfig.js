/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

// List of projects/orgs using your project for the users page.
const users = [


  {
    caption: 'Imagine Studio',
    image: '/img/imagine_logo.png',
    infoLink: 'https://imaginestudio.cz/',
    pinned: true
  },
  {
    caption: 'Dazzle Pictures',
    image: '/img/dazzle_CB.png',
    infoLink: 'https://www.dazzlepictures.net/',
    pinned: true
  },
  {
    caption: 'Fresh Films',
    image: '/img/fresh-films-logo.jpg',
    infoLink: 'http://freshfilms.cz/',
    pinned: true
  },
  {
    caption: '3DE',
    id: '3de',
    image: '/img/3de.png',
    infoLink: 'https://www.3de.com.pl/',
    pinned: true
  },
  {
    caption: 'Cubic Motion',
    image: '/img/cubicmotion.png',
    infoLink: 'https://cubicmotion.com/',
    pinned: true
  },
  {
    caption: 'Clothcat Animation',
    image: '/img/clothcat.png',
    infoLink: 'https://www.clothcatanimation.com/',
    pinned: true
  },
  {
    caption: 'Incognito',
    image: '/img/client_incognito.png',
    infoLink: 'https://incognito.studio/',
    pinned: true
  },
  {
    caption: 'Bionaut',
    image: '/img/bionaut_logo.png',
    infoLink: 'https://bionaut.cz/',
    pinned: true
  },
  {
    caption: '3Bohemians',
    image: '/img/3bohemians-logo.png',
    infoLink: 'https://www.3bohemians.eu//',
    pinned: true
  },
  {
    caption: 'Fourth Wall',
    image: '/img/FW_logo_primary.png',
    infoLink: 'https://fourthwallanimation.com/',
    pinned: true
  },
  {
    caption: 'The Scope',
    image: '/img/thescope_logo.png',
    infoLink: 'https://thescope.studio/',
    pinned: true
  }
];

// List of projects/orgs using your project for the users page.
const collaborators = [
  {
    caption: 'Colorbleed',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/colorbleed-logo.png',
    infoLink: 'http://www.colorbleed.nl',
    pinned: true
  },
  {
    caption: 'Kredenc Studio',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/kredenc.png',
    infoLink: 'https://kredenc.studio',
    pinned: true
  },
  {
    caption: 'Bumpy Box',
    // You will need to prepend the image path with your baseUrl
    // if it is not '/', like: '/test-site/img/docusaurus.svg'.
    image: '/img/bumpybox_colour.png',
    infoLink: 'http://www.bumpybox.com',
    pinned: true
  }
];

const siteConfig = {
  title: 'PYPE', // Title for your website.
  tagline: 'code . training . support',
  url: 'https://pype.club', // Your website URL
  baseUrl: '/', // Base URL for your project */
  // For github.io type URLs, you would set the url and baseUrl like:
  //   url: 'https://facebook.github.io',
  //   baseUrl: '/test-site/',

  // Used for publishing and more
  projectName: 'pypeclub.github.io',
  organizationName: 'pypeclub',
  // For top-level user or org sites, the organization is still the same.
  // e.g., for the https://JoelMarcey.github.io site, it would be set like...
  //   organizationName: 'JoelMarcey'


  // For no header links in the top nav bar -> headerLinks: [],
  headerLinks: [
    { page: 'features', label: 'Features' },
    { doc: 'artist_getting_started', label: 'Artist' },
    { doc: 'manager_naming', label: 'Manager' },
    { doc: 'admin_getting_started', label: 'Admin' },
    { doc: 'api', label: 'API' },
    { search: true },
    { languages: true }
  ],

  algolia: {
    apiKey: '5e01ee3bfbb744ca6f25d4b281ce38a9',
    indexName: 'pype',
    algoliaOptions: {} // Optional, if provided by Algolia
  },

  cname: "pype.club",

  // If you have users set above, you add it here:
  users,

  /* path to images for header/footer */
  headerIcon: 'img/favicon/P.png',
  footerIcon: 'img/favicon/P.png',
  favicon: 'img/favicon/favicon.ico',

  /* Colors for website */
  colors: {
    primaryColor: '#282c34',
    secondaryColor: '#52db91'
  },

  /* Custom fonts for website */

  fonts: {
    futura: [
      "futura-pt",
      "sans-serif"
    ]
  },


  // This copyright info is used in /core/Footer.js and blog RSS/Atom feeds.
  copyright: `Copyright © ${new Date().getFullYear()} Orbi Tools`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: 'atom-one-dark'
  },

  markdownPlugins: [
    // Highlight admonitions.
    require('remarkable-admonitions')({ icon: 'svg-inline' })
  ],

  // Add custom scripts here that would be placed in <script> tags
  scripts: [
    'https://code.jquery.com/jquery-3.3.1.min.js',
    'https://buttons.github.io/buttons.js',
    'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js',
    'https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js',
    '/js/code-block-buttons.js'
  ],
  stylesheets: [
    'https://fonts.googleapis.com/icon?family=Material+Icons',
    'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css',
    'https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css',
    'https://fonts.googleapis.com/css?family=Roboto',
    'https://use.fontawesome.com/releases/v5.7.2/css/all.css',
    'https://use.typekit.net/zcf6xee.css'
  ],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  scrollToTop: true,
  scrollToTopOptions: {
    zIndex: 100
  },
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: '/img/docusaurus.png',
  twitterImage: '/img/docusaurus.png'

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  // enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  //   repoUrl: 'https://github.com/facebook/test-site',
};

module.exports = siteConfig;
