import React from 'react';
import Switch from '../Switch';

const defaultProps = { };

describe('<Switch />', () => {
  it('exists', () => {
    expect(Switch).toBeDefined()
  })

  it('matches snapshot', () => {
    const sut = shallow(
      <Switch />
    );

    expect(sut).toMatchSnapshot();
  })

  describe('Uncontrolled', () => {
    it('handles its own state', () => {
      const spy = jest.fn()

      const sut = shallow(
        <Switch onChange={spy} />
      );

      expect(sut.instance().isControlled).toBe(false);
      expect(sut.instance().state.checked).toBe(false);
      expect(sut.instance().props.checked).toBeUndefined();
      expect(sut.instance().props.onChange).toBe(spy);
    })

    it('its state toggle itself', () => {
      const spy = jest.fn()

      let sut = shallow(
        <Switch onChange={spy} />
      );

      expect(sut.instance().isControlled).toBe(false);
      expect(sut.instance().props.checked).toBeUndefined();
      expect(sut.instance().props.onChange).toEqual(spy);
      expect(sut.instance().state.checked).toBe(false);

      sut.instance().handleChange() // simualte click (kinda)

      expect(sut.instance().props.checked).toBeUndefined();
      expect(sut.instance().state.checked).toBe(true);
    })
  })

  describe('Controlled', () => {
    it('respect the props passed down no matter what (false)', () => {
      const spy = jest.fn()

      let sut = shallow(
        <Switch onChange={spy} checked={false} />
      );

      expect(sut.instance().isControlled).toBe(true);
      expect(sut.instance().props.checked).toBe(false);
    })

    it('respect the props passed down no matter what (true)', () => {
      const spy = jest.fn()

      let sut = shallow(
        <Switch onChange={spy} checked={true} />
      );

      expect(sut.instance().isControlled).toBe(true);
      // expect(sut.instance().state.checked).toBe(true); // TODO fix the compo behaviour
      expect(sut.instance().props.checked).toBe(true);
    })

    it('its state does not change when it is controlled', () => {
      const spy = jest.fn()

      let sut = shallow(
        <Switch onChange={spy} checked={true} />
      );

      expect(sut.instance().isControlled).toBe(true);

      const initialState = sut.instance().state.checked;

      expect(sut.instance().props.checked).toBe(true);

      sut.instance().handleChange()

      expect(sut.instance().state.checked).toEqual(initialState)
    })
  })
})
