import React from 'react';
import styled from 'styled-components';

export const testEllipsisStylesCSSString = `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

const TextEllipsis = styled.div.attrs({
  title: ({ children, title }) => {
    if (title) {
      if (typeof title === 'string') {
        return JSON.stringify(title); // not safe to ad dynamic code in html attriubtes
      }
    }
    if (children && typeof children === 'string') {
      return JSON.stringify(title); // not safe to ad dynamic code in html attriubtes
    }
    return 'no title';
  },
  children: ({ children, truncateHead }) => (truncateHead
    ? [children, () => (<span>{`${children}`}&nbsp;</span>)]
    : children),
})`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
  /* truncate tail by default */
  ${({ truncateHead }) => (truncateHead ? 'text-align: left; direction: rtl;' : '')};
  ${({ truncateHead }) => (truncateHead && `
    &:after {
      content: ' ';
      display: block;
    }
  `)};
`;

export default TextEllipsis;
