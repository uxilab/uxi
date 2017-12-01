import React from 'react';
import Pbcopy from '../Pbcopy';

describe('Icon : <Pbcopy />', () => {
  it('match snapshot', () => {
    expect(shallow(<Pbcopy />)).toMatchSnapshot();
  });
});


