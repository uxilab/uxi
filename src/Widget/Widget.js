import React, { Component } from 'react';
import styled from 'styled-components';
import WidgetHeader from './WidgetHeader';
import { Loader } from '../Motion';
import Flex from '../Layout/Flex'; // eslint-disable-line
import { Close, Fullscreen } from '../Icons';
import { UnstyledButton } from '../Button';

const WidgetWrapper = styled.div`
  border: 1px solid #ececec;
  box-sizing: border-box;
  background: white;
  ${({ isFullScreen }) => (isFullScreen ? `
    z-index: 9999999;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh !important;
  ` : '')}
`;

const WidgetContainer = styled.div`
  min-height: 150px;
  display: flex;
  flex-direction: column;
  & > *:first-child {
    flex-grow: 999;
  }

  height: ${({ fixedHeight }) => (fixedHeight ? `${fixedHeight}px` : 'none')};
  ${({ fixedHeight }) => (fixedHeight ? 'overflow-y: auto' : '')};
`;

const LoaderWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EmptyWrapper = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(241, 241, 240);
  display: flex;
  align-items: center;
  justify-content: center;
  min-height:80px;
`;

// empty
// SubHeader
class Widget extends Component {
  static componentName = 'Widget';

  static defaultProps = {
    containerStyle: {},
    children: <div />,
  };

  constructor(props) {
    super(props);

    this.state = {
      isFullScreen: false,
    };
  }

  createFixedHeightDataGrid(table) {
    const { fixedHeight } = this.props;

    return React.cloneElement(
      table,
      {
        fixedHeight,
        height: fixedHeight,
      },
    );
  }

  render() {
    const {
      children,
      title,
      isLoading,
      isLoadingMore,
      menu: menuProp,
      emptyText,
      fixedHeight,
      style: styleProp,
      headerStyles,
      containerStyle,
      allowFullScreen,
      renderMenu,
    } = this.props;

    const { isFullScreen } = this.state;

    let menu = menuProp;
    if (!menu && allowFullScreen) {
      menu = (
        <UnstyledButton
          style={{
            width: '50px',
            height: '50px',
            boxSizing: 'border-box',
            display: 'flex',
            justifyContent: 'center',
            color: 'grey',
          }}
          onClick={() => this.setState({ isFullScreen: !isFullScreen })}
        >
          {
            isFullScreen
              ? <Close />
              : <Fullscreen />
          }

        </UnstyledButton>
      );
    } else if (menu && allowFullScreen) {
      menu = (
        <Flex>
          {menu}
          <UnstyledButton
            style={{
              width: '50px',
              height: '50px',
              boxSizing: 'border-box',
              display: 'flex',
              justifyContent: 'center',
              color: 'grey',
            }}
            onClick={() => this.setState({ isFullScreen: !isFullScreen })}
          >
            {
              isFullScreen
                ? <Close />
                : <Fullscreen />
            }

          </UnstyledButton>
        </Flex>
      );
    } else if (renderMenu) {
      console.log('renderMenu', renderMenu);
      menu = renderMenu({
        isFullScreen: this.state.isFullScreen,
        goFullScreen: () => this.setState({ isFullScreen: true }),
        escapeFullScreen: () => this.setState({ isFullScreen: false }),
      });
    }

    let content;
    let hasFixedHeight = fixedHeight;

    if (!isLoading && !emptyText && children && hasFixedHeight) {
      React.Children.forEach(children, (child) => {
        if (!React.isValidElement(child)) return;

        const { componentName } = child.type;
        if (componentName === 'Table') {
          content = this.createFixedHeightDataGrid(child);
          hasFixedHeight = false;// reset and pass on to GRID;
        } else if (componentName === 'DataGrid') {
          content = this.createFixedHeightDataGrid(child);
          hasFixedHeight = false;// reset and pass on to GRID;
        } else {
          content = children;
        }
      });
    } else {
      content = children;
    }

    if (React.isValidElement(content)) {
      content = React.cloneElement(content, { isFullScreen });
    }

    return (
      <WidgetWrapper style={styleProp} isFullScreen={isFullScreen}>
        {
          title &&
          (
            <WidgetHeader
              style={headerStyles}
              title={title}
              isLoading={isLoadingMore}
              menu={menu}
            />
          )
        }
        <WidgetContainer
          fixedHeight={hasFixedHeight ? fixedHeight : ''}
          style={containerStyle}
        >
          { !isLoading && !emptyText && content}
          { isLoading && <LoaderWrapper><Loader /></LoaderWrapper>}
          { !isLoading && emptyText && <EmptyWrapper>{emptyText}</EmptyWrapper>}
        </WidgetContainer>
      </WidgetWrapper>
    );
  }
}

export default Widget;
