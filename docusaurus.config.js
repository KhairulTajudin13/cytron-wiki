// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cytron Technologies Wiki',
  tagline: 'Technical documentation for Cytron products',
  favicon: 'img/CytronFavicon-01.svg',

  // Set the production url of your site here
  url: 'https://cytron-wiki.pages.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'KhairulTajudin13',
  projectName: 'cytron-wiki',

  onBrokenLinks: 'throw',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          editUrl:
            'https://github.com/KhairulTajudin13/cytron-wiki/tree/main/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        indexDocs: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/cytron-wiki-social-card.jpg',
      navbar: {
        title: 'Cytron Wiki',
        logo: {
          alt: 'Cytron Technologies',
          src: 'img/CytronFavicon-01.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'productsSidebar',
            position: 'left',
            label: 'Products',
          },
          {to: '/docs/kits/', label: 'Kits & Solutions', position: 'left'},
          {
            type: 'search',
            position: 'right',
          },
          {
            href: 'https://github.com/KhairulTajudin13/cytron-wiki',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Products',
            items: [
              {label: 'IRIV PiControl', to: '/docs/products/iriv-picontrol/'},
              {label: 'IRIV IO Controller', to: '/docs/products/iriv-io-controller/'},
              {label: 'IRIV SmartHub CM5', to: '/docs/products/iriv-smarthub-cm5/'},
              {label: 'IRIV EdgeAI CM5', to: '/docs/products/iriv-edgeai-cm5/'},
              {label: 'Kits & Solutions', to: '/docs/kits/'},
            ],
          },
          {
            title: 'Cytron',
            items: [
              {label: 'Shop (my.cytron.io)', href: 'https://my.cytron.io/c-industrial-with-raspberry-pi'},
              {label: 'Tutorials', href: 'https://my.cytron.io/tutorial'},
              {label: 'Cytron website', href: 'https://www.cytron.io'},
            ],
          },
          {
            title: 'Help',
            items: [
              {label: 'Technical support', href: 'mailto:support@cytron.io'},
              {label: 'Sales enquiries', href: 'mailto:sales@cytron.io'},
              {label: 'Wiki source on GitHub', href: 'https://github.com/KhairulTajudin13/cytron-wiki'},
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Cytron Technologies. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
