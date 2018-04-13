import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { getAppropriateIcon } from '../Icons/getAppropriateIcon';

const SocialUL = styled.ul`
  display: flex;
  flex-direction: ${({ horizontal }) => (horizontal ? 'row' : 'column')};
`;

const SocialLI = styled.li`
  padding: ${({ horizontal }) => (horizontal ? '2px' : 0)};
  margin-left: ${({ horizontal, spacing }) => ((horizontal && spacing) ? spacing : 0)};
  margin-top: ${({ horizontal, spacing }) => ((!horizontal && spacing) ? spacing : 0)};
  &:first-child{
    margin-left:0;
    margin-top:0;
  }
  ${({ iconColor }) => (iconColor ?
    `svg { fill: ${iconColor}; }` : '')};
  &:hover svg {
    /* opacity: 0.9; */
    ${({ iconHoverColor }) => (iconHoverColor ? `fill: ${iconHoverColor};` : '')};
  }
`;


const SocialLinks = ({ socialLinks, horizontal, spacing, iconColor, iconHoverColor, style }) => (
  <SocialUL horizontal={horizontal} style={style}>
    {socialLinks.map(({ name, url }) => (
      <SocialLI horizontal={horizontal} iconColor={iconColor} iconHoverColor={iconHoverColor} spacing={spacing} key={name}>
        <a href={url}>
          {getAppropriateIcon(name)() }
        </a>
      </SocialLI>
    ))}
  </SocialUL>
);

SocialLinks.propTypes = {
  socialLinks: PropTypes.array,
  horizontal: PropTypes.bool,
  style: PropTypes.object,
  spacing: PropTypes.string,
  iconColor: PropTypes.string,
};

SocialLinks.defaultProps = {
  socialLinks: [],
  horizontal: false,
  style: {},
  spacing: '',
  iconColor: 0,
};

export default SocialLinks;
