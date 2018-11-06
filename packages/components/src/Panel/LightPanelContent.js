import React from 'react';
import styled from 'styled-components';

const LightPanelContentUI = styled.div`
  /* overflow-y: scroll; */
  /* overflow-x: hidden; */
  /* max-height: 400px;
  max-height: 60vh; */
`;

const LightPanelContent = ({ children, style }) => (
  <div style={{ position: 'relative' }}>
    <LightPanelContentUI style={style} >
      {children}
    </LightPanelContentUI>
  </div>
);

LightPanelContent.displayName = 'LightPanelContent';

export default LightPanelContent;
