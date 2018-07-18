import React from 'react';
import PropTypes from 'prop-types';

import s from './TextBlock.module.scss';

const TextBlock = ({ text }) => (
  <div>
    {
      text.map((block, i) => <p key={i}>{ block.value }</p>)
    }
  </div>
);

TextBlock.propTypes = {
  text: PropTypes.array,
};

TextBlock.defaultProps = {
  text: [],
};

export default TextBlock;
