module.exports = {
  siteMetadata: {
    title: `Imparables - Compromís`,
    description: `Amb tu, podrem continuar millorant la vida de les persones. Aquest 28 d'abril, serem #Imparables`,
    keywords: [`compromís`, `28 abril`, `eleccions autonòmiques`, `eleccions generals`, `mónica oltra`, `joan baldoví`, `mónica presidenta`],
    author: `@compromis`,
    image: 'https://imparables.compromis.net/images/thumbnail.jpg'
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
        name: `Imparables - Compromís`,
        short_name: `Imparables`,
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
        langKeyDefault: 'val',
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
