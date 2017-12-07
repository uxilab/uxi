import React from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import {
  Done as SuccessIcon,
  Issue as ErrorIcon,
} from '../Icons';
import { palette } from '../Theme/palette';

const { semantic } = palette;

const styles = {
  wrapper: {
    position: 'relative',
  },
  input: {
    borderRadius: '3px',
    fontSize: '14px',
    border: '1px solid #dcdcdc',
    padding: '8px 28px 8px 8px',
    minWidth: '100%',
    boxSizing: 'border-box',
    ':focus': {
      outline: 'none',
      border: '1px solid rgb(37, 188, 188)',
      boxShadow: '0 0 10px #719ECE',
    },
  },
  errorWrapper: {
    padding: '0 6px',
    fontSize: '12px',
  },
  stateIconWrapper: {
    position: 'absolute',
    right: '8px',
    top: '9px',
  },
};

/* eslint-disable no-nested-ternary */
const getInputDynamicStyle = ({ error, success }) => ({
  border: (error
    ? `1px solid ${semantic.error}`
    : (success ? `1px solid ${semantic.success}` : '1px solid #dcdcdc')
  ),
  ':focus': {
    outline: 'none',
    border: '1px solid rgb(37, 188, 188)',
    boxShadow: '0 0 10px #719ECE',
  },
});


const TextField = (props) => {
  const { onChange, style, type, placeholder, success, error, ...attributes } = props;

  const stateIcon = error // eslint-disable-line no-nested-ternary
    ? <ErrorIcon size="16" color={palette.semantic.error} />
    : (success ? <SuccessIcon size="16" color={palette.semantic.success} /> : null);

  const inputStyles = { ...styles.input, ...getInputDynamicStyle(props), ...style };

  return (
    <div style={styles.wrapper}>
      <input
        {...attributes}
        type={type}
        style={inputStyles}
        placeholder={placeholder}
        onChange={onChange}
      />

      {/* Error Message/node */}
      <div style={styles.errorWrapper}>
        {error}
      </div>


      {/* state icon (succes/error/none) */}
      <div style={styles.stateIconWrapper}>
        {stateIcon}
      </div>
    </div>
  );
};


TextField.propTypes = {
  type: PropTypes.oneOf([
    'text', 'email', 'password', 'search', 'file',
  ]),
};

TextField.defaultProps = {
  type: 'text',
};

TextField.displayName = 'TextField';

export default Radium(TextField);
