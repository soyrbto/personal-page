/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    `gatsby-plugin-portal`,
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint:
          'https://soytraspalacio.us21.list-manage.com/subscribe/post?u=23d5f00f4036c9a68ba6fb54f&amp;id=e22e0f2db1&amp;f_id=0046c1e1f0',
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images/`,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        icon: 'src/assets/images/favicon.svg',
      },
    },
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: `https://soyrbto.digitalpress.blog`,
        contentApiKey: `e7831d8c63ff9b3cf73e59012d`,
        version: `v5.20.0`,
      },
    },
    {
      resolve: 'gatsby-plugin-sass',
      sassOptions: {
        includePaths: [`${__dirname}/src/styles/main.scss`],
      },
      options: {
        additionalData: `
        @import "${__dirname}/src/styles/variables";
        @import "${__dirname}/src/styles/mixins";
        `,
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Josefin Sans, Josefin Slab, Poppins `,
            file: `https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;0,500;0,600;1,500&family=Josefin+Slab:wght@400;600&family=Poppins:wght@700&display=swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          'G-ZPZEJST46F', // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Defaults to https://www.googletagmanager.com
          origin: 'https://www.googletagmanager.com',
        },
      },
    },
  ],
  siteMetadata: {
    title: `Roberto Traspacio Servicios de desarrollo de productos web `,
    description: `Servicios de desarrollo para: ecommerce, productos digitales, landing, diseño, programacion, lanzamiento, mantenimiento`,
    keywords: `desarrollo web, ecommerce productos digitales`,
    siteUrl: `https://soytraspalacio.com`,
  },
}
