import React from 'react';
import Alert from '../Alert';

it('should render an Alert', () => {
  const child = 'This is a message';
  const wrapper = shallow(
    <Alert>{child}</Alert>,
  );
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.text()).toContain(child);
});
