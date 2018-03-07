import React from 'react';
import Consent from '../Consent';

describe('Icon : <Consent />', () => {
  it('match snapshot', () => {
    expect(shallow(<Consent />)).toMatchSnapshot();
  });
});

