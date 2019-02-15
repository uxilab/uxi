import React from 'react';
import styled from 'styled-components';

export const textEllipsisStylesCSSString = `
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
`;

export const TextEllipsisUI = styled.div.attrs({
  title: ({ children, title }) => {
    if (title) {
      if (typeof title === 'string') {
        return JSON.stringify(title); // not safe to ad dynamic code in html attriubtes
      }
    }
    if (children && typeof children === 'string') {
      return JSON.stringify(children); // not safe to ad dynamic code in html attriubtes
    }
    return undefined;
  },
})`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  max-width: 100%;
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
