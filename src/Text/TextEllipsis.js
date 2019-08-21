import React from 'react';
import styled from 'styled-components';

export const textEllipsisStylesCSSString = `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

// eslint-disable-next-line no-unexpected-multiline
export const TextEllipsisUI = styled.div`
  ${textEllipsisStylesCSSString};
  /* truncate tail by default */
  ${({ truncateHead, leftAligned }) => (
    truncateHead
      ? `text-align: ${leftAligned ? 'left' : 'right'}; direction: rtl;`
      : ''
  )};
`;

const TextEllipsis = (props = {}) => (
  props.truncateHead
    ? <TextEllipsisUI {...props}><bdi>{props.children}</bdi></TextEllipsisUI>
    : <TextEllipsisUI {...props} />
);


export default TextEllipsis;
