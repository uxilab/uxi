import React from 'react';
import Gdpr from '../Gdpr';

describe('Icon : <Gdpr />', () => {
  it('match snapshot', () => {
    expect(shallow(<Gdpr />)).toMatchSnapshot();
  });
});

