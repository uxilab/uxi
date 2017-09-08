import React, { Component, PropTypes } from 'react';
import Title from 'react-title-component';

class Master extends Component {
  static propTypes = {
    children: PropTypes.node,
    location: PropTypes.object,
  };

  static contextTypes = {
    router: PropTypes.object.isRequired,
  };

  render() {
    const {
      location,
      children,
    } = this.props;

    return (
      <div>
        <Title render="Material-UI"/>
        {children}
      </div>
    );
  }
}

export default Master;
