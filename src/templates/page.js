import React from 'react';
import PropTypes from 'prop-types';

import Container from '../components/Container';
import Row from '../components/Row';
import Column from '../components/Column';
import Heading from '../components/Heading';
import CircleImage from '../components/CircleImage';
import TextBlock from '../components/TextBlock';
import Navigation from '../components/Navigation';
import SkillsList from '../components/SkillsList';

const PageComponent = ({ data }) => (
  <div>
    <header>
      <Navigation items={data.allNavigationJson.edges[0].node.items} current={data.pagesJson.url} />
    </header>
    <main>
      {
        data.pagesJson.content.map((item, i) => (
          <Container key={i} index={i}>
            {
              (() => {
                switch (item.type) {
                  case 'heading':
                    return <Heading key={i} text={item.text} color={data.pagesJson.color} />;
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
                  case 'skillsGrid':
                    return <SkillsList list={item.skills} />;
                  default:
                    return null;
                }
              })()
            }
          </Container>
        ))
      }
    </main>
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
      url
      color
      content {
        type
        text
        src
        parts {
          type
          value
        }
        skills {
          name
          color
          icon
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
