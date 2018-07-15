import React from 'react';
import Link from 'gatsby-link';

import Hero from '../components/Hero';

const IndexPage = ({ data }) => (
  <Hero
    subheading={data.allContentfulHomepage.edges[0].node.subheading}
    navigation={data.site.siteMetadata.navigation}
  />
);

export default IndexPage;

export const pageQuery = graphql`
query PageQuery {
  allContentfulHomepage {
    edges {
      node {
        title
        subheading
      }
    }
  }
  site {
    siteMetadata {
      navigation {
        label
        url
      }
    }
  }
}
`;
