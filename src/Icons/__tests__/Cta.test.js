import React from 'react';
import Cta from '../Cta';

describe('Icon : <Cta />', () => {
  it('match snapshot', () => {
    expect(shallow(<Cta />)).toMatchSnapshot();
  });
});

