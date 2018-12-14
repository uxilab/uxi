import React from 'react';
import SelectInput from '../SelectInput';

describe('<SelectInput />', () => {
  it('exists', () => {
    expect(SelectInput).toBeDefined();
  });

  it('matches snapshot', () => {
    const sut = shallow(
      <SelectInput />
    );
    expect(sut).toMatchSnapshot();
  });

  describe('controlled/uncontrolled behaviour', () => {
    it('works correctly as an uncontrolled input', () => {
      const sut = shallow(
        <SelectInput defaultValue={'bar'} >
          <div value="foo">foo</div>
          <div value="bar">bar</div>
          <div value="baz">baz</div>
        </SelectInput>
      );

      expect(sut).toMatchSnapshot();
      expect(sut.state('selectedIndex')).toEqual(1);
      expect(sut.instance().isControlled).toEqual(false);
      expect(sut.instance().clickHandler).toBeDefined();
      const fakeEvent = { currentTarget: { dataset: { index: 2 } } };
      sut.instance().clickHandler(fakeEvent);
      expect(sut.state('selectedIndex')).toEqual(2);
    });

    it('works as a controlled component, no onChange, no change', () => {
      const sut = shallow(
        <SelectInput value={'baz'} >
          <div value="foo">foo</div>
          <div value="bar">bar</div>
          <div value="baz">baz</div>
        </SelectInput>
      );

      expect(sut).toMatchSnapshot();
      expect(sut.state('selectedIndex')).toEqual(2);
      expect(sut.instance().isControlled).toEqual(true);
      expect(sut.instance().clickHandler).toBeDefined();
      const fakeEvent = { currentTarget: { dataset: { index: 0 } } };
      sut.instance().clickHandler(fakeEvent);
      expect(sut.state('selectedIndex')).toEqual(2);
    });
  });
});
