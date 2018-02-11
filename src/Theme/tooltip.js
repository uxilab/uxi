import { css } from 'styled-components';

export default css`
  .rc-tooltip {
    position: absolute;
    z-index: 1070;
    display: block;
    visibility: visible;
    font-size: 12px;
    line-height: 1.5;
    opacity: 0.9;
  }

  .rc-tooltip-hidden {
    display: none;
  }

  .rc-tooltip-placement-top,
  .rc-tooltip-placement-topLeft,
  .rc-tooltip-placement-topRight {
    padding: 5px 0 9px 0;
  }

  .rc-tooltip-placement-right,
  .rc-tooltip-placement-rightTop,
  .rc-tooltip-placement-rightBottom {
    padding: 0 5px 0 9px;
  }

  .rc-tooltip-placement-bottom,
  .rc-tooltip-placement-bottomLeft,
  .rc-tooltip-placement-bottomRight {
    padding: 9px 0 5px 0;
  }

  .rc-tooltip-placement-left,
  .rc-tooltip-placement-leftTop,
  .rc-tooltip-placement-leftBottom {
    padding: 0 9px 0 5px;
  }

  .rc-tooltip-inner {
    padding: 5px 10px 2px 10px;
    color: #fff;
    text-align: left;
    text-decoration: none;
    background-color: #373737;
    border-radius: 6px;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.17);
    min-height: 24px;
  }

  .rc-tooltip-arrow {
    position: absolute;
    width: 0;
    height: 0;
    border-color: transparent;
    border-style: solid;
  }

  .rc-tooltip-placement-top .rc-tooltip-arrow,
  .rc-tooltip-placement-topLeft .rc-tooltip-arrow,
  .rc-tooltip-placement-topRight .rc-tooltip-arrow {
    bottom: 4px;
    margin-left: -5px;
    border-width: 5px 5px 0;
    border-top-color: #373737;
  }

  .rc-tooltip-placement-top .rc-tooltip-arrow {
    left: 50%;
  }

  .rc-tooltip-placement-topLeft .rc-tooltip-arrow {
    left: 15%;
  }

  .rc-tooltip-placement-topRight .rc-tooltip-arrow {
    right: 15%;
  }

  .rc-tooltip-placement-right .rc-tooltip-arrow,
  .rc-tooltip-placement-rightTop .rc-tooltip-arrow,
  .rc-tooltip-placement-rightBottom .rc-tooltip-arrow {
    left: 4px;
    margin-top: -5px;
    border-width: 5px 5px 5px 0;
    border-right-color: #373737;
  }

  .rc-tooltip-placement-right .rc-tooltip-arrow {
    top: 50%;
  }

  .rc-tooltip-placement-rightTop .rc-tooltip-arrow {
    top: 15%;
    margin-top: 0;
  }

  .rc-tooltip-placement-rightBottom .rc-tooltip-arrow {
    bottom: 15%;
  }

  .rc-tooltip-placement-left .rc-tooltip-arrow,
  .rc-tooltip-placement-leftTop .rc-tooltip-arrow,
  .rc-tooltip-placement-leftBottom .rc-tooltip-arrow {
    right: 4px;
    margin-top: -5px;
    border-width: 5px 0 5px 5px;
    border-left-color: #373737;
  }

  .rc-tooltip-placement-left .rc-tooltip-arrow {
    top: 50%;
  }

  .rc-tooltip-placement-leftTop .rc-tooltip-arrow {
    top: 15%;
    margin-top: 0;
}

  .rc-tooltip-placement-leftBottom .rc-tooltip-arrow {
    bottom: 15%;
  }

  .rc-tooltip-placement-bottom .rc-tooltip-arrow,
  .rc-tooltip-placement-bottomLeft .rc-tooltip-arrow,
  .rc-tooltip-placement-bottomRight .rc-tooltip-arrow {
    top: 4px;
    margin-left: -5px;
    border-width: 0 5px 5px;
    border-bottom-color: #373737;
  }

  .rc-tooltip-placement-bottom .rc-tooltip-arrow {
    left: 50%;
  }

  .rc-tooltip-placement-bottomLeft .rc-tooltip-arrow {
    left: 15%;
  }

  .rc-tooltip-placement-bottomRight .rc-tooltip-arrow {
      right: 15%;
  }

  .rc-tooltip.rc-tooltip-zoom-enter,
  .rc-tooltip.rc-tooltip-zoom-leave {
    display: block;
  }

  .rc-tooltip-zoom-enter,
  .rc-tooltip-zoom-appear {
    opacity: 0;
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);
    animation-timing-function: cubic-bezier(0.18, 0.89, 0.32, 1.28);
    -webkit-animation-play-state: paused;
    animation-play-state: paused;
  }

  .rc-tooltip-zoom-leave {
    -webkit-animation-duration: 0.3s;
    animation-duration: 0.3s;
    -webkit-animation-fill-mode: both;
    animation-fill-mode: both;
    -webkit-animation-timing-function: cubic-bezier(0.6, -0.3, 0.74, 0.05);
    animation-timing-function: cubic-bezier(0.6, -0.3, 0.74, 0.05);
    -webkit-animation-play-state: paused;
    animation-play-state: paused;
  }

  .rc-tooltip-zoom-enter.rc-tooltip-zoom-enter-active,
  .rc-tooltip-zoom-appear.rc-tooltip-zoom-appear-active {
    -webkit-animation-name: rcToolTipZoomIn;
    animation-name: rcToolTipZoomIn;
    -webkit-animation-play-state: running;
    animation-play-state: running;
  }

  .rc-tooltip-zoom-leave.rc-tooltip-zoom-leave-active {
    -webkit-animation-name: rcToolTipZoomOut;
    animation-name: rcToolTipZoomOut;
    -webkit-animation-play-state: running;
    animation-play-state: running;
  }

  @-webkit-keyframes rcToolTipZoomIn {
    0% {
      opacity: 0;
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-transform: scale(0, 0);
      transform: scale(0, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
  }

  @keyframes rcToolTipZoomIn {
    0% {
      opacity: 0;
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-transform: scale(0, 0);
      transform: scale(0, 0);
    }
    100% {
      opacity: 1;
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
  }

  @-webkit-keyframes rcToolTipZoomOut {
    0% {
      opacity: 1;
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    100% {
      opacity: 0;
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-transform: scale(0, 0);
      transform: scale(0, 0);
    }
  }

  @keyframes rcToolTipZoomOut {
    0% {
      opacity: 1;
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    100% {
      opacity: 0;
      -webkit-transform-origin: 50% 50%;
      transform-origin: 50% 50%;
      -webkit-transform: scale(0, 0);
      transform: scale(0, 0);
    }
  }
`;