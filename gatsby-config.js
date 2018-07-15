require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    navigation: [{
      label: 'Example 1',
      url: '/404',
    }, {
      label: 'Example 2',
      url: '/404',
    }, {
      label: 'Example 3',
      url: '/404',
    }, {
      label: 'Example 4',
      url: '/404',
    }],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
      },
    },
    'gatsby-plugin-sass',
  ],
};
