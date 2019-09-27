import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { theme as defaultTheme } from '../Theme';
import StatusIcon from './utils/StatusIcon';
import ErrorWrapperUI from './utils/ErrorWrapperUI';


const InputWrapperUI = styled.div.attrs(({ theme }) => ({
  theme: theme || defaultTheme,
}))`
  position: relative;
  ${({ isFullWidth }) => (isFullWidth ? 'width: 100%' : '')};
`;

const InputUI = styled.input.attrs(({ theme }) => ({
  theme: (theme || defaultTheme),
}))`
  border-radius: 3px;
  border-radius: ${({ theme: { radius } }) => radius};
  box-sizing: border-box;
  font-size: 14px;
  border: 1px solid ${({ theme: { palette: { semantic } } }) => semantic.default};
  padding: 6.5px 26px 6.5px 6.5px;
  padding: ${({ theme: { radius } }) => `6.5px 26px 6.5px ${6.5 + (parseInt(radius.replace('px', ''), 10) * 0.6)}px`};
  min-width: 100%;
  border: 1px solid ${({ error, success, theme: { palette: { semantic } } }) => (
    error // eslint-disable-line no-nested-ternary
      ? semantic.error
      : (success ? semantic.success : semantic.default))
};
  transition: ${({ theme: { transition } }) => transition.defaultAll};
  &:focus {
    outline: none;
    border: 1px solid ${({ theme }) => theme.palette.accent.main};
    box-shadow: ${({ theme: { outlineShadow } }) => outlineShadow};
    outline: ${({ theme: { outlineShadow } }) => outlineShadow};
  }
`;

// eslint-disable-next-line react/prefer-stateless-function
class TextField extends Component {
  // TODO handle generating uid that doesn't force rerebder
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.isControlled = this.props.value !== undefined;
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
      tabIndex = 0,
      isFullWidth,
      ...attributes
    } = this.props;

    const inputAttributes = {
      ...attributes,
      ...(tabIndex !== undefined ? { tabIndex } : {}),
      ...(!this.isControlled ? { value: this.state.value } : {}),
    };

    return (
      <InputWrapperUI isFullWidth={isFullWidth}>
        <InputUI
          {...inputAttributes}

          type={type}
          style={style}
          placeholder={placeholder}
          onChange={this.handleChange}
          error={error}
          success={success}
        />

        <StatusIcon error={error} success={success} />

        <ErrorWrapperUI>
          {error}
        </ErrorWrapperUI>
      </InputWrapperUI>
    );
  }
}


TextField.propTypes = {
  type: PropTypes.oneOf([
    'text', 'email', 'password', 'search', 'file', 'number',
  ]),
  /**
   * onChange: callback function
   * will be passed a first arg 'event' (ReactEvent)
   * as well as a énd arg 'value' (String)
   */
  onChange: PropTypes.func,
};

TextField.defaultProps = {
  type: 'text',

  onChange: (event, value) => {}, // eslint-disable-line no-unused-vars
};

TextField.displayName = 'TextField';

export default TextField;
