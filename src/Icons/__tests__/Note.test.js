import React from 'react';
import Note from '../Note';

describe('Icon : <Note />', () => {
  it('match snapshot', () => {
    expect(shallow(<Note />)).toMatchSnapshot();
  });
});

