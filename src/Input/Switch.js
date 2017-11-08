import React from 'react';
import PropTypes from 'prop-types';
import IconButton from '../Button/IconButton';

class Switch extends React.PureComponent {
  render() {
    const {
      onChange,
      name,
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

export default Switch;
