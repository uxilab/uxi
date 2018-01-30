import React from 'react';
import Listul from '../Listul';

describe('Icon : <Listul />', () => {
  it('match snapshot', () => {
    expect(shallow(<Listul />)).toMatchSnapshot();
  });
});

