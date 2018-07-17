import React from 'react';
import PropTypes from 'prop-types';

import Row from '../components/Row';
import Column from '../components/Column';
import Heading from '../components/Heading';

const PageComponent = ({ data }) => {
  const { title, text } = data.contentfulPage;
  return (
    <Row>
      <Column small={12}>
        <Heading text={title} />
      </Column>
    </Row>
  );
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
      text {
        text
      }
    }
  }
`;
