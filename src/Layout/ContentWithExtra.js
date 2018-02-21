import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContentWithExtraUI = styled.div`
  display: flex;
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  flex-flow: row wrap;

  & > * {
    flex-grow: 1;
    flex-shrink: 0;
  }
`;

const ContentUI = styled.div`
  flex-grow: 99;
  max-width: 100%;
`;

const ExtraUI = styled.div`
  ${({ extraMinWidth }) => extraMinWidth ? `min-width: ${extraMinWidth};` : ''}
`;

const ContentWithExtra = props => {
  const {
    extraPosition,
    extra,
    children,
    extraMinWidth,
  } = props;

  // default to before
  const finalChildren = extraPosition === 'after'
    ? [
        <ContentUI>{children}</ContentUI>,
        <ExtraUI extraMinWidth={extraMinWidth}>{extra}</ExtraUI>
      ]
    : [
        <ExtraUI extraMinWidth={extraMinWidth}>{extra}</ExtraUI>,
        <ContentUI>{children}</ContentUI>
      ];

  return (
    <ContentWithExtraUI extraPosition={extraPosition}>
      {finalChildren}
    </ContentWithExtraUI>
  );
};

ContentWithExtra.displayName = 'ContentWithExtra';

ContentWithExtra.defaultProps = {
  extraPosition: "before",
  extraMinWidth: '200px'
}

ContentWithExtra.propTypes = {
  extraPosition: PropTypes.oneOf([
    'before', 'after'
  ])
}

export default ContentWithExtra;
