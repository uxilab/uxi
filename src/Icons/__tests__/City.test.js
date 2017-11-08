import React from 'react';
import City from '../City';

describe('Icon : <City />', () => {
  it('match snapshot', () => {
    expect(shallow(<City />)).toMatchSnapshot();
  });
});


