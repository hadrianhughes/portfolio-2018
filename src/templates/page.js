import React from 'react';
import PropTypes from 'prop-types';

import Row from '../components/Row';
import Column from '../components/Column';
import Heading from '../components/Heading';
import CircleImage from '../components/CircleImage';
import TextBlock from '../components/TextBlock';

const PageComponent = ({ data }) => {
  const { title, text, image, extraComponents } = data.contentfulPage;
  return (
    <div>
      <Row>
        <Column small={12}>
          <Heading text={title} />
        </Column>
      </Row>
      {
        image ?
          <Row>
            <Column xsmall={12} xsmallCentered>
              <CircleImage src={image.file.url} alt={title} />
            </Column>
          </Row>
          :
          null
      }
      {
        text.text ?
          <Row>
            <Column small={12} medium={10} large={8} xsmallCentered>
              <TextBlock text={text.text} />
            </Column>
          </Row>
          :
          null
      }
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
      image {
        file {
          url
        }
      }
      text {
        text
      }
      extraComponents
    }
  }
`;
