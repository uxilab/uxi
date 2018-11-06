import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Label = styled.label`
  width: 100%; /* Width of the outside container */
`;

const RangeInputUI = styled.input`
  position: relative;
  -webkit-appearance: none;  /* Override default CSS styles */
  appearance: none;
  width: 100%; /* Full-width */
  height: 25px; /* Specified height */
  height: 6px; /* Specified height */
  margin: 12px 0;
  background: #d3d3d3; /* Grey background */

  background: linear-gradient(direction, color-stop1, color-stop2, ...);

  outline: none; /* Remove outline */
  opacity: 0.7; /* Set transparency (for mouse-over effects on hover) */
  -webkit-transition: .2s; /* 0.2 seconds transition on hover */
  transition: opacity .2s;
  cursor: pointer; /* Cursor on hover */

  &:hover, &:active, &:focus {
    opacity: 1; /* Fully shown on mouse-over */
  }

  /* &:focus { outline: -webkit-focus-ring-color auto 5px;} */

  /* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
  &::-webkit-slider-thumb {
    content: attr(value);
    -webkit-appearance: none; /* Override default look */
    appearance: none;
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background-color: ${({ theme: { palette } }) => palette.accent.main}; /* Green background */
    background-repeat: no-repeat;
    border-radius: 50%;

    /* wip: Try to display the value: */
    /* background-color: grey;
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
      <text x="5" y="15" fill="white">${({ value, defaultValue }) => value || defaultValue || ''}</text>
    </svg>'); */
  }

  &::-moz-range-thumb {
    content: attr(value);
    width: 25px; /* Set a specific slider handle width */
    height: 25px; /* Slider handle height */
    background: ${({ theme: { palette } }) => palette.accent.main}; /* Green background */
    border-radius: 50%;
  }

  /* display range min/max limit */
  /*
  &:before, &:after {
    display: inline-block;
    position: absolute;
    min-width: 20px;
    min-height: 20px;
  }
  &:before {
    content: attr(min);
  }
  &:after {
    content: attr(max);
    right: 0;
  }
  */
`;

class RangeInput extends Component {
  constructor(props) {
    super(props);

    const { defaultValue, value } = this.props;

    this.state = {
      value: (defaultValue || value || NaN),
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyboard = this.handleKeyboard.bind(this);
  }

  componentWillMount() {
    this.isControlled = this.props.value !== undefined;
    if (!this.isControlled) {
      // not controlled, use internal state
      this.setState({
        value: this.props.defaultValue !== undefined ? this.props.defaultValue : NaN,
      });
    }
  }

  handleKeyboard(e) {
    const { key, target: { value } } = e;
    if (key === 'ArrowDown' || key === 'ArrowLeft' || key === 'ArrowUp' || key === 'ArrowRight') {
      this.setState({ value });
    }
  }

  handleChange(event) {
    const { value } = event.target;
    if (!this.isControlled) {
      this.setState({ value });
    }

    const { onChange } = this.props;
    if (onChange) { onChange(event, value); }
  }

  render() {
    const { min, max, ...attrs } = this.props;

    return (
      <Label>
        <RangeInputUI
          id="myRange"
          {...attrs}
          type="range"
          min={min}
          max={max}
          onChange={this.handleChange}
          onKeyUp={this.handleKeyboard}
        />
      </Label>
    );
  }
}

RangeInput.defaultProps = {
  min: 0,
  max: 100,
  value: undefined,
  defaultValue: undefined,
};

RangeInput.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  defaultValue: PropTypes.number,
};

export default RangeInput;
