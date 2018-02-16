import React from 'react';
import styled from 'styled-components';
import { MiniLoader } from '../Motion';
import { Flex } from '../Layout';

const WidgetHeaderWrapper = styled.div`
  box-sizing: border-box;
  border-bottom: 1px solid #ececec;
  display: flex;
  height:50px;
  align-items:center;
`;

const WidgetHeaderTitle = styled.div`
  color: #2F2F32;
  font-weight: 600;
  font-size: 16px;
  font-family: \'Fira Sans\', sans-serif;
  padding-left:12px;
  padding-right:12px;
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

const WidgetHeader = ({
  title,
  isLoading,
  menu,
}) => (
  <WidgetHeaderWrapper>
    <WidgetHeaderTitle>
      {title}
    </WidgetHeaderTitle>
    <WidgetRest>
      <Flex>
        { isLoading &&
        (

          <MiniLoader />
        )
        }
      </Flex>
      {
        menu &&
        <MenuWrapper>
          {menu}
        </MenuWrapper>
      }
    </WidgetRest>
  </WidgetHeaderWrapper>
);

export default WidgetHeader;
