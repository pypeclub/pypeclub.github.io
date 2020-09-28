module.exports = {
  title: 'PYPE',
  tagline: 'code . training . support',
  url: 'https://pype.club',
  baseUrl: '/',
  organizationName: 'pypeclub',
  projectName: 'pypeclub.github.io',
  favicon: 'img/favicon/favicon.ico',
  customFields: {
    users: [
      {
        caption: 'Imagine Studio',
        image: '/img/imagine_logo.png',
        infoLink: 'https://imaginestudio.cz/',
        pinned: true
      }, {
        caption: 'Dazzle Pictures',
        image: '/img/dazzle_CB.png',
        infoLink: 'https://www.dazzlepictures.net/',
        pinned: true
      }, {
        caption: 'Fresh Films',
        image: '/img/fresh-films-logo.jpg',
        infoLink: 'http://freshfilms.cz/',
        pinned: true
      }, {
        caption: '3DE',
        id: '3de',
        image: '/img/3de.png',
        infoLink: 'https://www.3de.com.pl/',
        pinned: true
      }, {
        caption: 'Cubic Motion',
        image: '/img/cubicmotion.png',
        infoLink: 'https://cubicmotion.com/',
        pinned: true
      }, {
        caption: 'Clothcat Animation',
        image: '/img/clothcat.png',
        infoLink: 'https://www.clothcatanimation.com/',
        pinned: true
      }, {
        caption: 'Incognito',
        image: '/img/client_incognito.png',
        infoLink: 'https://incognito.studio/',
        pinned: true
      }, {
        caption: 'Bionaut',
        image: '/img/bionaut_logo.png',
        infoLink: 'https://bionaut.cz/',
        pinned: true
      }, {
        caption: '3Bohemians',
        image: '/img/3bohemians-logo.png',
        infoLink: 'https://www.3bohemians.eu//',
        pinned: true
      }, {
        caption: 'Fourth Wall',
        image: '/img/FW_logo_primary.png',
        infoLink: 'https://fourthwallanimation.com/',
        pinned: true
      }, {
        caption: 'The Scope',
        image: '/img/thescope_logo.png',
        infoLink: 'https://thescope.studio/',
        pinned: true
      }
    ],
    fonts: {
      futura: ['futura-pt', 'sans-serif']
    },
    markdownPlugins: [null]
  },
  presets: [
    [
      '@docusaurus/preset-classic', {
        docs: {
          sidebarPath: require.resolve('./sidebars.json'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        }
      }
    ]
  ],
  themeConfig: {
    colorMode: {
      // "light" | "dark"
      defaultMode: 'light',

      // Hides the switch in the navbar
      // Useful if you want to support a single color mode
      disableSwitch: true
    },
    navbar: {
      title: 'PYPE',
      logo: {
        src: 'img/favicon/P.png'
      },
      items: [
        {
          to: '/features',
          label: 'Features',
          position: 'left'
        }, {
          to: 'docs/',
          label: 'Artist',
          position: 'left'
        }, {
          to: 'docs/manager_naming',
          label: 'Manager',
          position: 'left'
        }, {
          to: 'docs/admin_getting_started',
          label: 'Admin',
          position: 'left'
        }, {
          to: 'docs/api',
          label: 'API',
          position: 'left'
        }
      ]
    },
    image: '/img/docusaurus.png',
    footer: {
      links: [],
      copyright: 'Copyright © 2020 Orbi Tools',
      logo: {
        src: 'img/favicon/P.png'
      }
    },
    algolia: {
      apiKey: '5e01ee3bfbb744ca6f25d4b281ce38a9',
      indexName: 'pype',
      algoliaOptions: {}
    }
  }
};
