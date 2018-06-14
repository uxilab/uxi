import React from 'react';
import Graphql from '../Graphql';

describe('Icon : <Graphql />', () => {
  it('match snapshot', () => {
    expect(shallow(<Graphql />)).toMatchSnapshot();
  });
});


