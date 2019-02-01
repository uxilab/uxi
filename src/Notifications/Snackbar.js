import React, { Component } from 'react';
import CompactDrawer from '../Drawer/CompactDrawer';
import Flex from '../Layout/Flex';
import PropsMapperContainerQueries from '../internal/PropsMapperContainerQueries';

class Snackbar extends Component { // eslint-disable-line
  componentDidUpdate(prevProps) {
    // if ()
  }

  render() {
    const {
      children,
    } = this.props;

    return (
      <CompactDrawer inAttr={!!React.Children.count(children)}>
        {/* <PropsMapperContainerQueries
          inline
          rules={[{
            minHeight: 0,
            mapper: ({ containerHeight }) => {
              console.log('containerHeight', containerHeight);
              return {
                style: {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  transition: 'all 450ms ',
                  maxHeight: containerHeight + 80,
                  height: containerHeight + 80,
                  overflow: 'hidden',
                },
              };
            },
            // mapper: ({ ...a }) => ({ ...a }),
          }]}
        > */}
        <Flex style={{ flexDirection: 'column', maxHeight: '30vh' }}>
          {children}
        </Flex>
        {/* </PropsMapperContainerQueries> */}
      </CompactDrawer>
    );
  }
}

Snackbar.displayName = 'Snackbar';

export default Snackbar;
