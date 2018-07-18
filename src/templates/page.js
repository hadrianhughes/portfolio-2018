import React from 'react';
import PropTypes from 'prop-types';

import Row from '../components/Row';
import Column from '../components/Column';
import Heading from '../components/Heading';
import CircleImage from '../components/CircleImage';
import TextBlock from '../components/TextBlock';

const PageComponent = ({ data }) => (
  <div>
    {
      data.pagesJson.content.map((item, i) => {
        switch (item.type) {
          case 'heading':
            return <Heading key={i} text={item.text} />;
          case 'profileImage':
            return <CircleImage key={i} src={item.src} alt="temp" />;
          case 'textBlock':
            return (
              <Row key={i}>
                <Column xsmall={12} medium={10} large={8} xsmallCentered>
                  <TextBlock text={item.parts} />
                </Column>
              </Row>
            );
          default:
            return null;
        }
      })
    }
  </div>
);

PageComponent.propTypes = {
  data: PropTypes.object,
};

PageComponent.defaultProps = {
  data: {},
};

export default PageComponent;

export const pageQuery = graphql`
  query pageQuery($id: String!) {
    pagesJson(id: { eq: $id }) {
      content {
        type
        text
        src
        parts {
          type
          value
        }
      }
    }
  }
`;
