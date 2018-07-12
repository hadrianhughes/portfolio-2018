import React from 'react';
import Link from 'gatsby-link';

const IndexPage = ({ data }) => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
  </div>
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
}
`;
