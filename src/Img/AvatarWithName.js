import React from 'react';
// eslint-disable-next-line import/no-named-as-default
import getAppropriateIcon from '../Icons/getAppropriateIcon';
import Img from './Img';
import { TextEllipsis } from '../Text';

const styles = {
  wrapper: {
    maxWidth: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  nameWrapper: {
    marginLeft: '6px',
    overflow: 'hidden',
  },
};

const AvatarWithName = ({
  src,
  icon,
  name,
  imgSize,
  isSquare,
  onClick,
  contain,
  style,
  nameStyle,
  inverse,
}) => {
  // eslint-disable-next-line no-nested-ternary
  const imgContent = src
    ? <Img contain={contain} async width={imgSize || '26'} style={{ borderRadius: (isSquare ? 0 : '50%') }} src={src} />
    : (icon
      ? React.cloneElement(icon, { size: imgSize || '26px' })
      : React.createElement(getAppropriateIcon('Circleduser'), { size: imgSize || '26px' })
    );

  return (
    <div
      style={{
        ...styles.wrapper,
        ...(inverse ? { flexDirection: 'row-reverse' } : {}),
        ...style,
      }}
      onClick={onClick || null}
    >
      { imgContent }
      <div
        style={{
          ...styles.nameWrapper,
          ...(inverse ? { marginLeft: 0, marginRight: '6px' } : {}),
          ...nameStyle,
        }}
      >
        <TextEllipsis>
          {name}
        </TextEllipsis>
      </div>
    </div>
  );
};

AvatarWithName.displayName = 'AvatarWithName';

export default AvatarWithName;
