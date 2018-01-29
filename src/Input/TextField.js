import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';
import {
  Done as SuccessIcon,
  Issue as ErrorIcon,
} from '../Icons';
import { palette } from '../Theme/palette';

const { semantic } = palette;

const styles = {
  wrapper: {
    // display: block,
    position: 'relative',
  },
  input: {
    borderRadius: '3px',
    fontSize: '14px',
    border: '1px solid #dcdcdc',
    padding: '6.5px 26px 6.5px 6.5px',
    minWidth: '100%',
    boxSizing: 'border-box',
    ':focus': {
      outline: 'none',
      border: '1px solid rgb(37, 188, 188)',
      boxShadow: '0 0 10px #719ECE',
    },
  },
  errorWrapper: {
    // display: block,
    padding: '0 6px',
    fontSize: '12px',
  },
  stateIconWrapper: {
    // display: block,
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

// eslint-disable-next-line react/prefer-stateless-function
class TextField extends Component {
  // TODO handle generating uid that doesn't force rerebder
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillMount() {
    this.isControlled = this.props.value !== undefined;
    if (!this.isControlled) {
      // not controlled, use internal state
      this.setState({
        value: this.props.defaultValue !== undefined ? this.props.defaultValue : '',
      });
    }
  }

  handleChange(event) {
    const { value } = event.target;
    if (!this.isControlled) {
      this.setState({ value });
    }

    const { onChange } = this.props;
    if (onChange) { onChange(event, value); }
  }

  render() {
    const {
      onChange,
      style,
      type,
      placeholder,
      success,
      error,
      defaultValue,
      ...attributes
    } = this.props;

    const stateIcon = error // eslint-disable-line no-nested-ternary
      ? <ErrorIcon size="16" color={palette.semantic.error} />
      : (success ? <SuccessIcon size="16" color={palette.semantic.success} /> : null);

    const inputStyles = { ...styles.input, ...getInputDynamicStyle(this.props), ...style };
    const inputAttributes = {
      ...attributes,
      value: this.isControlled ? this.props.value : this.state.value,
    };
    return (
      <span style={styles.wrapper}>
        <input
          {...inputAttributes}
          type={type}
          style={inputStyles}
          placeholder={placeholder}
          onChange={this.handleChange}
        />

        {/* Error Message/node */}
        <span style={styles.errorWrapper}>
          {error}
        </span>


        {/* state icon (succes/error/none) */}
        <span style={styles.stateIconWrapper}>
          {stateIcon}
        </span>
      </span>
    );
  }
}


TextField.propTypes = {
  type: PropTypes.oneOf([
    'text', 'email', 'password', 'search', 'file', 'number',
  ]),
};

TextField.defaultProps = {
  type: 'text',
};

TextField.displayName = 'TextField';

export default Radium(TextField);
