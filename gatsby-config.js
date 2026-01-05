const siteConfig = require('./site-config');

module.exports = {
  siteMetadata: {
    ...siteConfig,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-offline',
    `gatsby-plugin-sitemap`,
    {
      resolve: 'gatsby-plugin-netlify-cache',
      options: {
        cachePublic: true,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: 'z6fpa0om40da',
        accessToken: 'Rxdwawp2os79PjOdi_tWqj9gNvrHUJV4SDBLDa5kmfw',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-140687726-1',
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Узи Centrum Мелитополь',
        short_name: 'УЗИ',
        lang: 'ru-RU',
        display: 'browser', // или standalone, но для теста browser проще
        icon: `src/images/icon.jpg`,
        theme_color: '#16405C',
        background_color: '#525252',
      },
    },

    `gatsby-transformer-json`,
    `gatsby-transformer-remark`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/content`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-webpack-size`,
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /images\/.*\.svg$/,
        },
      },
    },
  ],
};
