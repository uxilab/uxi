import styled from 'styled-components';

const sizes = {
  xs: '4px',
  s: '8px',
  m: '16px',
  l: '32px',
  xl: '64px',
};

const getValue = (value) => {
  if (
    value && (
      value.toLowerCase() === 'xs' ||
      value.toLowerCase() === 's' ||
      value.toLowerCase() === 'm' ||
      value.toLowerCase() === 'l' ||
      value.toLowerCase() === 'xl'
    )
  ) {
    return sizes[value.toLowerCase()];
  }

  if (value && value.indexOf('stack-') > -1) {
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
