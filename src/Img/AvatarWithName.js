import React from 'react';
// eslint-disable-next-line import/no-named-as-default
import getAppropriateIcon from '../Icons/getAppropriateIcon';
import Img from './Img';

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  nameWrapper: {
    marginLeft: '6px',
  },
};

const AvatarWithName = ({ src, icon, name, imgSize, isSquare, onClick }) => {
  // eslint-disable-next-line no-nested-ternary
  const imgContent = src
    ? <Img width={imgSize || '26px'} style={{ borderRadius: (isSquare ? 0 : '50%'), minWidth: imgSize || '26px' }} src={src} />
    : (icon
      ? React.cloneElement(icon, { size: imgSize || '26px' })
      : React.createElement(getAppropriateIcon('Circleduser'), { size: imgSize || '26px' })
    );

  return (
    <div style={styles.wrapper} onClick={onClick || null}>
      { imgContent }
      <div style={styles.nameWrapper}>
        {name}
      </div>
    </div>
  );
};

AvatarWithName.displayName = 'AvatarWithName';

export default AvatarWithName;
