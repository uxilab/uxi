import React from 'react';
import Checkbox from '../Checkbox';

describe('<Checkbox />', () => {
  it('exists', () => {
    expect(Checkbox).toBeDefined();
  });

  it('matches snapshot', () => {
    const sut = shallow(
      <Checkbox />
    );

    expect(sut).toMatchSnapshot();
  });

  describe('Uncontrolled', () => {
    it('handles its own state', () => {
      const spy = jest.fn();

      const sut = shallow(
        <Checkbox onChange={spy} />
      );

      expect(sut.instance().isControlled).toBe(false);
      expect(sut.instance().state.checked).toBe(false);
      expect(sut.instance().props.checked).toBeUndefined();
      expect(sut.instance().props.onChange).toBe(spy);
    });

    it('its state toggle itself', () => {
      const spy = jest.fn();

      const sut = shallow(
        <Checkbox onChange={spy} />
      );

      expect(sut.instance().isControlled).toBe(false);
      expect(sut.instance().props.checked).toBeUndefined();
      expect(sut.instance().props.onChange).toEqual(spy);
      expect(sut.instance().state.checked).toBe(false);

      const fakeEvent = { target: { checked: true } };
      sut.instance().handleChange(fakeEvent); // simualte click (kinda)

      expect(sut.instance().props.checked).toBeUndefined();
      expect(sut.instance().state.checked).toBe(true);
    });
  });

  describe('Controlled', () => {
    it('respect the props passed down no matter what (false)', () => {
      const spy = jest.fn();

      const sut = shallow(
        <Checkbox onChange={spy} checked={false} />
      );

      expect(sut.instance().isControlled).toBe(true);
      expect(sut.instance().props.checked).toBe(false);
    });

    it('respect the props passed down no matter what (true)', () => {
      const spy = jest.fn();

      const sut = shallow(
        <Checkbox onChange={spy} checked />
      );

      expect(sut.instance().isControlled).toBe(true);
      // expect(sut.instance().state.checked).toBe(true); // TODO fix the compo behaviour
      expect(sut.instance().props.checked).toBe(true);
    });

    it('its state does not change when it is controlled', () => {
      const spy = jest.fn();

      const sut = shallow(
        <Checkbox onChange={spy} checked />
      );

      expect(sut.instance().isControlled).toBe(true);

      const initialState = sut.instance().state.checked;

      expect(sut.instance().props.checked).toBe(true);
      const fakeEvent = { target: { checked: true } };
      sut.instance().handleChange(fakeEvent);

      expect(sut.instance().state.checked).toEqual(initialState);
    });
  });
});
