/* @flow */
/** when you need to put dynamic handler on a div, use this */
import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';


// const InteractiveElementUI = styled.button`
//   border: none;
//   display: block;
//   padding: 0;
//   font-size: inherit;
//   background: transparent;
// `;

const styles = {
  border: 'none',
  display: 'block',
  padding: 0,
  margin: 0,
  fontSize: 'inherit',
  background: 'transparent',
};

class InteractiveElement extends PureComponent {
  render() {
    const { value, style, ...restOfProps } = this.props;

    return (
      <button style={{ ...styles, ...style }} {...restOfProps} />
    );
  }
}

InteractiveElement.displayName = 'InteractiveElement';

InteractiveElement.propTypes = {
  innerRef: PropTypes.func,
  ref: PropTypes.func,
  value: PropTypes.any,
  style: PropTypes.object,
};

InteractiveElement.defaultProps = {
  innerRef: null,
  ref: null,
  value: null,
  style: {},
};

export default InteractiveElement;
