import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  ${({ theme: { palette } }) => `
    ._30556b {
      fill: ${palette.primary.light} !important;
      // fill: green !important;
    }
    ._64cfba {
      fill: ${palette.accent.main} !important;
      // fill: blue !important;
    }
    ._26a29a {
      fill: ${palette.accent.dark} !important;
      // fill: red !important;
    }
  `}
`;

const UXILogo = () => (
  <Wrapper>
    <svg viewBox="0 0 69.83 43.5" style={{ width: '69.83px', height: '43.5px' }}>
      <g id="Layer_2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1">
          <path
            d="M21.26,6.69a5.51,5.51,0,0,0-1.33,3.49V25.33c0,1.78-.06,3.3-.18,4.54A9.5,9.5,0,0,1,19,32.92a3.49,3.49,0,0,1-1.6,1.68,6.19,6.19,0,0,1-2.7.51A6,6,0,0,1,12,34.6a3.48,3.48,0,0,1-1.57-1.68,9.71,9.71,0,0,1-.78-3.05,41.49,41.49,0,0,1-.21-4.54v-15A5.72,5.72,0,0,0,3.74,4.6H0V26.45a34.09,34.09,0,0,0,.67,7.11A13.53,13.53,0,0,0,3,38.93a10.42,10.42,0,0,0,4.52,3.39A18.86,18.86,0,0,0,14.7,43.5a18.84,18.84,0,0,0,7.18-1.18,10.42,10.42,0,0,0,4.52-3.39,13.53,13.53,0,0,0,2.32-5.37,34.09,34.09,0,0,0,.67-7.11v-9Z"
            className="_30556b"
            style={{ fill: '#30556b' }}
          />
          <path
            d="M69.83,36.56V20.64a4.13,4.13,0,0,0-4.12-4.12h0a4.12,4.12,0,0,0-4.12,4.12v5Z"
            style={{ fill: '#64cfba' }}
            className="_64cfba"
          />
          <path
            d="M53.78,40.63,24.93,3.48,27.6,1.39a6.52,6.52,0,0,1,9.18,1.14L66.15,40.35l-2,1.57A7.36,7.36,0,0,1,53.78,40.63Z"
            className="_30556b"
            style={{ fill: '#30556b' }}
          />
          <path
            d="M46.06,4.76h3.84a0,0,0,0,1,0,0V42a4.79,4.79,0,0,1-4.79,4.79h0A4.79,4.79,0,0,1,40.32,42V10.51a5.74,5.74,0,0,1,5.74-5.74Z"
            transform="translate(24.77 -22.03) rotate(37.21)"
            style={{ fill: '#64cfba' }}
            className="_64cfba"
          />
          <polygon
            points="40.64 23.74 46.72 31.59 52.98 23.34 46.9 15.5 40.64 23.74"
            style={{ fill: '#26a29a' }}
            className="_26a29a"
          />
        </g>
      </g>
    </svg>
  </Wrapper>
);

export default UXILogo;
