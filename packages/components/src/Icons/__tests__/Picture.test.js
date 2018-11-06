import React from 'react';
import Picture from '../Picture';

describe('Icon : <Picture />', () => {
  it('match snapshot', () => {
    expect(shallow(<Picture />)).toMatchSnapshot();
  });
});

