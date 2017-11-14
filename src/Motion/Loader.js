// <div class="lds-css ng-scope">
// // <div class="lds-spinner" style="100%;height:100%"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
// <style type="text/css">

import React from 'react';

const theCSS = `
@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.lds-spinner {
  position: relative;
}
.lds-spinner div {
  left: 96px;
  top: 40px;
  position: absolute;
  -webkit-animation: lds-spinner linear 1s infinite;
  animation: lds-spinner linear 1s infinite;
  background: #25bcbc;
  width: 8px;
  height: 40px;
  border-radius: 20%;
  -webkit-transform-origin: 4px 60px;
  transform-origin: 4px 60px;
}
.lds-spinner div:nth-child(1) {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-animation-delay: -0.875s;
  animation-delay: -0.875s;
}
.lds-spinner div:nth-child(2) {
  -webkit-transform: rotate(45deg);
  transform: rotate(45deg);
  -webkit-animation-delay: -0.75s;
  animation-delay: -0.75s;
}
.lds-spinner div:nth-child(3) {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-animation-delay: -0.625s;
  animation-delay: -0.625s;
}
.lds-spinner div:nth-child(4) {
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
.lds-spinner div:nth-child(5) {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  -webkit-animation-delay: -0.375s;
  animation-delay: -0.375s;
}
.lds-spinner div:nth-child(6) {
  -webkit-transform: rotate(225deg);
  transform: rotate(225deg);
  -webkit-animation-delay: -0.25s;
  animation-delay: -0.25s;
}
.lds-spinner div:nth-child(7) {
  -webkit-transform: rotate(270deg);
  transform: rotate(270deg);
  -webkit-animation-delay: -0.125s;
  animation-delay: -0.125s;
}
.lds-spinner div:nth-child(8) {
  -webkit-transform: rotate(315deg);
  transform: rotate(315deg);
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
.lds-spinner {
  width: 200px !important;
  height: 200px !important;
  -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
  transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
}
`;

export const Loader = props => (
  <div>
    <style>
      {theCSS}
    </style>
    <div>
      <div
        className="lds-spinner"
        style={{ width: '100%', height: '100%' }}
      >
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  </div>
);

export default Loader;
