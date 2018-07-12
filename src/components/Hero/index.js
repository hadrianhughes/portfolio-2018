import React from 'react';
import PropTypes from 'prop-types';

import Row from '../Row';
import Column from '../Column';
import s from './Hero.module.scss';

const Hero = ({ subheading }) => (
  <Row>
    <Column small={12}>
      <div>
        <h1>Hi, I'm <span className={s.highlight}>&lt;</span>Hadrian <span className={s.highlight}>/&gt;</span></h1>
        <p>{ subheading }</p>
      </div>
    </Column>
  </Row>
);

Hero.propTypes = {
  subheading: PropTypes.string,
};

Hero.defaultProps = {
  subheading: '',
};

export default Hero;
