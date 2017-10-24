import React, { PropTypes } from 'react';
import Radium, { Style } from 'radium';
import IconStyle from './Icon.style';
import { getAppropriateIcon } from './getAppropriateIcon';

const getWrapperStyles = ({ size }) => ({
  ...IconStyle.wrapper,
  ...IconStyle.sizes[size],
});

const getFontStyles = size => IconStyle.fontSizes[size];

export const Icon = (props) => {
  const { size, style = {}, icon } = props;

  // const icon = entityConfig && 'icon' in entityConfig ? entityConfig.icon : '';
  let IconMarkup = null;
  if (icon.match(/^<i/)) {
    IconMarkup = [
      <Style
        key="style"
        scopeSelector=".uxi_icon"
        rules={IconStyle.styleIcon}
      />,
      <div
        key="markup"
        style={{
          ...getFontStyles(size),
          ...IconStyle.styleIconWrapper,
        }}
        dangerouslySetInnerHTML={{ __html: icon }}
      />,
    ];
  } else if (icon === '') {
    IconMarkup = '';
  } else {
    const Element = getAppropriateIcon(icon);
    IconMarkup = <Element {...props} />;
  }
  return (
    <div style={{ ...getWrapperStyles(props), ...style }} >
      <div style={{ ...IconStyle.icon }} >
        {IconMarkup}
      </div>
    </div>
  );
};

Icon.propTypes = {
  size: PropTypes.oneOf(['M', 'S', 'L']),
  style: PropTypes.object,
  icon: PropTypes.string,
};

Icon.defaultProps = {
  size: 'M',
  style: {},
  icon: 'Default',
};

export default Radium(Icon);
