import React from 'react';
import styled from 'styled-components';
import BETALookUp from '../internal/BETALookup';
import ListWithNavigation from './ListWithNavigation';

const InputUI = styled.input`
  ${({ isFullWidth }) => (isFullWidth ? 'width: 100%;' : '')}
`;


const BETAAutoComplete = ({
  onChange,
  defaultValue,
  value,
  children,
  isFullWidth,
  style = {},
  Input,
  placeholder,
  onSubmit,
  inertMain,
  ...rest
}) => {
  const InputComponent = Input || InputUI;
  return (
    <BETALookUp
      isFullWidth
      inertMain={inertMain}
      main={
        <InputComponent
          {...rest}
          defaultValue={defaultValue}
          isFullWidth={isFullWidth}
          value={value}
          style={style}
          placeholder={placeholder}
          onChange={(e) => { onChange(e, e.target.value); }}
          onKeyPress={(e) => {
            if (e.key === 'Enter') {
              onSubmit(e, e.target.value);
            }
          }}
        />
      }
    >
      <ListWithNavigation
        onChange={onChange}
        onSubmit={onSubmit}
      >
        {children}
      </ListWithNavigation>
    </BETALookUp>
  );
};

export default BETAAutoComplete;
