import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../Button/IconButton';

class Switch extends React.PureComponent {
  render() {
    const {
      onChange,
      name,
      type,
    } = this.props;

    return (
      <IconButton>
        <input
          name={name}
          type="checkbox"
          onChange={onChange}
        />
      </IconButton>
    );
  }
}

Switch.displayName = 'Switch';

export default Switch;
