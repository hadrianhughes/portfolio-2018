import React from 'react';
import PropTypes from 'prop-types';
import GatsbyLink from 'gatsby-link';

const Link = ({ children, to, className, style }) => (
  /^\/[^/]{1}.+$/.test(to) || to === '/' ?
    <GatsbyLink to={to} className={className} style={style}>
      { children }
    </GatsbyLink>
    :
    <a href={to} className={className} style={style}>{ children }</a>
);

Link.propTypes = {
  to: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object,
};

Link.defaultProps = {
  to: '',
  className: '',
  style: {},
};

export default Link;
