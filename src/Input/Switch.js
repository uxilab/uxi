import React, { PureComponent } from 'react';
import styled from 'styled-components';

const InputUI = styled.input`
  opacity: 0;
  position: relative;
  bottom: 0;
  right: 0;
  width: 0;
  height: 0;
`;

const LabelWrapper = styled.label`
position: relative;
  display: flex;
  align-items: center;
  user-select: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};;
  flex-direction: ${({ labelBefore }) => (labelBefore ? 'row-reverse' : 'row')};
  opacity: ${props => (props.disabled ? '.7' : 1)};
  filter: ${props => (props.disabled ? 'grayscale(35%) opacity(70%)' : 'none')};

  ${({ hasFocus }) => (hasFocus ? (`
    outline: 2px solid #7AACFE !important; /* for non-webkit browsers */
    outline: 5px auto -webkit-focus-ring-color !important;
  `) : '')};

`;

const SwitchOutterWrapper = styled.div`
  width: 42px;
  height: 20px;
  border-radius: 11px;
  border: 1px solid transparent;
  position: relative;
  transition: background-color .3s ease-out;
  margin:${({ label, labelBefore }) => (
    label ? (labelBefore ? '0 0 0 6px' : '0 6px 0 0') : 0
  )};
  background-color: ${({ checked }) => (!checked ? '#9a9a9a' : '#26a29a')};
  background-color: ${({ theme, checked }) => (!checked ? theme.palette.grey : theme.palette.accent.main)};
  &:before, &:after {
    display: flex;
    align-items: center;
    color: white;
    opacity: .4;
    position: absolute;
    top: 0;
    bottom: 0;
    font-family: sans-serif;
  }
  &:before {
    content: 'I';
    left: 7.5px;
  };
  &:after {
    content: '0';
    right: 6px;
  }
`;

const SwitchInnerWrapper = styled.div`
  /* z-index: 1; */
  width: 16px;
  height: 16px;
  border-radius: 9px;
  border: 1px solid transparent;
  position: absolute;
  margin: 1px;
  transition: left .3s ease-out;
  background: white;
  left: ${({ checked }) => (!checked ? 0 : 'calc(100% - 20px)')};
  /* right: ${({ checked }) => (!checked ? 'auto' : 0)}; */
`;

const LabelTextWrapper = styled.div`
  margin:${({ label, labelBefore }) => (
    label ? (labelBefore ? '0 6px 0 0' : '0 0 0 6px') : 0
  )};
`;

const styles = {
  outterWrapper: {
    display: 'inline-block',
  },
};

let counter = 0;

class Switch extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      hasfocus: false,
      checked: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
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

  handleChange(event) {
    if (this.props.disabled) { return; }
    const { checked } = this.state;
    const { onChange } = this.props;
    const newState = (!checked);
    if (!this.isControlled) {
      this.setState({
        checked: newState,
      });
    }
    if (onChange) { onChange({ checked: newState }, event); }
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

  render() {
    const {
      label,
      name,
      id,
      labelBefore,
      checked,
      disabled,
      inputStyle,
    } = this.props;

    const { hasFocus } = this.state;

    const checker = this.isControlled ? checked : this.state.checked;

    return (
      <div style={styles.outterWrapper} >
        <LabelWrapper
          hasFocus={hasFocus}
          labelBefore={labelBefore}
          htmlFor={name || 'myAwesomeCheckBox'}
          disabled={disabled}
        >
          <SwitchOutterWrapper checked={checker} disabled={disabled}>
            <SwitchInnerWrapper checked={checker} disabled={disabled} />
          </SwitchOutterWrapper>
          <LabelTextWrapper label={label} labelBefore={labelBefore}>
            {label}
          </LabelTextWrapper>
          <InputUI
            onBlur={this.onBlur}
            onFocus={this.onFocus}
            id={id || name}
            name={name || id || counter++}
            style={inputStyle}
            type="checkbox"
            onChange={this.handleChange}
          />
        </LabelWrapper>
      </div>
    );
  }
}

Switch.defaultProps = {
  inputStyle: {},
};

export default Switch;
