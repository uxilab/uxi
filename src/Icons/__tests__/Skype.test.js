import React from 'react';
import Skype from '../Skype';

describe('Icon : <Skype />', () => {
  it('match snapshot', () => {
    expect(shallow(<Skype />)).toMatchSnapshot();
  });
});


