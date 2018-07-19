const path = require('path');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    graphql(
      `
      {
        allPagesJson(limit: 1000) {
          edges {
            node {
              id
              url
            }
          }
        }
      }
      `
    ).then(result => {
      if (result.errors) {
        reject(new Error(result.errors))
      }

      const pageTemplate = path.resolve('src/templates/page.js');

      result.data.allPagesJson.edges.forEach(edge => {
        createPage({
          path: edge.node.url,
          component: pageTemplate,
          context: {
            id: edge.node.id,
          },
        });
      });

      resolve();
    });
  });
};
