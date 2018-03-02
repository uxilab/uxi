import React from 'react';
import Button from 'uxi/Button';
import styled from 'styled-components';

const WrapperUI = styled.div`
  /* text-align: center; */
  margin: 8px 8px 16px 8px;
  background: white;
  max-width: 280px;
  min-width: 280px;
  width: 280px;
  /* border-radius: 3px;
  overflow: hidden; */
  /* box-shadow: 0 1px 6px 1px rgba(35, 35, 35, 0); */
  /* border: 1px solid #cecece; */

  @media (min-width: 1024px) {
    min-width: 280px;
    min-height: 330px;

    display: flex;
    flex-direction: column;
    & > *:last-child {
      flex-grow: 2 ;
    }
  }
`;
/*
const ImageUI = styled.div`
  height: 140px;
  overflow: hidden;
  position: relative;
  background: url(${({  src }) => src}) no-repeat;
  background-position: center;
  background-size: cover;
  img {
    width: 100%;
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`;

const Shadow = styled.div`
  position: absolute;
  top: auto;
  left: 0;
  bottom: 0;
  right: 0;
  height: 24px;
  background: linear-gradient(
    to top,
    rgba(35, 35, 35, 0.2),
    rgba(35, 35, 35, 0)
  );
`;

const DescriptionUI = styled.div`
  padding: 16px;
  p {
    padding: 8px 16px;
    min-height: 70px;
    box-sizing: border-box;
  }
  & button, & a { text-transform: none; font-weight: thin; }

  @media (min-width: 1024px) {
    display: flex;
    flex-direction: column;
    p {
      flex-grow: 3;
      display: flex;
      align-items: center;
    }
  }
`;
 */

const CarrouselItem = ({ children }) => (
  <WrapperUI>
    { children }
  </WrapperUI>
);

CarrouselItem.displayName = 'CarrouselItem';

export default CarrouselItem;
