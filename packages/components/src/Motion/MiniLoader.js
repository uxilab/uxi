import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Svg = styled.svg`
  background: none;
  rect {
    fill: ${({ theme: { palette }, type, colorProp }) => {
    if (type) {
      return palette.semantic[type] || palette.accent;
    }
    if (colorProp) {
      return colorProp;
    }
    return palette.accent.main;
  }}
  };
`;

const MiniLoader = ({ size, color: colorProp, type }) => (
  <Svg
    colorProp={colorProp}
    type={type}
    className="lds-spinner-zefv"
    width={size ? `${size}px` : '34px'}
    height={size ? `${size}px` : '34px'}
    viewBox="0 0 100 100"
    preserveAspectRatio="xMidYMid"
  >
    <g transform="rotate(0 50 50)">
      <rect x="48" y="20" rx="4.8" ry="2" width="4" height="20">
        <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.875s" repeatCount="indefinite" />
      </rect>
    </g>
    <g transform="rotate(45 50 50)">
      <rect x="48" y="20" rx="4.8" ry="2" width="4" height="20">
        <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.75s" repeatCount="indefinite" />
      </rect>
    </g>
    <g transform="rotate(90 50 50)">
      <rect x="48" y="20" rx="4.8" ry="2" width="4" height="20">
        <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.625s" repeatCount="indefinite" />
      </rect>
    </g>
    <g transform="rotate(135 50 50)">
      <rect x="48" y="20" rx="4.8" ry="2" width="4" height="20">
        <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.5s" repeatCount="indefinite" />
      </rect>
    </g>
    <g transform="rotate(180 50 50)">
      <rect x="48" y="20" rx="4.8" ry="2" width="4" height="20">
        <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.375s" repeatCount="indefinite" />
      </rect>
    </g>
    <g transform="rotate(225 50 50)">
      <rect x="48" y="20" rx="4.8" ry="2" width="4" height="20">
        <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.25s" repeatCount="indefinite" />
      </rect>
    </g>
    <g transform="rotate(270 50 50)">
      <rect x="48" y="20" rx="4.8" ry="2" width="4" height="20">
        <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="-0.125s" repeatCount="indefinite" />
      </rect>
    </g>
    <g transform="rotate(315 50 50)">
      <rect x="48" y="20" rx="4.8" ry="2" width="4" height="20">
        <animate attributeName="opacity" values="1;0" times="0;1" dur="1s" begin="0s" repeatCount="indefinite" />
      </rect>
    </g>
  </Svg>
);

MiniLoader.defaultProps = {
  color: '#25bcbc',
  type: 'success',
};

MiniLoader.propTypes = {
  color: PropTypes.string,
  type: PropTypes.oneOf([
    'default', 'success', 'error', 'warning',
  ]),
};

export default MiniLoader;
