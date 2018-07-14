import React from 'react';
import PropTypes from 'prop-types';

import Row from '../Row';
import Column from '../Column';
import s from './Hero.module.scss';

const Hero = ({ subheading }) => (
  <div className={s.root}>
    <Row className={s.contentWrapper}>
      <Column small={12}>
        <div className={s.content}>
          <h1 className={s.heading}>Hi, I'm <span className={s.highlight}>&lt;</span>Hadrian <span className={s.highlight}>/&gt;</span></h1>
          <p className={s.subheading}>{ subheading }</p>
        </div>
      </Column>
    </Row>
  </div>
);

Hero.propTypes = {
  subheading: PropTypes.string,
};

Hero.defaultProps = {
  subheading: '',
};

export default Hero;
