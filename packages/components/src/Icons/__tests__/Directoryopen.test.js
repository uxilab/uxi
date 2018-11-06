import React from 'react';
import Directoryopen from '../Directoryopen';

describe('Icon : <Directoryopen />', () => {
  it('match snapshot', () => {
    expect(shallow(<Directoryopen />)).toMatchSnapshot();
  });
});

