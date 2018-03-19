import React from 'react';
import styled from 'styled-components';
import Img from 'uxi/Img';
import {
  Circle,
} from 'uxi/Icons';

const TileDetailWrapper = styled.div`
  display:flex;
  border: 1px solid #ccc;
  padding:15px;
  position:relative;
`;

const TileImageWrapper = styled.div`
  padding-right:15px;
`;

const TileContentWrapper = styled.div`
  flex:1;
  min-width:700px;
`;

const TileExtra = styled.div`
  min-width: 200px
  max-width:700px;
`;

const TileContentWrapperTitle = styled.div`
  font-size:16px;
  padding-bottom:5px;
`;

const TileDetail = ({ title, imageUrl, icon, extra, children }) => {
  let imageContent;

  if (imageUrl) {
    imageContent = (
      <Img style={{ width: '48px', height: '48px' }} alt={title} src={imageUrl} />
    );
  } else if (icon) {
    imageContent = React.cloneElement(icon, { size: '48px' });
  } else {
    imageContent = <Circle size="48px" />;
  }


  return (
    <TileDetailWrapper className="uxi-tile-detail">
      <TileImageWrapper>
        {imageContent}
      </TileImageWrapper>
      <TileContentWrapper>
        <TileContentWrapperTitle>
          {title}
        </TileContentWrapperTitle>
        <div>
          {children}
        </div>
      </TileContentWrapper>
      <TileExtra className="uxi-titleDetail-extra">
        {extra}
      </TileExtra>
    </TileDetailWrapper>
  );
};

export default TileDetail;
