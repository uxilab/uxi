import React from 'react';
import Button from '../Button';
import { mount } from '../../../test/utils';

it('should render a Button', () => {
  const testValue = 'YO!';
  const wrapper = shallow(mount(<Button onClick={() => {}} text={testValue} />));
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.props().text).toContain(testValue);
});

