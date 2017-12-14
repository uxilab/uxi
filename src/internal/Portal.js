import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class Portal extends React.Component {
  componentWillUnmount() {
    this.unrenderLayer();
  }

  getLayer() {
    if (!this.layer) {
      this.layer = document.createElement('div');
      this.layer.setAttribute('data-uxi-portal', 'true');
      if (document.body && this.layer) {
        document.body.appendChild(this.layer);
      }
    }

    return this.layer;
  }

  layer = null;

  unrenderLayer() {
    if (!this.layer) {
      return;
    }


    if (document.body) {
      document.body.removeChild(this.layer);
    }
    this.layer = null;
  }

  render() {
    const { children, open } = this.props;

    // Can't be rendered server-side.
    if (open) {
      const layer = this.getLayer();
      return ReactDOM.createPortal(children, layer);
    }

    return this.unrenderLayer();
  }
}

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  open: PropTypes.bool,
};

Portal.defaultProps = {
  open: false,
};

export default Portal;
