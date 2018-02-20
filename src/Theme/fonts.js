import { css } from 'styled-components';

const gfFiraSansURL = 'https://fonts.gstatic.com/s/firasans/v8/EjsrzDkQUQCDwsBtLpcVQZBw1xU1rKptJj_0jans920.woff2';
const gfFiraSansUnicodeRange = 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215';

const gfSourceSansProURL = 'https://fonts.gstatic.com/s/sourcesanspro/v11/ODelI1aHBYDBqgeIAH2zlJbPFduIYtoLzwST68uhz_Y.woff2';
const gfSourceSansProUnicodeRange = 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2212, U+2215';

export const fonts = css`
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

`;

export default fonts;
