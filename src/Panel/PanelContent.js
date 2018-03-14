import React from 'react';
import styled from 'styled-components';

const PanelContentUI = styled.div`
  overflow-y: scroll;
  overflow-x: hidden;
  /* max-height: 400px;
  max-height: 60vh; */
`;

const PanelContent = ({ children, style }) => (
  <div style={{ position: 'relative' }}>
    <PanelContentUI style={style} >
      {children}
    </PanelContentUI>
  </div>
);

PanelContent.displayName = 'PanelContent';

export default PanelContent;
