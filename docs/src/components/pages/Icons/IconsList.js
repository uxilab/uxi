import React from 'react';
import * as Icons from 'uxi/Icons';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    margin: '1.5em',
    alignItems: 'flex-start',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: '8px',
  },
  icon: {
    width: '40px',
  },
};

const IconsList = () => {
  const mappedKeys = Object.keys(Icons);

  return (
    <div style={styles.container} >
      {
        mappedKeys.map((x, i) => {
          const Element = Icons[x] || <div />;
          return (
            <div id={x} key={i} style={styles.item} >
              <div style={styles.icon}><Element /></div>
              {x}
            </div>
          );
        })
      }
    </div>
  );
};

export default IconsList;
