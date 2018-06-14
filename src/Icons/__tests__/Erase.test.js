import React from 'react';
import Erase from '../Erase';

describe('Icon : <Erase />', () => {
  it('match snapshot', () => {
    expect(shallow(<Erase />)).toMatchSnapshot();
  });
});


