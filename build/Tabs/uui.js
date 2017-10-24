"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var count = 0;
var uuid = function uuid() {
  return "react-tabs-" + count++;
};

exports.default = uuid;