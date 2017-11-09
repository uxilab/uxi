import React from 'react';
import Pencil from '../Pencil';

describe('Icon : <Pencil />', () => {
  it('match snapshot', () => {
    expect(shallow(<Pencil />)).toMatchSnapshot();
  });
});

