import React from 'react';
import Profile from '../Profile';

describe('Icon : <Profile />', () => {
  it('match snapshot', () => {
    expect(shallow(<Profile />)).toMatchSnapshot();
  });
});

