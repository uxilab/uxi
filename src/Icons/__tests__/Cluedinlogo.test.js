import React from 'react';
import Cluedinlogo from '../Cluedinlogo';

describe('Icon : <Cluedinlogo />', () => {
  it('match snapshot', () => {
    expect(shallow(<Cluedinlogo />)).toMatchSnapshot();
  });
});

