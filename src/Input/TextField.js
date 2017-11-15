import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

const styles = {
  borderRadius: '3px',
  fontSize: '14px',
  border: '1px solid #ececec',
  padding: '8px 16px',
  minWidth: '100%',
  boxSizing: 'border-box',
  ':focus': {
    outline: 'none',
    border: '1px solid rgb(37, 188, 188)',
    boxShadow: '0 0 10px #719ECE',
  },
};

const TextField = (props) => {
  const { onChange, style, type, placeholder } = props;
  return (
    <input
      {...props}
      type={type}
      style={{ ...styles, ...style }}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};


TextField.propTypes = {
  type: PropTypes.oneOf([
    'text', 'email', 'password', 'search',
  ]),
};

TextField.defaultProps = {
  type: 'text',
};

export default Radium(TextField);
