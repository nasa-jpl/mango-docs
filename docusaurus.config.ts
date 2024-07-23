import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';
import 'dotenv/config';

const config: Config = {
  title: 'MANGO User Guide',
  favicon: 'img/favicon.ico',
  tagline: 'Monitoring and ANalysis for Gravity Operations',

  // Set the production url of your site here
  url: process.env.URL,
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/mango/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [['@easyops-cn/docusaurus-search-local', {
    searchBarShortcutHint: false
  }
  ]],

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
    
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'MANGO User Guide',
      logo: {
        alt: 'MANGO',
        src: 'img/logo.svg',
      },
      items: [
        {
          label: 'Docs',
          position: 'left',
          to: "docs/intro"
        },
        {
          href: process.env.URL + '/mango/',
          label: 'UI',
          position: 'left',
        },
        {
          href: process.env.URL + '/mango/api/docs',
          label: 'API',
          position: 'left',
        },
        {
          type: 'search',
          position: 'left',
        },
        {
          href: '***REMOVED***',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        // {
        //   title: 'Community',
        //   items: [
        //     {
        //       label: 'Stack Overflow',
        //       href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //     },
        //     {
        //       label: 'Discord',
        //       href: 'https://discordapp.com/invite/docusaurus',
        //     },
        //     {
        //       label: 'Twitter',
        //       href: 'https://twitter.com/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} NASA Jet Propulsion Laboratory, California Institute of Technology`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
