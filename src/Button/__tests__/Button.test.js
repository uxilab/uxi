import React from 'react';
import Button from '../Button';
import { mountWithTheme } from '../../../test/utils';

it('should render a Button', () => {
  const testValue = 'YO!';
  const wrapper =
    mountWithTheme(
      <Button onClick={() => { }} text={testValue} />
    )

  expect(wrapper).toMatchSnapshot();
  const button = wrapper.find(Button);
  expect(button.length).toEqual(1);
  expect(button.props().text).toContain(testValue);
});

