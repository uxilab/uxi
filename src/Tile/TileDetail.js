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
  flex-flow: row wrap;
`;

const TileImageWrapper = styled.div`
  padding-right:15px;
`;

const TileContentWrapper = styled.div`
  flex:1;
`;

const TileExtra = styled.div`
  max-width:658px;
`;

const TileContentWrapperTitle = styled.div`
  font-size:16px;
  padding-bottom:5px;
`;

const TileDetail = ({ title, imageUrl, icon, extra, children, style }) => {
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
    <TileDetailWrapper className="uxi-tile-detail" style={style}>
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
      {
        extra &&
        (
          <TileExtra className="uxi-titleDetail-extra">
            {extra}
          </TileExtra>
        )
      }
    </TileDetailWrapper>
  );
};

export default TileDetail;
