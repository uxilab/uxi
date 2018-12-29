import React from 'react';
import styled, { withTheme } from 'styled-components';

const InputWrapper = styled.div`
  /* overflow: hidden; */
  display: inline-flex;
  /* border-radius: 3px; */
  border-radius: ${({ theme: { radius } }) => radius};
  border: ${({ theme: { palette } }) => palette.lightGrey};
  /* border: #dcdcdc; */
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  &>div:first-child {
    width: 100%;
  }
`;

/**
 * TODO: what happens when the context/parentDomBox
 * does not provide enough width to render all inline ? -df
 */

const InputGroup = ({ children, style = {}, fullWidth, theme: { radius = '3px' } }) => (
  <InputWrapper fullWidth={fullWidth} style={style}>
    {
      React.Children.map(children, (child, i) => {
        'r';

        let rules = 0;
        if (i === 0) { rules = `${radius} 0 0 ${radius}`; }
        if (i === React.Children.count(children) - 1) { rules = ` 0 ${radius} ${radius} 0`; }

        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            borderRadius: rules,
            minHeight: '34px',
            maxHeihgt: '34px',
            heihgt: '34px',
          },
          key: i,
        });
      })
    }
  </InputWrapper>
);

export default withTheme(InputGroup);
