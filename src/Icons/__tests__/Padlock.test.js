import React from 'react';
import Padlock from '../Padlock';

describe('Icon : <Padlock />', () => {
  it('match snapshot', () => {
    expect(shallow(<Padlock />)).toMatchSnapshot();
  });
});

