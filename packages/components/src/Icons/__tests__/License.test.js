import React from 'react';
import License from '../License';

describe('Icon : <License />', () => {
  it('match snapshot', () => {
    expect(shallow(<License />)).toMatchSnapshot();
  });
});

