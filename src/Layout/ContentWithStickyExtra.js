import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContentWithStickyExtraUI = styled.div`
  display: flex;
  min-height: 100%;
  width: 100%;
  overflow: visible;
  flex-flow: ${({ isAfter }) => (isAfter ? 'row wrap' : 'row wrap')};
`;

const ContentUI = styled.div`
  flex:1;
  /* max-width: 100%;
  width: 100%;
  min-width: ${({ contentMinWidth }) => contentMinWidth}; */
  min-width: 100%;
  min-width: ${({ contentMinWidth }) => contentMinWidth};
  max-width: 100%;

  width: auto;
  flex-grow: 99;
  flex-shrink: 0;
  /* @media (min-width: 1024px) {
    min-width: ${({ contentMinWidth }) => contentMinWidth};
  } */
`;

const ExtraUI = styled.div`
  min-width: 100%;
  width: ${({ contentMinWidth }) => contentMinWidth};
  max-width: 100%;
  flex-grow: 1;
  flex-shrink: 1;
  ${({ extraMinWidth }) => (extraMinWidth ? `min-width: ${extraMinWidth};` : '')};
`;
const ExtraStickyInnerWrapper = styled.div`
  ${({ top }) => `position: sticky; top: ${top}px`};
`;

class ContentWithStickyExtra extends Component {
  constructor(props) {
    super(props);

    this.state = {
      extraHeight: null,
      scrollingElem: null,
      listenerAttached: false,
      totalOffsetBackupScroll: 0,
    };

    this.storeExtraRef = this.storeExtraRef.bind(this);
    this.detachListeners = this.detachListeners.bind(this);
    this.attachListeners = this.attachListeners.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    this.attachListeners();
  }

  componentDidUpdate(previousProps) {
    if (previousProps.searchFilter !== this.props.searchFilter) {
      this.attachListeners();
      this.handleResize();
    }
  }

  componentWillUnmount() {
    this.detachListeners();
  }

  storeExtraRef(node) {
    console.log('§§ storeExtraRef');
    console.log('§§ storeExtraRef node', node);
    if (node) {
      if (!this.extraRef) {
        console.log('§§ storeExtraRef this.extraRef', this.extraRef);
        this.extraRef = node;
        const { height } = node.getBoundingClientRect();
        console.log('§§ storeExtraRef height', height);
        this.setState({ extraHeight: height });
        this.attachListeners();
      } else {
        this.extraRef = null;
      }
    }
  }

  attachListeners() {
    const { mainScrollingElementSelector } = this.props;

    const scrollingElem = document && document.querySelector(mainScrollingElementSelector);

    const windowHeight = window.innerHeight;

    if (!this.state.listenerAttached) {
      if (scrollingElem) {
        scrollingElem.addEventListener('scroll', this.handleScroll);
        window.addEventListener('resize', this.handleResize);
        this.setState({ scrollingElem, listenerAttached: true, windowHeight });
        if (this.extraRef) {
          const { height } = this.extraRef.getBoundingClientRect();
          this.setState({ extraHeight: height });
          console.log('extraHeight in attachListeners', height);
          console.log('this.extraRef in attachListeners', this.extraRef);
        }
      }
    } else {
      this.setState({ scrollingElem, windowHeight });
      if (this.extraRef) {
        const { height } = this.extraRef.getBoundingClientRect();
        this.setState({ extraHeight: height });
        console.log('extraHeight in attachListeners', height);
        console.log('this.extraRef in attachListeners', this.extraRef);
      }
    }
  }

  detachListeners() {
    if (this.state.scrollingElem) {
      if (this.state.attachListeners) {
        this.state.scrollingElem.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('resize', this.handleResize);
      }
    }
  }

