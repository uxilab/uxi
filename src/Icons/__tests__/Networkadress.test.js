import React from 'react';
import Networkadress from '../Networkadress';

describe('Icon : <Networkadress />', () => {
  it('match snapshot', () => {
    expect(shallow(<Networkadress />)).toMatchSnapshot();
  });
});

