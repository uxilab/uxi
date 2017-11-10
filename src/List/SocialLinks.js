import React from 'react';
import PropTypes from 'prop-types';
import getAppropriateIcon from '../Icons/getAppropriateIcon';

const styles = {
  list: {
    display: 'flex',
  },
  listItem: {
  },
};

const getListStyles = horizontal => ({
  ...styles.list,
  flexDirection: horizontal ? 'row' : 'column',
});

const getListItemStyles = horizontal => ({
  ...styles.listItem,
  padding: horizontal ? '2px' : 0,
});

const SocialLinks = ({ socialLinks, horizontal, style }) => (
  <ul style={{ ...getListStyles(horizontal), ...style }}>
    {socialLinks.map(({ name, url }) => (
      <li key={name} style={getListItemStyles(horizontal)}>
        <a href={url}>
          {getAppropriateIcon(name)() }
        </a>
      </li>
    ))}
  </ul>
);

SocialLinks.propTypes = {
  socialLinks: PropTypes.array,
  horizontal: PropTypes.bool,
  style: PropTypes.object,
};

SocialLinks.defaultProps = {
  socialLinks: [],
  horizontal: false,
  style: {},
};

export default SocialLinks;