import React from 'react';
import Button from '../Button';
import ThemeProvider from '../../Theme';

it('should render a Button', () => {
  const testValue = 'YO!';
  const wrapper = shallow(
    <ThemeProvider>
      <Button onClick={()=>{}} text={testValue}/>
    </ThemeProvider>
  );
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.props().text).toContain(testValue);
});
