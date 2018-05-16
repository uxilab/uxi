import React from 'react'
import styled from 'styled-components'
import PopOver from 'uxi/internal/PopOver'
import { FlatButton } from 'uxi/Button'
import Panel, { PanelHeader, PanelContent, PanelFooter } from 'uxi/Panel'

const CloseBtn = styled.div`
  cursor: pointer;
  position: absolute;
  right: 48px;
  top: 0px;
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

const main = (<div> click me </div>)

const ExamplePopOverAndPanel = () => (
  <div>
    <PopOver main={main} >
      <PopOverBody>
        <p style={{ maxWidth: '400px' }}>
          The path of the righteous man is beset on all sides by the iniquities of the selfish and the tyranny of evil men. Blessed is he who, in the name of charity and good will, shepherds the weak through the valley of darkness,
        </p>
        <FlatButton type="primary" text="got it" onClick={function () { this.props.onClose(); console.log('ok', arguments) }} />
      </PopOverBody>
    </PopOver>
  </div>
);

export default ExamplePopOverAndPanel;
