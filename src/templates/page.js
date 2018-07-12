import React from 'react';
import PropTypes from 'prop-types';

const PageComponent = ({ data }) => {
  const { title } = data.contentfulPage;
  return <div>{title}</div>;
};

PageComponent.propTypes = {
  data: PropTypes.object,
};

PageComponent.defaultProps = {
  data: {},
};

export default PageComponent;

export const pageQuery = graphql`
  query pageQuery {
    contentfulPage {
      title
    }
  }
`;
