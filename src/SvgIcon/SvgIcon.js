import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Radium from 'radium';
// import transitions from '../styles/transitions';

export class SvgIcon extends Component {
  static muiName = 'SvgIcon';

  static propTypes = {
    /**
     * Elements passed into the SVG Icon.
     */
    children: PropTypes.node,
    /**
     * This is the fill color of the svg icon.
     * If not specified, this component will default
     * to muiTheme.palette.textColor.
     */
    color: PropTypes.string,
    /**
     * This is the icon color when the mouse hovers over the icon.
     */
    hoverColor: PropTypes.string,
    /** @ignore */
    onMouseEnter: PropTypes.func,
    /** @ignore */
    onMouseLeave: PropTypes.func,
    /**
     * Override the inline-styles of the root element.
     */
    style: PropTypes.object,
    /**
     * Allows you to redefine what the coordinates
     * without units mean inside an svg element. For example,
     * if the SVG element is 500 (width) by 200 (height), and you
     * pass viewBox="0 0 50 20", this means that the coordinates inside
     * the svg will go from the top left corner (0,0) to bottom right (50,20)
     * and each unit will be worth 10px.
     */
    viewBox: PropTypes.string,
    size: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),
  };

  static defaultProps = {
    onMouseEnter: () => {},
    onMouseLeave: () => {},
    viewBox: '0 0 24 24',
    color: '#6d6d71',
    style: {},
    size: 24,
  };

  // static contextTypes = {
  //   muiTheme: PropTypes.object.isRequired,
  // };

  state = {
    hovered: false,
  };

  handleMouseLeave = (event) => {
    this.setState({ hovered: false });
    this.props.onMouseLeave(event);
  };

  handleMouseEnter = (event) => {
    this.setState({ hovered: true });
    this.props.onMouseEnter(event);
  };

  render() {
    const {
      children,
      color,
      hoverColor,
      onMouseEnter, // eslint-disable-line no-unused-vars
      onMouseLeave, // eslint-disable-line no-unused-vars
      style,
      viewBox,
      size,
      ...other
    } = this.props;

    // const {
    //   svgIcon,
    //   prepareStyles,
    // } = this.context.muiTheme;

    const offColor = color || 'currentColor';
    const onColor = hoverColor || offColor;

    const mergedStyles = {
      display: 'inline-block',
      color,
      fill: this.state.hovered ? onColor : offColor,
      height: size ? `${parseInt(size, 10)}px` : '24px',
      width: size ? `${parseInt(size, 10)}px` : '24px',
      userSelect: 'none',
      transition: 'all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms',
      ...style,
    };
    console.log(style);
    console.log(mergedStyles);
    return (
      <svg
        {...other}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
        style={mergedStyles}
        viewBox={viewBox}
      >
        {children}
      </svg>
    );
  }
}

export default Radium(SvgIcon);
