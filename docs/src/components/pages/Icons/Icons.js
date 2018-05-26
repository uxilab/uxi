import React from 'react';
import { Spacer } from 'uxi/Base';
import * as Icons from 'uxi/Icons';
import {
  Text,
} from 'uxi/Classic';

const styles = {
  container: {
    width:'100%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  item: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    boxSizing:'border-box',
    width:'25%',
  },
  icon: {
    width: '32px',
  },
};

const IconsExample = () => {
  const mappedKeys = Object.keys(Icons);

  return (
    <div style={styles.container} >
      {
        mappedKeys.sort((a,b) => {
          if(a < b) {
            return -1;
          }
          if(a > b) {
            return 1;
          }

          return 0;
        }).map((x, i) => {
          const Element = Icons[x] || <div />;
          return (
            <Spacer padding="s" key={i} style={styles.item} >
              <div style={styles.icon}><Element /></div>
              <Text size="s">{x}</Text>
            </Spacer>
          );
        })
      }
    </div>
  );
};

export default IconsExample;
