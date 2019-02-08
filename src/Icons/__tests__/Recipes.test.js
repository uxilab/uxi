import React from 'react';
import Recipes from '../Recipes';

describe('Icon : <Recipes />', () => {
  it('match snapshot', () => {
    expect(shallow(<Recipes />)).toMatchSnapshot();
  });
});

