require('dotenv').config();

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
    navigation: [{
      label: 'About me',
      url: '/404',
      image: 'about.svg',
    }, {
      label: 'My Skills',
      url: '/404',
      image: 'skills.svg',
    }, {
      label: 'Canvas Demo',
      url: '/404',
      image: 'canvas.svg',
    }, {
      label: 'My projects',
      url: '/404',
      image: 'github.svg',
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
