/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Gatsby Tutorial',
    description: 'Random Randomness',
    author: '@AfroCrypto',
    data: ['item 1', 'item 2'],
    person: {name: 'Afro', age: '49'},

  },

  /* Your site config here */
  plugins: [
    `gatsby-plugin-styled-components`, 
    `gatsby-plugin-sharp`, 
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: `rlja1ezdjlb6`,
        // Learn about environment variables: https://gatsby.dev/env-vars
        accessToken: 'B5P3_6ZDtQ96w8FgaNUM2vfaa8PzY2HIYSueiqRLFEg',
      },
    },
  ],
}
