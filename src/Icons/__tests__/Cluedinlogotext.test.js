import React from 'react';
import Cluedinlogotext from '../Cluedinlogotext';

describe('Icon : <Cluedinlogotext />', () => {
  it('match snapshot', () => {
    expect(shallow(<Cluedinlogotext />)).toMatchSnapshot();
  });
});

