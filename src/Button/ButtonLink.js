import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import AvatarWithName from '../Img/AvatarWithName';

const getTypeColor = ({ palette }, type) => {
  if (!type) { return palette.accent.main; }
  if (palette.semantic[type]) { return palette.semantic[type]; }
  return '#fff';
};

const ButtonLinkWrapper = styled.a`
  cursor: pointer;
  color: ${({ theme, type }) => getTypeColor(theme, type)};
  display: inline-block;
  ${({ isFullWidth }) => (isFullWidth ? 'width: 100%' : '')};
  &:hover {
    text-decoration: underline;
  }
  svg {
    color: ${({ theme, type }) => getTypeColor(theme, type)};
    fill: ${({ theme, type }) => getTypeColor(theme, type)};
  }
  opacity: ${({ disabled }) => (disabled ? '0.4' : '1')};
`;

const ButtonLink = ({
  onClick,
  icon,
  text,
  message,
  children,
  style,
  isFullWidth,
  iconAfter,
  disabled,
  title,
}) => {
  const content = icon ? (
    <AvatarWithName
      inverse={iconAfter}
      imgSize={16}
      icon={icon}
      name={text || message || children}
      style={{
        ...(isFullWidth ? { justifyContent: 'center' } : {}),
        // ...(iconAfter ? { flexDirection: 'row-reverse' } : {}),
      }}
    />
  ) : (
    <div style={{ textAlign: isFullWidth ? 'center' : 'left' }}>{text || message || children}</div>
  );

  return (
    <ButtonLinkWrapper
      style={style}
      onClick={(e) => { e.preventDefault(); if (!disabled) { onClick(e); } }}
      isFullWidth={isFullWidth}
      disabled={disabled}
      title={title}
    >
      {content}
    </ButtonLinkWrapper>
  );
};

ButtonLink.displayName = 'ButtonLink';

ButtonLink.defaultProps = {
  onClick: () => {},
  icon: null,
  text: '',
  message: '',
  children: null,
  style: {},
  isFullWidth: false,
  iconAfter: undefined,
  disabled: false,
  title: undefined,
};

ButtonLink.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.node,
  text: PropTypes.any,
  message: PropTypes.any,
  children: PropTypes.any,
  style: PropTypes.object,
  isFullWidth: PropTypes.bool,
  iconAfter: PropTypes.bool,
  disabled: PropTypes.bool,
  title: PropTypes.string,
};

export default ButtonLink;
