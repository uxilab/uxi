import React from 'react';
import Sortingdown from '../Sortingdown';

describe('Icon : <Sortingdown />', () => {
  it('match snapshot', () => {
    expect(shallow(<Sortingdown />)).toMatchSnapshot();
  });
});