  handleScroll() {
    console.log('§§ handleScroll');
    console.log('§§ this.extraRef', this.extraRef);
    if (this.extraRef) {
      const { height } = this.extraRef.getBoundingClientRect();

      console.log('§§ height', height);

      const extraHeight = height;
      // e.persist();
      // console.log(e);
      // console.log(e.originalEvent);

      const {
      // extraHeight,
        scrollingElem,
        windowHeight,
        previousScrollTop,
        totalOffsetBackupScroll: totalOffsetBackupScrollState,
      } = this.state;

      if (scrollingElem) {
        console.log('scrollingElem exists, doing things');
        const { scrollTop } = scrollingElem;

        const isScrollingBackUp = previousScrollTop >= scrollTop;

        console.log('previousScrollTop', previousScrollTop);
        console.log('scrollTop', scrollTop);
        console.log('isScrollingBackUp', isScrollingBackUp);

        let totalOffsetBackupScroll = scrollTop > 0
          ? totalOffsetBackupScrollState || 0
          : 0;

        let scrollingBackUpOffset = 0;
        if (isScrollingBackUp) {
        // scrolling (back) up
          scrollingBackUpOffset = previousScrollTop - scrollTop;
        } else {
          totalOffsetBackupScroll = 0;
        }

        totalOffsetBackupScroll += scrollingBackUpOffset;

        const headerHeight = 48;
        const paddingTotal = 16;

        const diff = isScrollingBackUp
          ? (
            (windowHeight - (extraHeight + headerHeight + paddingTotal)) + totalOffsetBackupScroll
          )
          : (
            (windowHeight - (extraHeight + headerHeight + paddingTotal)) + totalOffsetBackupScroll
          );
        console.log('windowHeight', windowHeight);
        console.log('extraHeight', extraHeight);
        console.log('diff', diff);
        console.log('scrollTop', scrollTop);
        console.log('previousScrollTop', previousScrollTop);
        console.log('totalOffsetBackupScroll', totalOffsetBackupScroll);

        if (scrollTop > diff) {
          this.setState({
            sticky: true,
            top: diff <= paddingTotal ? diff : paddingTotal,
            previousScrollTop: scrollTop,
            isScrollingBackUp,
            totalOffsetBackupScroll,
          });
          /* eslint-disable */
      } /* else if (scrollTop <= diff) {
        this.setState({
          sticky: false,
          top: paddingTotal,
          previousScrollTop: scrollTop,
          isScrollingBackUp,
          totalOffsetBackupScroll,
        });
      } */ else if (scrollTop === 0) {
      /* eslint-enable */
          this.setState({
            sticky: false,
            top: 0,
            previousScrollTop: scrollTop,
            isScrollingBackUp,
            totalOffsetBackupScroll,
          });
        }
      }
    }
  }

  handleResize() {
    console.log('§§ handleResize');
    console.log('§§ handleResize this.extraRef', this.extraRef);
    if (this.extraRef) {
      const { height } = this.extraRef.getBoundingClientRect();
      this.setState({ extraHeight: height });
      // console.log('extraHeight in handleResize', height);
      // console.log('this.extraRef in handleResize', this.extraRef);
      this.setState({ windowHeight: window.innerHeight });
    }
  }

  render() {
    const {
      extraPosition,
      extra,
      children,
      extraMinWidth,
      contentMinWidth,
      contentStyle,
      extraStyle,
      style,
      contentProps,
      extraProps,
    } = this.props;

    const { sticky, top } = this.state;


    const contentItems = [
      <ExtraUI
        key="extra"
        extraMinWidth={extraMinWidth}
        {...extraProps}
        style={{ ...extraStyle, ...(extraProps && extraProps.style ? extraProps.style : {}) }}

      >
        <ExtraStickyInnerWrapper
          sticky={sticky}
          top={top}
          innerRef={this.storeExtraRef}
          ref={this.storeExtraRef}
        >
          {extra}
        </ExtraStickyInnerWrapper>
      </ExtraUI>,
      <ContentUI
        key="content"
        contentMinWidth={contentMinWidth}
        {...contentProps}
        style={{
          ...contentStyle,
          ...(contentProps && contentProps.style ? contentProps.style : {}),
        }}
      >
        {children}
      </ContentUI>,
    ];

    return (
      <ContentWithStickyExtraUI
        isAfter={extraPosition === 'after'}
        extraPosition={extraPosition}
        style={style}
      >
        {extraPosition === 'after' ? contentItems.reverse() : contentItems}
      </ContentWithStickyExtraUI>
    );
  }
}

ContentWithStickyExtra.displayName = 'ContentWithStickyExtra';

ContentWithStickyExtra.defaultProps = {
  extraPosition: 'before',
  extraMinWidth: '200px',
  style: {},
  contentStyle: {},
  extraStyle: {},
  mainScrollingElementSelector: 'body',
};

ContentWithStickyExtra.propTypes = {
  extraPosition: PropTypes.oneOf([
    'before', 'after',
  ]),
};

export default ContentWithStickyExtra;
