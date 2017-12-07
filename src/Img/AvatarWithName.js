import React from 'react';
import Img from './Img';

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  nameWrapper: {
    marginLeft: '6px'
  }
};

const AvatarWithName = ({ src, icon, name, imgSize, isSquare }) => {

  const imgContent = src
    ? <Img width={imgSize || "34px"} style={{ borderRadius: (isSquare ? 0 : '50%') }} src={src} />
    : React.cloneElement(icon, {
      size: imgSize || "34px",
    });

  return (
    <div style={styles.wrapper}>
      { imgContent }
      <div style={styles.nameWrapper}>
        {name}
      </div>
    </div>
  )
}

export default AvatarWithName;
