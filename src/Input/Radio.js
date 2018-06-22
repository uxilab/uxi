import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../Button/IconButton';

const posAbs = {
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
};

const styles = {
  wrapper: {
    position: 'relative',
    display: 'inline-block',
  },
  label: {
    cursor: 'pointer',
  },
  input: {
    opacity: 0,
    ...posAbs,
    cursor: 'inherit',
    boxSizing: 'border-box',
    margin: 0,
  },
};
// eslint-disable-next-line react/prefer-stateless-function
class Radio extends React.PureComponent {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }
  // state = {
  //   checked: this.props.checked,
  // }
  componentWillMount() {
    this.isControlled = this.props.checked !== undefined;
    if (!this.isControlled) {
      // not controlled, use internal state
      this.setState({
        checked: this.props.defaultChecked !== undefined ? this.props.defaultChecked : false,
      });
    }
  }

  getWrapperStyles() {
    // disabled
    const { disabled } = this.props;
    return {
      ...styles.wrapper,
      ...(disabled ? { opacity: 0.6 } : {}),
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

    const isChecked = this.isControlled ? this.props.checked : this.state.checked;
    const checker = this.isControlled
      ? { checked: this.props.checked }
      : { defaultChecked: this.state.checked };

    const iconIdentifier = isChecked ? 'radioInput' : 'RadioInputOutline';

    /* eslint-disable jsx-a11y/label-has-for */
    return (
      <div style={this.getWrapperStyles()}>
        <IconButton icon={iconIdentifier} size="20" style={{ padding: '4px' }}>
          <input
            id={id}
            style={styles.input}
            // checked={checker}
            {...checker}
            name={name}
            value={value}
            type="radio"
            disabled={disabled}
            onChange={this.handleChange} // eslint-disable-line react/jsx-no-bind
          />
        </IconButton>
        <label htmlFor={name} style={styles.label} >{label}</label>
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
};

Radio.defaultProps = {
  name: 'myawesomecheckbox',
  onChange: () => { },
  icon: 'Checkboxoutline',
  checkedIcon: 'Checkbox',
  checked: false,
  disabled: false,
  defaultChecked: false,
};

export default Radio;
