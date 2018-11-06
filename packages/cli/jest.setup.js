// Make Enzyme functions available in all test files without importing
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() });

global.shallow = enzyme.shallow;
global.render = enzyme.render;
global.mount = enzyme.mount;

// Skip createElement warnings but fail tests on any other warning
/* eslint-disable no-console */
console.error = (message) => {
  if (!/(React.createElement: type should not be null)/.test(message)) {
    throw new Error(message);
  }
};
