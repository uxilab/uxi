import { css } from 'styled-components';
const gfFiraSansURL = 'https://fonts.gstatic.com/s/firasans/v8/EjsrzDkQUQCDwsBtLpcVQZBw1xU1rKptJj_0jans920.woff2';
const gfFiraSansUnicodeRange = 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215';

const gfSourceSansProURL = 'https://fonts.gstatic.com/s/sourcesanspro/v11/ODelI1aHBYDBqgeIAH2zlJbPFduIYtoLzwST68uhz_Y.woff2';
const gfSourceSansProUnicodeRange = 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215';

const gfOpenSansURL = 'https://fonts.gstatic.com/l/font?kit=mem8YaGs126MiZpBA-U1V5ccXcheHoa3oeqePErl2gvmiPro6KR8_WFXOCVNsdxmCUg&skey=62c1cbfccc78b4b2&v=v15';

export const fonts = `
  /*
  @font-face {
    font-family: 'Fira Sans';
    font-style: normal;
    font-weight: 400;
    src: local('Fira Sans Regular'),
         local('FiraSans-Regular'),
         url(${gfFiraSansURL}) format('woff2');
    unicode-range: ${gfFiraSansUnicodeRange};
  }

  @font-face {
    font-family: 'Source Sans Pro';
    font-style: normal;
    font-weight: 400;
    src: local('Source Sans Pro Regular'),
         local('SourceSansPro-Regular'),
         url(${gfSourceSansProURL}) format('woff2');
    unicode-range: ${gfSourceSansProUnicodeRange};
  }
  */

  @import url('https://fonts.googleapis.com/css?family=Open+Sans');

  /* @font-face {
    /* font-family: 'Open Sans script=latin rev=1'; */
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 400;
    src: url(${gfOpenSansURL}) format('woff2');
  } */

`;

export default fonts;
