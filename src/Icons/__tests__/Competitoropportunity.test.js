import React from 'react';
import Competitoropportunity from '../Competitoropportunity';

describe('Icon : <Competitoropportunity />', () => {
  it('match snapshot', () => {
    expect(shallow(<Competitoropportunity />)).toMatchSnapshot();
  });
});

