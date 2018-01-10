import React from 'react';
import Access from '../Access';

describe('Icon : <Access />', () => {
  it('match snapshot', () => {
    expect(shallow(<Access />)).toMatchSnapshot();
  });
  it('should handle size props', () => {
    expect(shallow(<Access size={28} />)).toMatchSnapshot();
  });
});

