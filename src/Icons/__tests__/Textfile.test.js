import React from 'react';
import Textfile from '../Textfile';

describe('Icon : <Textfile />', () => {
  it('match snapshot', () => {
    expect(shallow(<Textfile />)).toMatchSnapshot();
  });
});


