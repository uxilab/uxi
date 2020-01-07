import React from 'react';
import Enrich from '../Enrich';

describe('Icon : <Enrich />', () => {
  it('match snapshot', () => {
    expect(shallow(<Enrich />)).toMatchSnapshot();
  });
});

