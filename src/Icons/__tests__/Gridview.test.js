import React from 'react';
import Gridview from '../Gridview';

describe('Icon : <Gridview />', () => {
  it('match snapshot', () => {
    expect(shallow(<Gridview />)).toMatchSnapshot();
  });
});

