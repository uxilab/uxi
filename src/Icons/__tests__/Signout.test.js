import React from 'react';
import Signout from '../Signout';

describe('Icon : <Signout />', () => {
  it('match snapshot', () => {
    expect(shallow(<Signout />)).toMatchSnapshot();
  });
});


