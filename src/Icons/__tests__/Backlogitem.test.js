import React from 'react';
import Backlogitem from '../Backlogitem';

describe('Icon : <Backlogitem />', () => {
  it('match snapshot', () => {
    expect(shallow(<Backlogitem />)).toMatchSnapshot();
  });
});


