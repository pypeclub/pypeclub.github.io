export default {
  "title": "PYPE",
  "tagline": "code . training . support",
  "url": "https://pype.club",
  "baseUrl": "/",
  "organizationName": "pypeclub",
  "projectName": "pypeclub.github.io",
  "favicon": "img/favicon/favicon.ico",
  "customFields": {},
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "C:\\code\\pypeclub.github.io\\website_v2\\sidebars.js"
        },
        "theme": {
          "customCss": "C:\\code\\pypeclub.github.io\\website_v2\\src\\css\\custom.css"
        }
      }
    ]
  ],
  "themeConfig": {
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": true,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "navbar": {
      "style": "dark",
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
          "to": "docs/artist_getting_started",
          "label": "User Docs",
          "position": "left"
        },
        {
          "to": "docs/admin_getting_started",
          "label": "Admin Docs",
          "position": "left"
        },
        {
          "to": "docs/api",
          "label": "API",
          "position": "left"
        }
      ],
      "hideOnScroll": false
    },
    "image": "/img/docusaurus.png",
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Artist",
              "to": "docs/artist_getting_started"
            },
            {
              "label": "Manager",
              "to": "docs/manager_ftrack"
            },
            {
              "label": "Admin",
              "to": "docs/admin_config"
            }
          ]
        },
        {
          "title": "Social",
          "items": [
            {
              "label": "Avalon Chat",
              "to": "https://gitter.im/getavalon/Lobby"
            },
            {
              "label": "Pyblish Chat",
              "to": "https://gitter.im/pyblish/pyblish"
            },
            {
              "label": "Pype Chat",
              "to": "https://discord.gg/sFNPWXG"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 Orbi Tools"
    },
    "algolia": {
      "apiKey": "5e01ee3bfbb744ca6f25d4b281ce38a9",
      "indexName": "pype",
      "algoliaOptions": {},
      "appId": "BH4D9OD16A"
    },
    "metadatas": []
  },
  "stylesheets": [
    "https://use.fontawesome.com/releases/v5.7.2/css/all.css"
  ],
  "onBrokenLinks": "throw",
  "onDuplicateRoutes": "warn",
  "plugins": [],
  "themes": []
};