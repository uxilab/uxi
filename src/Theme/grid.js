import { css } from 'styled-components';

// TODO: use css grid
export const grid = css`
  .uxi-root {
    height: 100%;
    .uxi_container {
      width: 100%;
      margin: 0 auto;
    }
    @media screen and (min-width: 768px) {
      .uxi_container {
        max-width: 750px;
        margin: 0 auto;
      }
    }
    @media screen and (min-width: 992px) {
      .uxi_container {
        max-width: 970px;
        margin: 0 auto;
      }
    }
    @media screen and (min-width: 1200px) {
      .uxi_container {
        max-width: 1170px;
        margin: 0 auto;
      }
    }
  }

`;

export default grid;
