import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import {
  Checkbox as CheckBoxIcon,
  Checkboxoutline,
  Padlock,
} from '../Icons';
import Ripple from '../Motion/Ripples';

/* eslint-disable indent */
const LabeLUI = styled.label`
  cursor: pointer;
  ${({ label, labelBefore }) => (
    label // eslint-disable-line no-nested-ternary
      ? (labelBefore ? 'margin-right: 8px' : ' margin-left: 8px')
      : ''
  )};

`;

const InputUI = styled.input`
  position: absolute
  width: 100%;
  height: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0;
  cursor: pointer;
  box-sizing: border-box;
  margin: 0;
`;

const Wrapper = styled.div`
  ${({ checker, theme: { palette } }) => (checker
    ? `svg { fill: ${palette.accent.main} !important; }`
    : '')
};
  padding: 4px;
  display: flex ;
  align-items: center;

  border-radius: ${({ theme: { radius } }) => radius};

  transition: ${({ theme: { transition } }) => transition.defaultAll};

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
`;
/* eslint-enable indent */

// const posAbs = {
//   position: 'absolute',
//   width: '100%',
//   height: '100%',
//   top: 0,
//   right: 0,
//   bottom: 0,
//   left: 0,
// };

const styles = {
  wrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
  },
};

let counter = 0;

class Checkbox extends React.PureComponent {
  constructor(props) {
    super(props);

    let state = {
      hasFocus: false,
    };

    this.isControlled = this.props.checked !== undefined;
    if (!this.isControlled) {
      // not controlled, use internal state
      state = {
        ...state,
        checked: this.props.defaultChecked !== undefined ? this.props.defaultChecked : false,
      };
    }

    this.state = {
      ...state,
    };

    this.onFocus = this.onFocus.bind(this);
    this.onBlur = this.onBlur.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.isControlled = nextProps.checked !== undefined;
    if (!this.isControlled) {
      // not controlled, use internal state
      this.setState({
        checked: nextProps.defaultChecked !== undefined ? nextProps.defaultChecked : false,
      });
    }
  }

  onBlur() {
    this.setState({
      hasFocus: false,
    });
  }

  onFocus() {
    this.setState({
      hasFocus: true,
    });
  }

  getWrapperStyles() {
    // disabled
    const { disabled, labelBefore } = this.props;
    return {
      ...styles.wrapper,
      ...(disabled ? { opacity: 0.6 } : {}),
      ...(labelBefore ? { flexDirection: 'row-reverse' } : {}),
    };
  }

  handleChange(event) {
    const checked = event.target.checked;
    if (!this.isControlled) {
      this.setState({ checked: !this.state.checked });
    }

    const { onChange, name } = this.props;
    if (onChange) { onChange(event, checked, name); }
  }

  render() {
    const {
      name: nameProp,
      disabled,
      checked,
      defaultChecked,
      label,
      labelBefore,
      style,
      inputStyle,
      labelStyle,
      id: idProp,
      // ...restOfProps
    } = this.props;

    const id = idProp || nameProp || (counter + 1);
    const name = nameProp || idProp || (counter + 1);

    counter++; // eslint-disable-line no-plusplus

    const { hasFocus } = this.state;

    const checker = this.isControlled ? checked : this.state.checked;

    // eslint-disable-next-line no-nested-ternary
    const iconIdentifier = disabled
      ? (checker ? <Padlock /> : <Padlock />)
      : (checker ? <CheckBoxIcon size={22} color="#26a29a" /> : <Checkboxoutline size={22} />);

    /* eslint-disable jsx-a11y/label-has-for */
    const checkboxWrapperStyle = Object.assign({}, {
      display: 'inline-block',
    }, style || {});

    return (
      <div style={checkboxWrapperStyle}>
        <Ripple>
          <Wrapper checker={checker} style={this.getWrapperStyles()} hasFocus={hasFocus} >
            {iconIdentifier}
            <InputUI
              onFocus={this.onFocus}
              onBlur={this.onBlur}
              hasFocus
              id={id}
              style={inputStyle}
              checked={checker}
              defaultChecked={defaultChecked}
              name={name}
              type="checkbox"
              disabled={disabled}
              onChange={this.handleChange.bind(this)} // eslint-disable-line react/jsx-no-bind
            />
            <LabeLUI htmlFor={id} labelStyle={labelStyle} label={label} labelBefore={labelBefore} >
              {label}
            </LabeLUI>
          </Wrapper>
        </Ripple>

      </div >
    );
  }
}

Checkbox.propTypes = {
  onChange: PropTypes.func,
  // icon: PropTypes.string,
  // checkedIcon: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string, // .isRequired,
  defaultChecked: PropTypes.bool,
  inputStyle: PropTypes.object,
  labelStyle: PropTypes.object,
};

Checkbox.defaultProps = {
  name: 'myawesomecheckbox',
  onChange: () => { },
  // icon: 'Checkboxoutline',
  // checkedIcon: 'Checkbox',
  inputStyle: {},
  labelStyle: {},
  checked: undefined,
  defaultChecked: false,
  disabled: false,
};

export default Checkbox;
