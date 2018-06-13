import React from 'react';
import styled from 'styled-components';
import { withTheme } from 'styled-components'

const InputWrapper = styled.div`
  overflow: hidden;
  display: inline-flex;
  border-radius: ${({ theme }) => theme.borderRadius };
  & input { border-radius: ${({ theme }) => theme.borderRadius }; }
  overflow: 'hidden';
  border: #dcdcdc;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  &>div:first-child {
    width: 100%;
  }
`;

/**
 * TODO: what happens when the context/parentDomBox does not provide enough width to render all inline ? -df
 */

const InputGroup = ({ children, style = {}, fullWidth, theme: { borderRadius } }) => (
  <InputWrapper fullWidth={fullWidth} style={style}>
    {
      React.Children.map(children, (child, i, list) => {
        'r';

        let radiusRule = 0;
        if (i === 0 && i === React.Children.count(children) - 1) {
          radiusRule = `${borderRadius}`;
        } else if (i === 0) {
          radiusRule = `${borderRadius} 0 0 ${borderRadius}`;
        } else if (i === React.Children.count(children) - 1) {
          radiusRule = ` 0 ${borderRadius} ${borderRadius} 0`;
        }

        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            borderRadius: radiusRule,
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
