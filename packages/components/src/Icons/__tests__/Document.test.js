import React from 'react';
import Document from '../Document';

describe('Icon : <Document />', () => {
  it('match snapshot', () => {
    expect(shallow(<Document />)).toMatchSnapshot();
  });
});

