import React from 'react';
import Arrowright from '../Arrowright';

describe('Icon : <Arrowright />', () => {
  it('match snapshot', () => {
    expect(shallow(<Arrowright />)).toMatchSnapshot();
  });
});


