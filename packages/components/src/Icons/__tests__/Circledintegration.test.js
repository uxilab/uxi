import React from 'react';
import Circledintegration from '../Circledintegration';

describe('Icon : <Circledintegration />', () => {
  it('match snapshot', () => {
    expect(shallow(<Circledintegration />)).toMatchSnapshot();
  });
});

