// eslint-disable-next-line import/no-named-as-default
import getAppropriateIcon from '../getAppropriateIcon';
import Circle from '../Circle';
import Diagram from '../Diagram';

describe('getAppropriateIcon()', () => {
  it('should return an react element if icon exists', () => {
    expect(getAppropriateIcon('Diagram')).toEqual(Diagram);
  });

  it('should return Circle as a "not found icon fallback"', () => {
    expect(getAppropriateIcon('zegzbehb')).toEqual(Circle);
  });
});
