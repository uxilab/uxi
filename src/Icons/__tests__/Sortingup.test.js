import React from 'react';
import Sortingup from '../Sortingup';

describe('Icon : <Sortingup />', () => {
  it('match snapshot', () => {
    expect(shallow(<Sortingup />)).toMatchSnapshot();
  });
});

