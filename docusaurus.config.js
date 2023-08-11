// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "KOV Parts CRM",
  tagline: "Manual de Usuario",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://devkov.wiboo.com.mx",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Wiboo México", // Usually your GitHub org/user name.
  projectName: "kov-parts-docusaurus-solution", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "es",
    locales: ["es"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: "img/docusaurus-social-card.jpg",
      navbar: {
        title: "Kov Parts - CRM",
        logo: {
          alt: "KOv Parts Logo",
          src: "img/docusaurus.png",
        },
        items: [
          {
            type: "docSidebar",
            sidebarId: "tutorialSidebar",
            position: "left",
            label: "Manual",
          },
          {
            href: "https://github.com/carloswiboo/kov-parts-next-solution",
            label: "Back-End",
            position: "right",
          },
          {
            href: "https://github.com/carloswiboo/kov-parts-next-solution",
            label: "Front-End",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Documentación",
            items: [
              {
                label: "Manual",
                to: "/docs/intro",
              },
            ],
          },

          {
            title: "Información",
            items: [
              {
                label: "Wiboo página oficial",
                to: "https://www.wiboo.com.mx",
              },
              {
                label: "Contacto correo electrónico",
                to: "mailto:contacto@wiboo.com.mx",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Wiboo México, Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
