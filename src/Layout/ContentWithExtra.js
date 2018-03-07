import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContentWithExtraUI = styled.div`
  display: flex;
  min-height: 100%;
  width: 100%;
  overflow: hidden;
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
  ${({ extraMinWidth }) => (extraMinWidth ? `min-width: ${extraMinWidth};` : '')}
`;

const ContentWithExtra = (props) => {
  const {
    extraPosition,
    extra,
    children,
    extraMinWidth,
    contentMinWidth,
  } = props;

  const contentItems = [
    <ExtraUI key="extra" extraMinWidth={extraMinWidth}>{extra}</ExtraUI>,
    <ContentUI key="content" contentMinWidth={contentMinWidth}>{children}</ContentUI>
  ]

  return (
    <ContentWithExtraUI isAfter={extraPosition === 'after'} extraPosition={extraPosition}>
      { extraPosition === 'after' ? contentItems.reverse() : contentItems }
    </ContentWithExtraUI>
  );
};

ContentWithExtra.displayName = 'ContentWithExtra';

ContentWithExtra.defaultProps = {
  extraPosition: 'before',
  extraMinWidth: '200px',
};

ContentWithExtra.propTypes = {
  extraPosition: PropTypes.oneOf([
    'before', 'after',
  ]),
};

export default ContentWithExtra;
