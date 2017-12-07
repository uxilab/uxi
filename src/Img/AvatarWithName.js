import React from 'react';
import Img from './Img';

const styles = {
  wrapper: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
};

const AvatarWithName = ({ src, name, imgSize, isSquare }) => (
  <div style={styles.wrapper}>
    <Img width="48px" style={{ borderRadius: (isSquare ? 0 : '50%') }} src={src} />
    <div>
      {name}
    </div>
  </div>
);

export default AvatarWithName;
