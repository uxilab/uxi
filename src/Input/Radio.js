import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// eslint-disable-next-line import/no-named-as-default
import getAppropriateIcon from '../Icons/getAppropriateIcon';

const RadioInpuUI = styled.input.attrs({
  type: 'radio',
})`
  cursor: pointer;
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  box-sizing: border-box;
  margin: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
`;

/* eslint-disable indent */
const RadioLabelUI = styled.label`
  display: flex;
  align-items: center;
  & > *:nth-child(2) {
    ${({ label }) => (label
      ? 'margin-right: 6px;'
      : '')
    };
  }

  cursor: pointer;
  /* cannot use focus-within because IE */
  padding: 2px;
  padding-left: 1px;
  border-radius: 2px;

  border-radius: ${({ theme: { radius } }) => radius};

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    /* waiting for Edge to support focus-within */
    ${({ hasFocus, theme }) => (hasFocus ? (`
      bowShadow: ${theme.outlineShadow}; outline: ${theme.outline}
    `) : '')};
  }

  &:focus-within {
    ${({ disabled, inert, theme }) => (!inert || !disabled
      ? `box-shadow: ${theme.outlineShadow}; outline: ${theme.outline}`
      : '')
    };
  }

  ${({ checker, theme: { palette } }) => (checker
    ? `svg { fill: ${palette.accent.main} !important; }`
    : '')
  };

`;
/* eslint-enable indent */

const styles = {
  wrapper: {
    position: 'relative',
    display: 'inline-block',
    marginRight: '6px',
  },
};
// eslint-disable-next-line react/prefer-stateless-function
class Radio extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      hasFocus: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  componentWillMount() {
    this.isControlled = this.props.checked !== undefined;
    if (!this.isControlled) {
      // not controlled, use internal state
      this.setState({
        checked: this.props.defaultChecked !== undefined ? this.props.defaultChecked : false,
      });
    }
  }

  /* since we still can't use :focus-within selector because of GD IE,
   * let's add more javascript handler...
   */
  onFocus() {
    this.setState({ hasFocus: true });
  }

  onBlur() {
    this.setState({ hasFocus: false });
  }

  getWrapperStyles() {
    // disabled
    const { disabled, wrapperStyle } = this.props;
    return {
      ...styles.wrapper,
      ...(disabled ? { opacity: 0.6 } : {}),
      ...wrapperStyle,
    };
  }

  handleChange(event) {
    const { checked } = event.target;
    if (!this.isControlled) {
      this.setState({ checked });
    }

    const { onChange } = this.props;
    if (onChange) { onChange(event, checked); }
  }

  render() {
    const {
      name,
      id,
      disabled,
      value,
      label,
      // ...restOfProps
    } = this.props;

    const { hasFocus } = this.state;

    const isChecked = this.isControlled ? this.props.checked : this.state.checked;
    const checker = this.isControlled
      ? { checked: this.props.checked }
      : { defaultChecked: this.state.checked };

    const iconIdentifier = isChecked ? 'radioInput' : 'RadioInputOutline';
    const Icon = getAppropriateIcon(iconIdentifier);

    /* eslint-disable jsx-a11y/label-has-for */
    return (
      <div style={this.getWrapperStyles()}>
        <RadioLabelUI htmlFor={name} style={{}} label={label} hasFocus={hasFocus} checker={isChecked}>
          <RadioInpuUI
            tabIndex="0"
            id={id}
            style={{}}
            {...checker}
            name={name}
            value={value}
            disabled={disabled}
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            onChange={(...a) => {
              this.handleChange(...a);
            }}
          />
          <Icon />
          {label}
        </RadioLabelUI>
      </div>
    );
  }
}

Radio.propTypes = {
  onChange: PropTypes.func,
  // icon: PropTypes.string,
  // checkedIcon: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string, // .isRequired,
  defaultChecked: PropTypes.bool,
  wrapperStyle: PropTypes.object,
};

Radio.defaultProps = {
  name: 'myawesomecheckbox',
  onChange: () => { },
  icon: 'Checkboxoutline',
  checkedIcon: 'Checkbox',
  checked: false,
  disabled: false,
  defaultChecked: false,
  wrapperStyle: {},
};

export default Radio;
