import React from 'react';
import Sales from '../Sales';

describe('Icon : <Sales />', () => {
  it('match snapshot', () => {
    expect(shallow(<Sales />)).toMatchSnapshot();
  });
});


