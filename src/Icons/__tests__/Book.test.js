import React from 'react';
import Book from '../Book';

describe('Icon : <Book />', () => {
  it('match snapshot', () => {
    expect(shallow(<Book />)).toMatchSnapshot();
  });
});

