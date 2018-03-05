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

const AvatarWithNameAndExtra = ({ src, icon, name, extra, imgSize, isSquare, onClick }) => {
  // eslint-disable-next-line no-nested-ternary
  const imgContent = src
    ? <Img async width={imgSize || '26'} style={{ borderRadius: (isSquare ? 0 : '50%') }} src={src} />
    : (icon
      ? React.cloneElement(icon, { size: icon.props.size || imgSize || '26px' })
      : React.createElement(getAppropriateIcon('Circleduser'), { size: imgSize || '26px' })
    );

  return (
    <div style={styles.wrapper} onClick={onClick || null}>
      { imgContent }
      <div style={styles.nameWrapper}>
        <div style={{ fontSize: '16px'}}>{name}</div>
        <div style={{ fontSize: '11px' }}>{extra}</div>
      </div>
    </div>
  );
};

AvatarWithNameAndExtra.displayName = 'AvatarWithNameAndExtra';

export default AvatarWithNameAndExtra;
