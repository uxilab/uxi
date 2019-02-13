import React from 'react';
import Plusbox from '../Plusbox';

describe('Icon : <Plusbox />', () => {
  it('match snapshot', () => {
    expect(shallow(<Plusbox />)).toMatchSnapshot();
  });
});

