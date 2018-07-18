import React from 'react';
import Link from 'gatsby-link';

import Hero from '../components/Hero';

const IndexPage = ({ data }) => (
  <Hero
    subheading={data.allHomepageJson.edges[0].node.subheading}
    navigation={data.allNavigationJson.edges[0].node.items}
  />
);

export default IndexPage;

export const pageQuery = graphql`
query PageQuery {
  allHomepageJson {
    edges {
      node {
        subheading
      }
    }
  }
  allNavigationJson {
    edges {
      node {
        items {
          label
          url
          image
        }
      }
    }
  }
}
`;
