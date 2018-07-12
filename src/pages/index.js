import React from 'react';
import Link from 'gatsby-link';

import Hero from '../components/Hero';

const IndexPage = ({ data }) => {
  const { subheading } = data.allContentfulHomepage.edges[0].node;
  return <Hero subheading={subheading} />;
};

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
}
`;
