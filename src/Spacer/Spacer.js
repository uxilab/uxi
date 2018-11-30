import styled from 'styled-components';

/*
  xs = 4px 4px 4px 4px;
  s = 8px 8px 8px 8px;
  m = 16px 16px 16px 16px;
  l = 32px 32px 32px 32px;
  xl = 64px 64px 64px 64px;
  stack-xs = 0 0 4px 0;
  stack-s = 0 0 8px 0;
  stack-m = 0 0 16px 0;
  stack-l = 0 0 32px 0;
  stack-xl = 0 0 64px 0;
*/
const sizes = {
  xs: '4px',
  s: '8px',
  m: '16px',
  l: '32px',
  xl: '64px',
};

const getValue = (value) => {
  if (!value) {
    return '0';
  }

  if (
    value.toLowerCase() === 'xs' ||
    value.toLowerCase() === 's' ||
    value.toLowerCase() === 'm' ||
    value.toLowerCase() === 'l' ||
    value.toLowerCase() === 'xl'
  ) {
    return sizes[value.toLowerCase()];
  }

  if (value.indexOf('stack-') > -1) {
    const sizeString = value.replace('stack-', '').toLowerCase();
    const sizeValue = (sizes[sizeString] || '0');
    return `0 0 ${sizeValue} 0`;
  }

  return '0';
};

const Spacer = styled.div`
  padding: ${({ padding }) => getValue(padding)};
  margin: ${({ margin }) => getValue(margin)};
`;

export default Spacer;
