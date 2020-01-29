import React from 'react';
import styled from 'styled-components';
import Img from '../Img';
import { flexCSSString, ContentWithExtra } from '../Layout';
import { PropsMapperContainerQueries } from '../internal/PropsMapperContainerQueries';
import {
  Circle,
} from '../Icons';

const ExtendedFlex = styled.div`
  ${flexCSSString};
  justify-content: flex-start;
  align-items: flex-start;
  flex-flow: row wrap;
  & > *:first-child {}
  & > *:nth-child(2) {}
`;

const SmartTileDetailWrapper = styled.div`
  box-sizing: border-box;
  display:flex;
  border: 1px solid #ccc;
  padding: 16px;
  position:relative;
  flex-flow: row wrap;
  & + & {
    border-top: none;
  }
`;

const TileImageWrapper = styled.div`
  padding-right:15px;
`;
const TileImageInnerWrapper = styled.div`
  width: 42px;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ roundImage }) => (roundImage ? 'overflow: hidden; border-radius: 21px;' : '')};
`;

const TileContentWrapper = styled.div`
  flex:1;
  overflow: hidden;
  margin-right: 16px;
`;

const TileContentWrapperTitle = styled.div`
  font-size: 16px;
  padding-bottom: 5px;
`;

const SmartTileDetail = ({
  title,
  imageUrl,
  icon,
  extra,
  children,
  style,
  roundImage,
}) => {
  let imageContent;

  if (imageUrl) {
    imageContent = (
      <Img style={{ width: '42px', height: '42px' }} alt={title} src={imageUrl} />
    );
  } else if (icon) {
    imageContent = React.cloneElement(icon, { size: '32px' });
  } else {
    imageContent = <Circle size="42px" />;
  }

  const extraContent = extra || null;
  //   (extra &&
  //   <TileExtra className="uxi-titleDetail-extra">
  //     {extra}
  //   </TileExtra>
  // ) || null;


  return (
    <SmartTileDetailWrapper className="uxi-tile-detail" style={style}>
      <PropsMapperContainerQueries
        style={{
          minWidth: '100%',
        }}
        rules={[{
          minWidth: 1,
          mapper: () => ({
            extraMinWidth: '100%',
            contentMinWidth: '100%',
          }),
        }, {
          minWidth: (280 + 32 + 190),
          mapper: () => ({
            extraStyle: {
              maxWidth: '50%',
              minWidth: '280px',
            },
            contentStyle: {
              maxWidth: '50%',
              minWidth: '190px',
            },
          }),
        },
        ]}
      >
        <ContentWithExtra
          extra={extraContent}
          extraPosition="after"
          // extraMinWidth={extraContent ? '280px' : 0}
          // TODO add breakpoint for this to be larger on wider srceen
          // cannot hard code min-width more than 320 EVER! -df
          // use propsMapperMediaQuery
          // contentMinWidth={'280px'}
        >
          <ExtendedFlex>
            <TileImageWrapper>
              <TileImageInnerWrapper roundImage={roundImage}>
                {imageContent}
              </TileImageInnerWrapper>
            </TileImageWrapper>
            <TileContentWrapper>
              <TileContentWrapperTitle>
                {title}
              </TileContentWrapperTitle>
              <div>
                {children}
              </div>
            </TileContentWrapper>
          </ExtendedFlex>
        </ContentWithExtra>
      </PropsMapperContainerQueries>
    </SmartTileDetailWrapper>
  );

/*
  return (
    <SmartTileDetailWrapper className="uxi-tile-detail" style={style}>
      <TileImageWrapper>
        <TileImageInnerWrapper>
           {imageContent}
         </TileImageInnerWrapper>
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
    </SmartTileDetailWrapper>
  );
  */
};

export default SmartTileDetail;
