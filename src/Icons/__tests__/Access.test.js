import React from 'react';
import Access from '../Access';

describe('Icon : <Access />', () => {
  it('match snapshot', () => {
    expect(shallow(<Access />)).toMatchSnapshot();
  });
});

