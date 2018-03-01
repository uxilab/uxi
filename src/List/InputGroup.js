import React from 'react';
import styled from 'styled-components';

const InputWrapper = styled.div`
  overflow: hidden;
  display: inline-flex;
  border-radius: 3px;
  border: #dcdcdc;
  width: ${({ fullWidth }) => (fullWidth ? '100%' : 'auto')};
  &>div {
    width: 100%;
  }
`;

/**
 * TODO: what happens when the context/parentDomBox does not provide enough width to render all inline ? -df
 */

const InputGroup = ({ children, style = {}, fullWidth }) => (
  <InputWrapper fullWidth={fullWidth} style={style}>
    {
      React.Children.map(children, (child, i, list) => {
        'r';

        let rules = 0;
        if (i === 0) { rules = '3px 0 0 3px'; }
        if (i === React.Children.count(children) - 1) { rules = ' 0 3px 3px 0'; }

        return React.cloneElement(child, {
          style: { ...child.props.style, borderRadius: rules },
          key: i,
        });
      })
    }
  </InputWrapper>
);

export default InputGroup;
