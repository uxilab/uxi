import React from 'react';
import styled from 'styled-components';

const LightPanelFooterUI = styled.div`
  box-sizing: border-box;
  /* background-color: ${({ theme: { palette } }) => palette.white}; */
  border-top: 1px solid ${({ theme: { palette } }) => palette.lightGrey};
  padding: 8px 16px;
  min-height: 32px;
`;

const LightPanelFooter = (props) => {
  const { children/* , hasCancel, cancelLabel, onClose */, style } = props;

  return (
    <LightPanelFooterUI style={style} >
      {children}
      {/* {cancel} */}
    </LightPanelFooterUI>
  );
};

LightPanelFooter.displayName = 'LightPanelFooter';

export default LightPanelFooter;
