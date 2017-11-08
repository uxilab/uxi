import React from 'react';
import Industry from '../Industry';

describe('Icon : <Industry />', () => {
  it('match snapshot', () => {
    expect(shallow(<Industry />)).toMatchSnapshot();
  });
});


