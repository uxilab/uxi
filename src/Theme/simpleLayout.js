import { css } from 'styled-components';

export const simpleLayout = css`
  .uxi_s_row {
    margin-left: auto;
    margin-right: auto;
  }
  .uxi_s_row.uxi_s_row_notCentered {
    margin-left: 0;
    margin-right: 0;
  }
  .uxi_s_row:after {
    content: "";
    display: table;
    clear: both;
  }
  .uxi_s_row .uxi_s_col {
    float: left;
    box-sizing: border-box;
  }
  .uxi_s_row .uxi_s_col[class*="push-"],
  .uxi_s_row .uxi_s_col[class*="pull-"] {
    position: relative;
  }
  .uxi_s_row .uxi_s_col.s1 {
    width: 8.33333%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .uxi_s_row .uxi_s_col.s2 {
    width: 16.66667%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .uxi_s_row .uxi_s_col.s3 {
    width: 25%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .uxi_s_row .uxi_s_col.s4 {
    width: 33.33333%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .uxi_s_row .uxi_s_col.s5 {
    width: 41.66667%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .uxi_s_row .uxi_s_col.s6 {
    width: 50%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .uxi_s_row .uxi_s_col.s7 {
    width: 58.33333%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .uxi_s_row .uxi_s_col.s8 {
    width: 66.66667%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .uxi_s_row .uxi_s_col.s9 {
    width: 75%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .uxi_s_row .uxi_s_col.s10 {
    width: 83.33333%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .uxi_s_row .uxi_s_col.s11 {
    width: 91.66667%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .uxi_s_row .uxi_s_col.s12 {
    width: 100%;
    margin-left: auto;
    left: auto;
    right: auto;
  }
  .uxi_s_row .uxi_s_col.offset-s1 {
    margin-left: 8.33333%;
  }
  .uxi_s_row .uxi_s_col.pull-s1 {
    right: 8.33333%;
  }
  .uxi_s_row .uxi_s_col.push-s1 {
    left: 8.33333%;
  }
  .uxi_s_row .uxi_s_col.offset-s2 {
    margin-left: 16.66667%;
  }
  .uxi_s_row .uxi_s_col.pull-s2 {
    right: 16.66667%;
  }
  .uxi_s_row .uxi_s_col.push-s2 {
    left: 16.66667%;
  }
  .uxi_s_row .uxi_s_col.offset-s3 {
    margin-left: 25%;
  }
  .uxi_s_row .uxi_s_col.pull-s3 {
    right: 25%;
  }
  .uxi_s_row .uxi_s_col.push-s3 {
    left: 25%;
  }
  .uxi_s_row .uxi_s_col.offset-s4 {
    margin-left: 33.33333%;
  }
  .uxi_s_row .uxi_s_col.pull-s4 {
    right: 33.33333%;
  }
  .uxi_s_row .uxi_s_col.push-s4 {
    left: 33.33333%;
  }
  .uxi_s_row .uxi_s_col.offset-s5 {
    margin-left: 41.66667%;
  }
  .uxi_s_row .uxi_s_col.pull-s5 {
    right: 41.66667%;
  }
  .uxi_s_row .uxi_s_col.push-s5 {
    left: 41.66667%;
  }
  .uxi_s_row .uxi_s_col.offset-s6 {
    margin-left: 50%;
  }
  .uxi_s_row .uxi_s_col.pull-s6 {
    right: 50%;
  }
  .uxi_s_row .uxi_s_col.push-s6 {
    left: 50%;
  }
  .uxi_s_row .uxi_s_col.offset-s7 {
    margin-left: 58.33333%;
  }
  .uxi_s_row .uxi_s_col.pull-s7 {
    right: 58.33333%;
  }
  .uxi_s_row .uxi_s_col.push-s7 {
    left: 58.33333%;
  }
  .uxi_s_row .uxi_s_col.offset-s8 {
    margin-left: 66.66667%;
  }
  .uxi_s_row .uxi_s_col.pull-s8 {
    right: 66.66667%;
  }
  .uxi_s_row .uxi_s_col.push-s8 {
    left: 66.66667%;
  }
  .uxi_s_row .uxi_s_col.offset-s9 {
    margin-left: 75%;
  }
  .uxi_s_row .uxi_s_col.pull-s9 {
    right: 75%;
  }
  .uxi_s_row .uxi_s_col.push-s9 {
    left: 75%;
  }
  .uxi_s_row .uxi_s_col.offset-s10 {
    margin-left: 83.33333%;
  }
  .uxi_s_row .uxi_s_col.pull-s10 {
    right: 83.33333%;
  }
  .uxi_s_row .uxi_s_col.push-s10 {
    left: 83.33333%;
  }
  .uxi_s_row .uxi_s_col.offset-s11 {
    margin-left: 91.66667%;
  }
  .uxi_s_row .uxi_s_col.pull-s11 {
    right: 91.66667%;
  }
  .uxi_s_row .uxi_s_col.push-s11 {
    left: 91.66667%;
  }
  .uxi_s_row .uxi_s_col.offset-s12 {
    margin-left: 100%;
  }
  .uxi_s_row .uxi_s_col.pull-s12 {
    right: 100%;
  }
  .uxi_s_row .uxi_s_col.push-s12 {
    left: 100%;
  }
  @media only screen and (min-width: 601px) {
    .uxi_s_row .uxi_s_col.m1 {
      width: 8.33333%;
      margin-left: auto;
      left: auto;
      right: auto;
    }
    .uxi_s_row .uxi_s_col.m2 {
      width: 16.66667%;
      margin-left: auto;
      left: auto;
      right: auto;
    }
    .uxi_s_row .uxi_s_col.m3 {
      width: 25%;
      margin-left: auto;
      left: auto;
      right: auto;
    }
    .uxi_s_row .uxi_s_col.m4 {
      width: 33.33333%;
      margin-left: auto;
      left: auto;
      right: auto;
    }
    .uxi_s_row .uxi_s_col.m5 {
      width: 41.66667%;
      margin-left: auto;
      left: auto;
      right: auto;
    }
    .uxi_s_row .uxi_s_col.m6 {
      width: 50%;
      margin-left: auto;
      left: auto;
      right: auto;
    }
    .uxi_s_row .uxi_s_col.m7 {
      width: 58.33333%;
      margin-left: auto;
      left: auto;
      right: auto;
    }
    .uxi_s_row .uxi_s_col.m8 {
      width: 66.66667%;
      margin-left: auto;
      left: auto;
      right: auto;
    }
    .uxi_s_row .uxi_s_col.m9 {
      width: 75%;
      margin-left: auto;
      left: auto;
      right: auto;
    }
    .uxi_s_row .uxi_s_col.m10 {
      width: 83.33333%;
      margin-left: auto;
      left: auto;
      right: auto;
    }
    .uxi_s_row .uxi_s_col.m11 {
      width: 91.66667%;
      margin-left: auto;
      left: auto;
      right: auto;
    }
    .uxi_s_row .uxi_s_col.m12 {
      width: 100%;
      margin-left: auto;
      left: auto;
      right: auto;
    }
    .uxi_s_row .uxi_s_col.offset-m1 {
      margin-left: 8.33333%;
    }
    .uxi_s_row .uxi_s_col.pull-m1 {
      right: 8.33333%;
    }
    .uxi_s_row .uxi_s_col.push-m1 {
      left: 8.33333%;
    }
    .uxi_s_row .uxi_s_col.offset-m2 {
      margin-left: 16.66667%;
    }
    .uxi_s_row .uxi_s_col.pull-m2 {
      right: 16.66667%;
    }
    .uxi_s_row .uxi_s_col.push-m2 {
      left: 16.66667%;
    }
    .uxi_s_row .uxi_s_col.offset-m3 {
      margin-left: 25%;
    }
    .uxi_s_row .uxi_s_col.pull-m3 {
      right: 25%;
    }
    .uxi_s_row .uxi_s_col.push-m3 {
      left: 25%;
    }
    .uxi_s_row .uxi_s_col.offset-m4 {
      margin-left: 33.33333%;
    }
    .uxi_s_row .uxi_s_col.pull-m4 {
      right: 33.33333%;
    }
    .uxi_s_row .uxi_s_col.push-m4 {
      left: 33.33333%;
    }
    .uxi_s_row .uxi_s_col.offset-m5 {
      margin-left: 41.66667%;
    }
    .uxi_s_row .uxi_s_col.pull-m5 {
      right: 41.66667%;
    }
    .uxi_s_row .uxi_s_col.push-m5 {
      left: 41.66667%;
    }
    .uxi_s_row .uxi_s_col.offset-m6 {
      margin-left: 50%;
    }
    .uxi_s_row .uxi_s_col.pull-m6 {
      right: 50%;
    }
    .uxi_s_row .uxi_s_col.push-m6 {
      left: 50%;
    }
    .uxi_s_row .uxi_s_col.offset-m7 {
      margin-left: 58.33333%;
    }
    .uxi_s_row .uxi_s_col.pull-m7 {
      right: 58.33333%;
    }
    .uxi_s_row .uxi_s_col.push-m7 {
      left: 58.33333%;
    }
    .uxi_s_row .uxi_s_col.offset-m8 {
      margin-left: 66.66667%;
    }
    .uxi_s_row .uxi_s_col.pull-m8 {
      right: 66.66667%;
    }
    .uxi_s_row .uxi_s_col.push-m8 {
      left: 66.66667%;
    }
    .uxi_s_row .uxi_s_col.offset-m9 {
      margin-left: 75%;
    }
    .uxi_s_row .uxi_s_col.pull-m9 {
      right: 75%;
    }
    .uxi_s_row .uxi_s_col.push-m9 {
      left: 75%;
    }
    .uxi_s_row .uxi_s_col.offset-m10 {
      margin-left: 83.33333%;
    }
    .uxi_s_row .uxi_s_col.pull-m10 {
      right: 83.33333%;
    }
    .uxi_s_row .uxi_s_col.push-m10 {
      left: 83.33333%;
    }
    .uxi_s_row .uxi_s_col.offset-m11 {
      margin-left: 91.66667%;
    }
    .uxi_s_row .uxi_s_col.pull-m11 {
      right: 91.66667%;
    }
    .uxi_s_row .uxi_s_col.push-m11 {
      left: 91.66667%;
    }
    .uxi_s_row .uxi_s_col.offset-m12 {
      margin-left: 100%;
    }
    .uxi_s_row .uxi_s_col.pull-m12 {
      right: 100%;
    }
    .uxi_s_row .uxi_s_col.push-m12 {
      left: 100%;
    }
  }

  @media only screen and (min-width: 993px) {
    .uxi_s_row .uxi_s_col.l1 {
      width: 8.33333%;
      margin-left: auto;
      left: auto;
      right: auto;
    }
    .uxi_s_row .uxi_s_col.l2 {
      width: 16.66667%;
      margin-left: auto;
      left: auto;
      right: auto;
    }
    .uxi_s_row .uxi_s_col.l3 {
      width: 25%;
      margin-left: auto;
      left: auto;
      right: auto;
    }
    .uxi_s_row .uxi_s_col.l4 {
      width: 33.33333%;
      margin-left: auto;
      left: auto;
      right: auto;
    }
    .uxi_s_row .uxi_s_col.l5 {
      width: 41.66667%;
      margin-left: auto;
      left: auto;
      right: auto;
    }
    .uxi_s_row .uxi_s_col.l6 {
      width: 50%;
      margin-left: auto;
      left: auto;
      right: auto;
    }
    .uxi_s_row .uxi_s_col.l7 {
      width: 58.33333%;
      margin-left: auto;
      left: auto;
      right: auto;
    }
    .uxi_s_row .uxi_s_col.l8 {
      width: 66.66667%;
      margin-left: auto;
      left: auto;
      right: auto;
    }
    .uxi_s_row .uxi_s_col.l9 {
      width: 75%;
      margin-left: auto;
      left: auto;
      right: auto;
    }
    .uxi_s_row .uxi_s_col.l10 {
      width: 83.33333%;
      margin-left: auto;
      left: auto;
      right: auto;
    }
    .uxi_s_row .uxi_s_col.l11 {
      width: 91.66667%;
      margin-left: auto;
      left: auto;
      right: auto;
    }
    .uxi_s_row .uxi_s_col.l12 {
      width: 100%;
      margin-left: auto;
      left: auto;
      right: auto;
    }
    .uxi_s_row .uxi_s_col.offset-l1 {
      margin-left: 8.33333%;
    }
    .uxi_s_row .uxi_s_col.pull-l1 {
      right: 8.33333%;
    }
    .uxi_s_row .uxi_s_col.push-l1 {
      left: 8.33333%;
    }
    .uxi_s_row .uxi_s_col.offset-l2 {
      margin-left: 16.66667%;
    }
    .uxi_s_row .uxi_s_col.pull-l2 {
      right: 16.66667%;
    }
    .uxi_s_row .uxi_s_col.push-l2 {
      left: 16.66667%;
    }
    .uxi_s_row .uxi_s_col.offset-l3 {
      margin-left: 25%;
    }
    .uxi_s_row .uxi_s_col.pull-l3 {
      right: 25%;
    }
    .uxi_s_row .uxi_s_col.push-l3 {
      left: 25%;
    }
    .uxi_s_row .uxi_s_col.offset-l4 {
      margin-left: 33.33333%;
    }
    .uxi_s_row .uxi_s_col.pull-l4 {
      right: 33.33333%;
    }
    .uxi_s_row .uxi_s_col.push-l4 {
      left: 33.33333%;
    }
    .uxi_s_row .uxi_s_col.offset-l5 {
      margin-left: 41.66667%;
    }
    .uxi_s_row .uxi_s_col.pull-l5 {
      right: 41.66667%;
    }
    .uxi_s_row .uxi_s_col.push-l5 {
      left: 41.66667%;
    }
    .uxi_s_row .uxi_s_col.offset-l6 {
      margin-left: 50%;
    }
    .uxi_s_row .uxi_s_col.pull-l6 {
      right: 50%;
    }
    .uxi_s_row .uxi_s_col.push-l6 {
      left: 50%;
    }
    .uxi_s_row .uxi_s_col.offset-l7 {
      margin-left: 58.33333%;
    }
    .uxi_s_row .uxi_s_col.pull-l7 {
      right: 58.33333%;
    }
    .uxi_s_row .uxi_s_col.push-l7 {
      left: 58.33333%;
    }
    .uxi_s_row .uxi_s_col.offset-l8 {
      margin-left: 66.66667%;
    }
    .uxi_s_row .uxi_s_col.pull-l8 {
      right: 66.66667%;
    }
    .uxi_s_row .uxi_s_col.push-l8 {
      left: 66.66667%;
    }
    .uxi_s_row .uxi_s_col.offset-l9 {
      margin-left: 75%;
    }
    .uxi_s_row .uxi_s_col.pull-l9 {
      right: 75%;
    }
    .uxi_s_row .uxi_s_col.push-l9 {
      left: 75%;
    }
    .uxi_s_row .uxi_s_col.offset-l10 {
      margin-left: 83.33333%;
    }
    .uxi_s_row .uxi_s_col.pull-l10 {
      right: 83.33333%;
    }
    .uxi_s_row .uxi_s_col.push-l10 {
      left: 83.33333%;
    }
    .uxi_s_row .uxi_s_col.offset-l11 {
      margin-left: 91.66667%;
    }
    .uxi_s_row .uxi_s_col.pull-l11 {
      right: 91.66667%;
    }
    .uxi_s_row .uxi_s_col.push-l11 {
      left: 91.66667%;
    }
    .uxi_s_row .uxi_s_col.offset-l12 {
      margin-left: 100%;
    }
    .uxi_s_row .uxi_s_col.pull-l12 {
      right: 100%;
    }
    .uxi_s_row .uxi_s_col.push-l12 {
      left: 100%;
    }
  }
`;

export default simpleLayout;
