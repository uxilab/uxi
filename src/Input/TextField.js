import React, { Component } from 'react';
import PropTypes from 'prop-types';
// import { palette } from '../Theme/palette';
import styled from 'styled-components';
import {
// Done as SuccessIcon,
// Issue as ErrorIcon,
} from '../Icons';
// import default theme in case not themeprovider is used
import { theme as defaultTheme } from '../Theme';
import StatusIcon from './utils/StatusIcon';
import ErrorWrapperUI from './utils/ErrorWrapperUI';

// const { semantic } = palette;

const InputWrapperUI = styled.div.attrs({
  theme: ({ theme }) => (theme || defaultTheme),
})`
  position: relative;
  ${({ isFullWidth }) => (isFullWidth ? 'width: 100%' : '')};
`;

const InputUI = styled.input.attrs({
  theme: ({ theme }) => (theme || defaultTheme),
})`
  border-radius: 3px;
  border-radius: ${({ theme: { radius } }) => radius};
  /* min-height: 32px; */
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
    /* box-shadow: 0 0 10px #719ECE;*/ /* where's that color from ? */
    box-shadow: ${({ theme: { outlineShadow } }) => outlineShadow};
    outline: ${({ theme: { outlineShadow } }) => outlineShadow};
  }
`;

// const ErrorWrapperUI = styled.span.attrs({
//   theme: ({ theme }) => (theme || defaultTheme),
// })`
//   padding: 0 6px;
//   font-size: 12px;
//   color: ${({ theme: { palette: { semantic } } }) => semantic.error};
// `;

// const StatusIcon = styled.span.attrs({
//   theme: ({ theme }) => (theme || defaultTheme),
// })`
//   position: absolute;
//   right: 8px;
//   top: 9px;
//   color: ${({ error, success, theme: { palette: { semantic } } }) => (error
//     ? semantic.error
//     : (success ? semantic.success : semantic.default)
//   )};
//   & > svg,
//   & > svg * {
//     fill: currentColor !important;
//     color: currentColor !important;
//   }
// `;

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
      tabIndex = 0,
      isFullWidth,
      ...attributes
    } = this.props;

    // const stateIcon = error // eslint-disable-line no-nested-ternary
    //   ? <ErrorIcon size="16" />
    //   : (success ? <SuccessIcon size="16" /> : null
    //   );

    const inputAttributes = {
      ...attributes,
      ...(tabIndex !== undefined ? { tabIndex } : {}),
      value: this.isControlled ? this.props.value : this.state.value,
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
