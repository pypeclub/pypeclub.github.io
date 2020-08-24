export default {
  "title": "PYPE",
  "tagline": "code . training . support",
  "url": "https://pype.club",
  "baseUrl": "/",
  "organizationName": "pypeclub",
  "projectName": "pypeclub.github.io",
  "scripts": [
    "https://code.jquery.com/jquery-3.3.1.min.js",
    "https://buttons.github.io/buttons.js",
    "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/clipboard.js/2.0.0/clipboard.min.js",
    "/js/code-block-buttons.js"
  ],
  "stylesheets": [
    "https://fonts.googleapis.com/icon?family=Material+Icons",
    "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick.min.css",
    "https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.9.0/slick-theme.min.css",
    "https://fonts.googleapis.com/css?family=Roboto",
    "https://use.fontawesome.com/releases/v5.7.2/css/all.css",
    "https://use.typekit.net/zcf6xee.css"
  ],
  "favicon": "img/favicon/favicon.ico",
  "customFields": {
    "users": [
      {
        "caption": "Imagine Studio",
        "image": "/img/imagine_logo.png",
        "infoLink": "https://imaginestudio.cz/",
        "pinned": true
      },
      {
        "caption": "Dazzle Pictures",
        "image": "/img/dazzle_CB.png",
        "infoLink": "https://www.dazzlepictures.net/",
        "pinned": true
      },
      {
        "caption": "Fresh Films",
        "image": "/img/fresh-films-logo.jpg",
        "infoLink": "http://freshfilms.cz/",
        "pinned": true
      },
      {
        "caption": "3DE",
        "id": "3de",
        "image": "/img/3de.png",
        "infoLink": "https://www.3de.com.pl/",
        "pinned": true
      },
      {
        "caption": "Cubic Motion",
        "image": "/img/cubicmotion.png",
        "infoLink": "https://cubicmotion.com/",
        "pinned": true
      },
      {
        "caption": "Clothcat Animation",
        "image": "/img/clothcat.png",
        "infoLink": "https://www.clothcatanimation.com/",
        "pinned": true
      },
      {
        "caption": "Incognito",
        "image": "/img/client_incognito.png",
        "infoLink": "https://incognito.studio/",
        "pinned": true
      },
      {
        "caption": "Bionaut",
        "image": "/img/bionaut_logo.png",
        "infoLink": "https://bionaut.cz/",
        "pinned": true
      },
      {
        "caption": "3Bohemians",
        "image": "/img/3bohemians-logo.png",
        "infoLink": "https://www.3bohemians.eu//",
        "pinned": true
      },
      {
        "caption": "Fourth Wall",
        "image": "/img/FW_logo_primary.png",
        "infoLink": "https://fourthwallanimation.com/",
        "pinned": true
      },
      {
        "caption": "The Scope",
        "image": "/img/thescope_logo.png",
        "infoLink": "https://thescope.studio/",
        "pinned": true
      }
    ],
    "fonts": {
      "futura": [
        "futura-pt",
        "sans-serif"
      ]
    },
    "markdownPlugins": [
      null
    ]
  },
  "onBrokenLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "homePageId": "artist_getting_started",
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "..\\docs",
          "sidebarPath": "C:\\CODE\\pypeclub-github-io\\website_v2\\sidebars.json"
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": "C:\\CODE\\pypeclub-github-io\\website_v2\\src\\css\\customTheme.css"
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "title": "PYPE",
      "logo": {
        "src": "img/favicon/P.png"
      },
      "items": [
        {
          "to": "/features",
          "label": "Features",
          "position": "left"
        },
        {
          "to": "docs/",
          "label": "Artist",
          "position": "left"
        },
        {
          "to": "docs/manager_naming",
          "label": "Manager",
          "position": "left"
        },
        {
          "to": "docs/admin_getting_started",
          "label": "Admin",
          "position": "left"
        },
        {
          "to": "docs/api",
          "label": "API",
          "position": "left"
        },
        {
          "label": "Version",
          "to": "docs",
          "position": "right",
          "items": [
            {
              "label": "2.11.0",
              "to": "docs/",
              "activeBaseRegex": "docs/(?!2.3.0|2.3.6|2.4.0|2.5.0|2.6.0|2.7.0|2.8.0|2.9.0|2.10.0|2.11.0|next)",
              "position": "left"
            },
            {
              "label": "2.10.0",
              "to": "docs/2.10.0/",
              "position": "left"
            },
            {
              "label": "2.9.0",
              "to": "docs/2.9.0/",
              "position": "left"
            },
            {
              "label": "2.8.0",
              "to": "docs/2.8.0/",
              "position": "left"
            },
            {
              "label": "2.7.0",
              "to": "docs/2.7.0/",
              "position": "left"
            },
            {
              "label": "2.6.0",
              "to": "docs/2.6.0/",
              "position": "left"
            },
            {
              "label": "2.5.0",
              "to": "docs/2.5.0/",
              "position": "left"
            },
            {
              "label": "2.4.0",
              "to": "docs/2.4.0/",
              "position": "left"
            },
            {
              "label": "2.3.6",
              "to": "docs/2.3.6/",
              "position": "left"
            },
            {
              "label": "2.3.0",
              "to": "docs/2.3.0/",
              "position": "left"
            },
            {
              "label": "Master/Unreleased",
              "to": "docs/next/",
              "activeBaseRegex": "docs/next/(?!support|team|resources)",
              "position": "left"
            }
          ]
        }
      ],
      "hideOnScroll": false
    },
    "image": "/img/docusaurus.png",
    "footer": {
      "links": [],
      "copyright": "Copyright © 2020 Orbi Tools",
      "logo": {
        "src": "img/favicon/P.png"
      },
      "style": "light"
    },
    "algolia": {
      "apiKey": "5e01ee3bfbb744ca6f25d4b281ce38a9",
      "indexName": "pype",
      "algoliaOptions": {},
      "appId": "BH4D9OD16A"
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    }
  },
  "themes": []
};