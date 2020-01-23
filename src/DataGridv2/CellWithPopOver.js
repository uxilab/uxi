import React from 'react';
import styled from 'styled-components';
import DropDown from '../DropDownv2';

const CellDetail = styled.div`
  display: flex;
  background: white;
  width: 100%;
  height: 100%;
  border-radius: 0 0 3px 3px;
  box-shadow:
    0 1px 20px 0px hsla(0, 0%, 0%, 0.29),
    0 1px 5px 0px hsla(0, 0%, 0%, 0.18)
  ;
}`;

const CellContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  cursor: normal;

  &:before, &:after {
    transition: ${({ theme: { transition } }) => transition.defaultAll};
  }
  &:before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    border: 1px solid;
    border-color: ${({ theme }) => theme.palette.accent.light};
    border-color: transparent;
  }
  &:after {
    content: '▾';
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    width: 32px;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: .35;
    transform: translateY(60px);
  }

  &:hover, &:active, &:focus {
    &:before {
      border-color: ${({ theme }) => theme.palette.accent.light};
      transition: ${({ theme: { transition } }) => transition.defaultAll};
    }
    &:after {
      transform: translateY(16px);
      transition: ${({ theme: { transition } }) => transition.defaultAll};
    }
  }
`;

const CellWithPopOver = (props) => {
  const {
    cellDetail,
    cellContent,
  } = props;

  return (
    <DropDown
      style={{ display: 'flex' }}
      isFullWidth
      box={<CellDetail>{cellDetail}</CellDetail>}
      trigger={<CellContent>{cellContent}</CellContent>}
    />
  );
};

export default CellWithPopOver;
