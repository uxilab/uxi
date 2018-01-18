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
    display: 'flex',
    alignItems: 'center',
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
class Checkbox extends React.PureComponent {
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

    const { onChange } = this.props;
    if (onChange) { onChange(event, checked); }
  }

  render() {
    const {
      name,
      disabled,
      checked,
      defaultChecked,
      label,
      style,
      // ...restOfProps
    } = this.props;

    const checker = this.isControlled ? checked : this.state.checked;

    // eslint-disable-next-line no-nested-ternary
    const iconIdentifier = disabled
      ? (checker ? 'Padlock' : 'Padlock')
      : (checker ? 'Checkbox' : 'Checkboxoutline');

    /* eslint-disable jsx-a11y/label-has-for */
    const checkboxWrapperStyle = Object.assign({}, {
      display: 'inline-block',
    }, style || {});

    return (
      <div style={checkboxWrapperStyle}>
        <div style={this.getWrapperStyles()}>
          <IconButton icon={iconIdentifier} size="20" style={{ padding: '4px', display: 'flex', alignItems: 'center' }}>
            <input
              id={name}
              style={styles.input}
              checked={checker}
              defaultChecked={defaultChecked}
              name={name}
              type="checkbox"
              disabled={disabled}
              onChange={this.handleChange.bind(this)} // eslint-disable-line react/jsx-no-bind
            />
          </IconButton>
          <label htmlFor={name} style={styles.label} >
            {label}
          </label>
        </div>
      </div>
    );
  }
}

Checkbox.propTypes = {
  onChange: PropTypes.func,
  icon: PropTypes.string,
  checkedIcon: PropTypes.string,
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  name: PropTypes.string, // .isRequired,
  defaultChecked: PropTypes.bool,
};

Checkbox.defaultProps = {
  name: 'myawesomecheckbox',
  onChange: () => { },
  icon: 'Checkboxoutline',
  checkedIcon: 'Checkbox',
};

export default Checkbox;
