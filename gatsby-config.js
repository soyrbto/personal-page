/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: `gatsby-source-ghost`,
      options: {
        apiUrl: `https://soyrbto.digitalpress.blog`,
        contentApiKey: `e7831d8c63ff9b3cf73e59012d`,
        version: `v5.20.0`,
      },
    },
    {
      resolve: "gatsby-plugin-sass",
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
            name: `Josefin Sans, Josefin Slab, Poppins`,
            file: `https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;0,500;0,600;1,500&family=Josefin+Slab:wght@400;600&family=Poppins:wght@700&display=swap`,
          },
        ],
      },
    },
  ],
}
