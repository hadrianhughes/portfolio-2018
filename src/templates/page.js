import React from 'react';
import PropTypes from 'prop-types';

import Row from '../components/Row';
import Column from '../components/Column';
import Heading from '../components/Heading';
import TextBlock from '../components/TextBlock';

const PageComponent = ({ data }) => {
  const { title, text } = data.contentfulPage;
  return (
    <div>
      <Row>
        <Column small={12}>
          <Heading text={title} />
        </Column>
      </Row>
      <Row>
        <Column small={12} medium={10} large={8} smallCentered>
        {
          text.text ?
            <TextBlock text={text.text} />
            :
            null
        }
        </Column>
      </Row>
    </div>
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
