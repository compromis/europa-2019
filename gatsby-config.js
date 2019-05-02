module.exports = {
  siteMetadata: {
    title: `Compromiso por Europa`,
    description: ``,
    keywords: [`compromís per europa`, `compromiso por europa`, `elecciones europeas`, `jordi sebastia`, `compromís`, `en marea`, `chunta arognesista`, `més per mallorca`],
    author: `@compromisoEU`,
    image: 'https://compromisoporeuropa.eu/images/thumbnail.jpg'
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Compromiso por Europa`,
        short_name: `Compromiso EU`,
        start_url: `/`,
        background_color: `#D25C27`,
        theme_color: `#D25C27`,
        display: `minimal-ui`,
        icon: `src/images/favicons/favicon-192x192.png`,
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: 'gatsby-plugin-i18n',
      options: {
        langKeyDefault: 'cas',
        useLangKeyLayout: true,
        prefixDefault: false,
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-24972665-26",
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`400`, `900`]
          },
        ],
      },
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
}
