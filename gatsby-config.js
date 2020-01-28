module.exports = {
  siteMetadata: {
    title: `My Starter`,
    description: `My Starter theme`,
    author: `Matthew Truscott`,
  },
  plugins: [
    // ===========  Global ===========

    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        // Setting a color is optional.
        color: `#fff36e`,
        // Disable the loading spinner.
        showSpinner: false,
      },
    },
    `gatsby-plugin-layout`,

    // ===========  Styles and fonts ===========

    `gatsby-plugin-preload-fonts`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        postCssPlugins: [
          require("tailwindcss"),
          require("./tailwind.config.js"),
        ],
      },
    },
    `gatsby-plugin-transitions`,
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        develop: false,
        tailwind: true,
      },
    },

    // ===========  SEO ===========

    `gatsby-plugin-react-helmet`,

    // ===========  Images and Assets ===========

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
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /assets/, // See below to configure properly
        },
      },
    },

    // ===========  Sourcing Data ===========

    // {
    //   resolve: `gatsby-source-wordpress`,
    //   options: {
    //     // your WordPress source
    //     baseUrl: `friday-cms.local/`,
    //     protocol: `http`,
    //     // is it hosted on wordpress.com, or self-hosted?
    //     hostingWPCOM: false,
    //     // does your site use the Advanced Custom Fields Plugin?
    //     useACF: true,
    //   },
    // },
  ],
}
