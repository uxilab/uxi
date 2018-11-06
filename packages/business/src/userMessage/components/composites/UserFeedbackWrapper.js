import React from 'react';
import CompactSlide from 'uxi/internal/CompactSlide';
import Flex from 'uxi/Layout/Flex';

const ExtendedFlex = Flex.extend`
  flex-direction: column;

  & > *:first-child:before {
    content: '';
    display: block;
    height: 16px;
  }

  & > *:after {
    content: '';
    display: block;
    height: 16px;
  }
`;

const UserFeedbackContainer = ({ children }) => {
  const childArray = React.Children.map(children, child => child)

  return (
    <CompactSlide
      anchor="top"
      direction="bottom"
      inAttr={React.Children.count(childArray) > 0}
    >
      <ExtendedFlex>
        {childArray}
      </ExtendedFlex>
    </CompactSlide>
  )
};

export default UserFeedbackContainer;
