import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ContentWithExtraUI = styled.div`
  display: flex;
  min-height: 100%;
  width: 100%;
  overflow: hidden;
  flex-flow: ${({ isAfter }) => (isAfter ? 'row-reverse wrap' : 'row wrap')};
`;

const ContentUI = styled.div`
  flex:1;
  max-width: 100%;
`;

const ExtraUI = styled.div`
  ${({ extraMinWidth }) => (extraMinWidth ? `min-width: ${extraMinWidth};` : '')}
`;

const ContentWithExtra = (props) => {
  const {
    extraPosition,
    extra,
    children,
    extraMinWidth,
  } = props;

  return (
    <ContentWithExtraUI isAfter={extraPosition === 'after'} extraPosition={extraPosition}>
      <ExtraUI extraMinWidth={extraMinWidth}>{extra}</ExtraUI>
      <ContentUI>{children}</ContentUI>
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
