import React from 'react';
import Smileysad from '../Smileysad';

describe('Icon : <Smileysad />', () => {
  it('match snapshot', () => {
    expect(shallow(<Smileysad />)).toMatchSnapshot();
  });
});

