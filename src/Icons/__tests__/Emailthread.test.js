import React from 'react';
import Emailthread from '../Emailthread';

describe('Icon : <Emailthread />', () => {
  it('match snapshot', () => {
    expect(shallow(<Emailthread />)).toMatchSnapshot();
  });
});


