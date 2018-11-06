// Make Enzyme functions available in all test files without importing
import { render, mount, shallow, configure } from 'enzyme';
/* eslint-disable import/first */
/* eslint-disable  no-unused-vars */
import raf from './raf';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

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
