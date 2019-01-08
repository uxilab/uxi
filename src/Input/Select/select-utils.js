import React from 'react';


export function isElement(element) {
  return React.isValidElement(element);
}

export function isDOMTypeElement(element) {
  return isElement(element) && typeof element.type === 'string';
}

export default {
  isElement,
  isDOMTypeElement,
};
