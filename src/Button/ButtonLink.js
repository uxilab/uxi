import React from 'react';
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

const ButtonLink = ({ onClick, icon, text, message, children, style, isFullWidth }) => {
  const content = icon ? (
    <AvatarWithName
      imgSize={16}
      icon={icon}
      name={text}
      style={{
        ...(isFullWidth ? { justifyContent: 'center' } : {}),
      }}
    />
  ) : (
    <div style={{ textAlign: isFullWidth ? 'center' : 'left' }}>{text || message || children}</div>
  );

  return (
    <ButtonLinkWrapper
      style={style}
      onClick={(e) => { e.preventDefault(); onClick(e); }}
      isFullWidth={isFullWidth}
    >
      {content}
    </ButtonLinkWrapper>
  );
};

export default ButtonLink;
