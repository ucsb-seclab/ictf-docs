// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'iCTF Docs',
  // tagline: 'Dinosaurs are cool',
  favicon: 'img/favicon.ico',

  trailingSlash: true,

  // Set the production url of your site here
  url: 'https://ucsb-seclab.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ictf-docs/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'ucsb-seclab', // Usually your GitHub org/user name.
  projectName: 'ictf-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

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
            'https://github.com/ucsb-seclab/ictf-docs/tree/main/',
          routeBasePath: '/'
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'iCTF Docs',
        logo: {
          src: 'img/action-black.svg',
          srcDark: 'img/action-white.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'setup',
            position: 'left',
            label: 'Setup',
          },
          {
            type: 'docSidebar',
            sidebarId: 'writeups',
            position: 'left',
            label: 'Writeups',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            items: [
              {
                label: 'ACTION Institute',
                href: 'https://action.ucsb.edu/',
              },
              {
                label: 'UCSB Seclab',
                href: 'https://seclab.cs.ucsb.edu/',
              },
              {
                label: 'Shellphish',
                href: 'https://shellphish.net/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} UCSB Seclab. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
