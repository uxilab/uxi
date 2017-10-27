import React from 'react';

const styles = {
  wrapper: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  header: {},
  footer: {},
  main: {},
  item: {
    flexGrow: 9,
  },
};
/**
 * This comp takes 3 children and make a simple header-content-footer layout
 */
const AppLayout = ({ children }) => (
  <div style={styles.wrapper} >
    {
      React.Children.map(children, (child, index) => {
        React.cloneElement(child, {
          // doSomething: this.doSomething,
        });

        const appliedStyles = {
          ...styles.item,
          flexGrow: (index === 1) ? 99 : 1,
        };

        return (
          <div style={appliedStyles}>{child}</div>
        );
      })
    }
  </div>
);

export default AppLayout;
