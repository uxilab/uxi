import React from 'react';
import Engagement from '../Engagement';

describe('Icon : <Engagement />', () => {
  it('match snapshot', () => {
    expect(shallow(<Engagement />)).toMatchSnapshot();
  });
});

