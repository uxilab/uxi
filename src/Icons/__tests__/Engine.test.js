import React from 'react';
import Engine from '../Engine';

describe('Icon : <Engine />', () => {
  it('match snapshot', () => {
    expect(shallow(<Engine />)).toMatchSnapshot();
  });
});

