import React from 'react';
import ListWithNavigation from './ListWithNavigation';
import LookUp from 'uxi/internal/Lookup';
import styled from 'styled-components';

const InputUI = styled.input`
  ${({ isFullWidth }) => isFullWidth ? 'width: 100%;' : ''}
`;

const AutoComplete = ({
  onChange,
  defaultValue,
  value,
  items = [],
  children,
  isFullWidth,
  style = {},
  Input,
  placeholder,
}) => {
  const InputComponent = Input ? Input : InputUI
  return (
    <LookUp
      isFullWidth
      main={
        <InputComponent
          defaultValue={defaultValue}
          isFullWidth={isFullWidth}
          value={value}
          style={style}
          placeholder={placeholder}
          onChange={(e) => { onChange(e, e.target.value); }}
        />
      }
  >
    <ListWithNavigation onChange={(e, value) => { onChange(e, value); }}>
      {children}
    </ListWithNavigation>
  </LookUp>
  );
};

export default AutoComplete;
