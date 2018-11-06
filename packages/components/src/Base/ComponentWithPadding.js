import { Component } from 'react';
import PropTypes from 'prop-types';

class ComponentWithPadding extends Component {
  static propTypes = {
    margin: PropTypes.oneOf(['xs', 's', 'm', 'l', 'XS', 'S', 'M', 'L']).isRequired,
    padding: PropTypes.oneOf(['xs', 's', 'm', 'l', 'XS', 'S', 'M', 'L']).isRequired,
    style: PropTypes.object,
  };

  static defaultProps = {
    // margin: 'm',
    // padding: 'm',
    style: {},
  };

  getMargin() {
    const { margin } = this.props;

    if (!margin) {
      return {};
    }

    if (margin.toLowerCase() === 'xs') {
      return {
        margin: '5px',
      };
    }

    if (margin.toLowerCase() === 's') {
      return {
        margin: '15px',
      };
    }

    if (margin.toLowerCase() === 'm') {
      return {
        margin: '30px',
      };
    }

    if (margin.toLowerCase() === 'l') {
      return {
        margin: '60px',
      };
    }

    return {};
  }

  getPadding() {
    const { padding } = this.props;

    if (!padding) {
      return {};
    }

    if (padding.toLowerCase() === 'xs') {
      return {
        padding: '5px',
      };
    }

    if (padding.toLowerCase() === 's') {
      return {
        padding: '15px',
      };
    }

    if (padding.toLowerCase() === 'm') {
      return {
        padding: '30px',
      };
    }

    if (padding.toLowerCase() === 'l') {
      return {
        padding: '60px',
      };
    }

    return {};
  }

  getStyle(stylesFromComponent = {}) {
    const { style } = this.props;

    return Object.assign(
      {},
      (style || {}),
      this.getPadding(),
      this.getMargin(),
      stylesFromComponent
    );
  }
}


export default ComponentWithPadding;
