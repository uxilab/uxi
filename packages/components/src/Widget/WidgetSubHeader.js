import React from 'react';
import styled from 'styled-components';
import { MiniLoader } from '../Motion';

const getTypeColor = ({ palette }, type) => {
  if (palette.semantic[type]) { return palette.semantic[type]; }
  if (type === 'primary') { return palette.accent.main; }
  if (type === 'secondary') { return palette.primary.main; }
  return 'rgb(241, 241, 240)';
};

const WidgetSubHeaderWrapper = styled.div`
  box-sizing: border-box;
  border-bottom: 1px solid #ececec;
  display: flex;
  height:40px;
  align-items:center;
  background-color: ${({ theme, type }) => getTypeColor(theme, type)};
`;

const WidgetHeaderTitle = styled.div`
  color: #2F2F32;
  font-weight: 400;
  font-size: 15px;
  font-family: \'Fira Sans\', sans-serif;
  padding-left:12px;
  padding-right:12px;
  color: ${({ theme, type }) => (type ? '#fff' : theme.palette.darkGrey)};
`;
const WidgetRest = styled.div`
  flex:1;
  height:100%;
  position:relative;
  display: flex;
  align-items:center;
`;

const MenuWrapper = styled.div`
  flex:1;
  display: flex;
  height:100%;
  justify-content: flex-end;
  align-items:center;
  padding-right:12px;
`;


const WidgetSubHeader = ({ type, title, isLoading, menu }) => (
  <WidgetSubHeaderWrapper type={type}>
    <WidgetHeaderTitle type={type}>{title}</WidgetHeaderTitle>
    <WidgetRest>
      <div>
        { isLoading &&
        (

          <MiniLoader />
        )
        }
      </div>
      {
        menu &&
        <MenuWrapper>
          {menu}
        </MenuWrapper>
      }
    </WidgetRest>
  </WidgetSubHeaderWrapper>
);

export default WidgetSubHeader;
