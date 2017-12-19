import React, { PureComponent } from 'react';
import styled from 'styled-components';

const LabelWrapper = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: ${props => (props.disabled ? 'not-allowed' : 'pointer')};;
  flex-direction: ${({ labelBefore }) => (labelBefore ? 'row-reverse' : 'row')};
  opacity: ${props => (props.disabled ? '.7' : 1)};
  filter: ${props => (props.disabled ? 'grayscale(35%) opacity(70%)' : 'none')};
`;

const SwitchOutterWrapper = styled.div`
  width: 42px;
  height: 20px;
  border-radius: 11px;
  border: 1px solid transparent;
  position: relative;
  transition: background-color .3s ease-out;
  margin: 0 6px 0 0;
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
  left: ${({ checked }) => (!checked ? 0 : 'calc(100% - 18px)')};
  /* right: ${({ checked }) => (!checked ? 'auto' : 0)}; */
`;


const styles = {
  outterWrapper: {
    display: 'inline-block',
  },
  input: {
    display: 'none',
  },
  label: {
    margin: '0 6px 0 0',
  },
};

class Switch extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
    };
    this.handleChange = this.handleChange.bind(this);
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

  render() {
    const { label, name, id, labelBefore, checked, disabled } = this.props;

    const checker = this.isControlled ? checked : this.state.checked;

    return (
      <div style={styles.outterWrapper} >
        <LabelWrapper
          labelBefore={labelBefore}
          htmlFor={name || 'myAwesomeCheckBox'}
          onClick={this.handleChange}
          disabled={disabled}
        >
          <SwitchOutterWrapper checked={checker} disabled={disabled}>
            <SwitchInnerWrapper checked={checker} disabled={disabled} />
          </SwitchOutterWrapper>
          <div style={styles.label}>
            {label}
          </div>
        </LabelWrapper>
        <input id={name || 'myAwesomeCheckBox'} style={styles.input} type="checkbox" />
      </div>
    );
  }
}

export default Switch;
