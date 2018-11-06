import React from 'react';
import Notification from '../Notification';

describe('Icon : <Notification />', () => {
  it('match snapshot', () => {
    expect(shallow(<Notification />)).toMatchSnapshot();
  });
});

