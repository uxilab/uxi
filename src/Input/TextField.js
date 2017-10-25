import React from 'react';
import PropTypes from 'prop-types';

const styles = {
  borderRadius: '3px',
  fontSize: '16px',
  border: 'none',
  background: '#ececec',
  padding: '8px 16px',
};

const TextField = ({ onChange, style, type, placeholder }) => (
  <input
    type={type}
    style={{ ...styles, ...style }}
    placeholder={placeholder}
    onChange={onChange}
  />
);

TextField.propTypes = {
  type: PropTypes.oneOf([
    'text', 'email', 'password', 'search',
  ]),
};

TextField.defaultProps = {
  type: 'text',
};

export default TextField;
