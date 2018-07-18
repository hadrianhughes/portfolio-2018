import React from 'react';
import PropTypes from 'prop-types';

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
