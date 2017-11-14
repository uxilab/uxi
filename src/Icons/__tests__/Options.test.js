import React from 'react';
import Options from '../Options';

describe('Icon : <Options />', () => {
  it('match snapshot', () => {
    expect(shallow(<Options />)).toMatchSnapshot();
  });
});


