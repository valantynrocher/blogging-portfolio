const siteUrl = `https://www.innovance-solutions.com`
module.exports = {
  siteMetadata: {
    title: `Logiciels spécialisés pour associations`,
    siteUrl: siteUrl,
    description: `Innovance simplifie la vie des associations employeurs, multi-actions et multi-financeurs pour justifier leurs financements et pour professionnaliser leur organisation.`,
    social: {
      twitter: `https://twitter.com/innovance_s`,
      facebook: "https://www.facebook.com/innovancesolutions",
      linkedin: "https://www.linkedin.com/company/innovance-solutions",
    },
  },
  flags: {
    DEV_SSR: true,
  },
  plugins: [
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-material-ui`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-smoothscroll`,
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-source-strapi",
      options: {
        apiURL: process.env.API_URL || "http://localhost:1337",
        collectionTypes: ["article", "category", "writer"],
        singleTypes: [`homepage`, `global`],
        queryLimit: 1000,
      },
    },
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -120,
      },
    },
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/layout/index.tsx`),
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `static/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: "UA-23104291-2",
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-gdpr-cookies`,
    //   options: {
    //     googleAnalytics: {
    //       trackingId: "UA-23104291-2", // leave empty if you want to disable the tracker
    //       cookieName: "gatsby-gdpr-google-analytics", // default
    //       anonymize: true, // default
    //       allowAdFeatures: false, // default
    //     },
    //     googleTagManager: {
    //       trackingId: "GTM-PG43F6N", // leave empty if you want to disable the tracker
    //       cookieName: "gatsby-gdpr-google-tagmanager", // default
    //       dataLayerName: "dataLayer", // default
    //     },
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-canonical-urls`,
    //   options: {
    //     siteUrl: siteUrl,
    //   },
    // },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
