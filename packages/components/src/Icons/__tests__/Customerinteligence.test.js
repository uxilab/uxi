import React from 'react';
import Customerinteligence from '../Customerinteligence';

describe('Icon : <Customerinteligence />', () => {
  it('match snapshot', () => {
    expect(shallow(<Customerinteligence />)).toMatchSnapshot();
  });
});

