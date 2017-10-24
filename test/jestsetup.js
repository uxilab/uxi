// Make Enzyme functions available in all test files without importing
import { render, mount, shallow } from 'enzyme';

global.shallow = shallow;
global.render = render;
global.mount = mount;

// Skip createElement warnings but fail tests on any other warning
/* eslint-disable no-console */
console.error = (message) => {
  if (!/(React.createElement: type should not be null)/.test(message)) {
    throw new Error(message);
  }
};
