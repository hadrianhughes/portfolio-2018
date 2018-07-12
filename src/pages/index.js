import React from 'react';
import Link from 'gatsby-link';

const IndexPage = ({ data }) => {
  const { subheading } = data.allContentfulHomepage.edges[0].node;
  return (
    <div>
      <h1>Hi, I'm &lt;Hadrian /&gt;</h1>
      <p>{ subheading }</p>
    </div>
  );
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
