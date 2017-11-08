import React from 'react';
import Crunchbase from '../Crunchbase';

describe('Icon : <Crunchbase />', () => {
  it('match snapshot', () => {
    expect(shallow(<Crunchbase />)).toMatchSnapshot();
  });
});


