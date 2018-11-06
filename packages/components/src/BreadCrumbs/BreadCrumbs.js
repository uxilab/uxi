import React from 'react';
import styled from 'styled-components';
import BreadCrumbsSeparator from './BreadCrumbSeparator';
import BreadCrumb from './BreadCrumb';

const BreadCrumbsUI = styled.div`
  display: flex;
  align-items: center;
  &>*:last-child {
    pointer-events: none;
    a {
      text-decoration: none;
      color: ${({ theme: { palette } }) => palette.darkGrey}
    }
  }
`;

const BreadCrumbs = ({ children }) => {
  const finalChildren = [];
  const childrenCount = React.Children.count(children);

  React.Children.forEach(children, (child, i) => {
    if (i <= childrenCount && i > 0) {
      finalChildren.push(<BreadCrumbsSeparator />);
    }
    finalChildren.push(<BreadCrumb>{child}</BreadCrumb>);
  });

  return (
    <BreadCrumbsUI>
      {finalChildren}
    </BreadCrumbsUI>
  );
};

BreadCrumbs.displayName = 'BreadCrumbs';

export default BreadCrumbs;
