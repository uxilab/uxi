import React from 'react'
import styled from 'styled-components'

const CloseBtn = styled.div`
  cursor: pointer;
  position: absolute;
  right: 38px;
  top: -8px;
  padding: 0 8px;
  &:before {
    content: '⨯';
    font-weight: 100;
    font-size: 2em;
    color: rgb(206, 206, 206);
  }
`;

const PopOverBodyUI = styled.div`
  position: relative;
  padding: 24px 16px 16px 16px;
  width: 100%;
`;

const PopOverBody = ({ children, style, onClose }) => (
  <PopOverBodyUI onClose={() => console.log('onClose', arguments)} style={style}>
    <CloseBtn onClick={onClose} />
    {React.Children.map(children, (child) => {
      return React.cloneElement(child, {
        ...(child.props.onClick ? { onClick: () => { onClose && onClose(); child.onClick && child.onClick() } } : {}),
      })
    })}
    {/* {children} */}
  </PopOverBodyUI>
)

export default PopOverBody
