// @flow
import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import useOnClickOutside from '../hooks/useClickOutside';
import useOnEscKeyDown from '../hooks/useOnEscKeyDown';
import UnstyledButton from '../Button/UnstyledButton1';
// import theme from '../../theme';


type Anchor = 'center' | 'left' | 'right';

type Props = {
  style?: CSSStyleDeclaration,
  menuStyle?: CSSStyleDeclaration,
  onChange?: Function,
  defaultOpen?: bool,
  open?: bool,
  inline?: bool,
  anchor?: Anchor,
  trigger: React.Node,
  box: React.Node,

}

const getAnchorStyles = (anchor: Anchor) => {
  if (anchor === 'left') {
    return css` left: 0; `;
  }
  if (anchor === 'right') {
    return css` right: 0; `;
  }
  if (anchor === 'center') {
    return css`
      transform: translateX(-50%);
      left: 50%;
    `;
  }
  return '';
};

const Checkbox = styled.input.attrs(() => ({ type: 'checkbox' }))`
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  cursor: pointer;
`;

// Checkbox.defaultProps = { theme };

const MenuWrapper = styled.div`
  z-index: 1;
  width: 100%;
  ${({ anchor, inline }) => (inline ? '' : getAnchorStyles(anchor))};
  min-width: 180px;
  position: ${({ inline }) => (inline ? 'relative' : 'absolute')};
  top: 100%;
`;
// MenuWrapper.defaultProps = { theme };


const Wrapper = styled.div`
  ${({ isFullWidth }) => css`width: 100%; height: 100%;`};
  position: relative;
  ${MenuWrapper} {
    ${({ isOpen }) => css`
      display: ${isOpen ? 'block' : 'none'};
      visibility: ${isOpen ? 'visible' : 'hidden'};
    `};
  }
`;
// Wrapper.defaultProps = { theme };

const DropDown = (props: Props) => {
  const {
    trigger,
    box,
    // modal,
    open,
    defaultOpen,
    // style,
    onChange,
    anchor,
    inline,
    style,
    menuStyle,
    light,
    isFullWidth,
  } = props;
  const isControlled = open !== undefined;

  const [visibility, setVisibility] = useState(defaultOpen);

  const isOpen = isControlled ? open : visibility;

  const ref = useRef();

  useOnClickOutside(ref, (e) => {
    if (isOpen) {
      if (!isControlled) {
        setVisibility(false);
      }
      onChange(false, e);
    }
  });

  useOnEscKeyDown(ref, (e) => {
    if (isOpen) {
      if (!isControlled) {
        setVisibility(false);
      }
      onChange(false, e);
    }
  });

  const onChangeHandler = () => {
    const newVal = !isOpen;
    if (!isControlled) {
      setVisibility(newVal);
    }
    onChange(newVal);
  };

  return (
    <Wrapper className="uxi_DropDownWrapper" style={{ ...style }} ref={ref} light={light} isFullWidth={isFullWidth} isOpen={isOpen} >
      {/* <Checkbox
        onChange={onChangeHandler}
        checked={isOpen}
        value={'true'}
      /> */}
      <UnstyledButton
        isFullWidth={isFullWidth}
        style={{ height: '100%', width: '100%' }}
        onClick={() => {
          if (isControlled) {
            return onChangeHandler(!isOpen);
          }
          return setVisibility(!isOpen);
        }}
      >
        {trigger}
      </UnstyledButton>
      <MenuWrapper
        inline={inline}
        menuStyle={menuStyle}
        anchor={anchor}
      >
        {box}
      </MenuWrapper>

    </Wrapper>
  );
};

DropDown.propTypes = {
  inline: PropTypes.bool,
  style: PropTypes.object,
  menuStyle: PropTypes.object,
  onChange: PropTypes.func,
  open: PropTypes.bool,
  defaultOpen: PropTypes.bool,
  anchor: PropTypes.oneOf(['center', 'left', 'right']),
  trigger: PropTypes.any,
  box: PropTypes.any,
  light: PropTypes.bool,
};

/* eslint-disable no-unused-vars */
DropDown.defaultProps = {
  inline: false,
  style: {},
  menuStyle: {},
  onChange: (isOpen: bool, eventOrUndefined: Event) => {},
  open: undefined,
  defaultOpen: undefined,
  anchor: 'center', // one of 'center', 'left', 'right'
  trigger: '•••',
  box: 'Pass some content in the `box` props of DropDown',
  light: false,
};


export default DropDown;
