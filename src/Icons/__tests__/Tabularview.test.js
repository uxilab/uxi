import React from 'react';
import Tabularview from '../Tabularview';

describe('Icon : <Tabularview />', () => {
  it('match snapshot', () => {
    expect(shallow(<Tabularview />)).toMatchSnapshot();
  });
});

