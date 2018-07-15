import React from 'react';
import PropTypes from 'prop-types';

import Row from '../Row';
import Column from '../Column';
import s from './Hero.module.scss';
import InpageNavigation from '../InpageNavigation';

const Hero = ({ subheading, navigation }) => (
  <div className={s.root}>
    <div className={s.contentWrapper}>
      <Row>
        <Column small={12} xlarge={9} smallCentered>
          <div className={s.content}>
            <h1 className={s.heading}>Hi, I'm <span className={s.highlight}>&lt;</span>Hadrian <span className={s.highlight}>/&gt;</span></h1>
            <p className={s.subheading}>{ subheading }</p>
          </div>
        </Column>
      </Row>
    </div>
    <Row className={s.navWrapper}>
      <Column small={12}>
        <InpageNavigation items={navigation} />
      </Column>
    </Row>
  </div>
);

Hero.propTypes = {
  subheading: PropTypes.string,
  navigation: PropTypes.array,
};

Hero.defaultProps = {
  subheading: '',
  navigation: [],
};

export default Hero;
