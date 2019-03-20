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
`;

const ButtonLinkWrapperInert = ButtonLinkWrapper.withComponent('div');

const ButtonLink = ({ onClick,
  icon,
  text,
  message,
  children,
  style,
  isFullWidth,
  iconAfter,
  inert,
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

  const WrapperComp = inert
    ? ButtonLinkWrapperInert
    : ButtonLinkWrapper;

  return (
    <WrapperComp
      style={style}
      onClick={(e) => { onClick(e); }}
      isFullWidth={isFullWidth}
    >
      {content}
    </WrapperComp>
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
};

ButtonLink.propTypes = {
  onClick: PropTypes.func,
  icon: PropTypes.node,
  text: PropTypes.any,
  message: PropTypes.any,
  children: PropTypes.any,
  style: PropTypes.object,
  isFullWidth: PropTypes.bool,
};

export default ButtonLink;
