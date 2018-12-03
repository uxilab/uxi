import { forEachTreeElement } from '../tree';

describe('Tree', () => {
  it('forEachTreeElement exists', () => {
    expect(forEachTreeElement).toBeDefined();
  });
  it('forEachTreeElement should loop trough a simple tree', () => {
    const sut = [{
      id: 1,
    }];

    forEachTreeElement(sut, (n) => {
      // eslint-disable-next-line no-param-reassign
      n.isChecked = true;
    });

    expect(sut.isChecked).toEqual(true);
  });
  it('forEachTreeElement should loop trough a tree with childs', () => {
    const sut2 = {
      id: 1,
      childNodes: [
        {
          id: 2,
        },
        {
          id: 3,
          childNodes: [{
            id: 4,
          }],
        },
      ],
    };

    forEachTreeElement(sut2, (n) => {
      // eslint-disable-next-line no-param-reassign
      n.isChecked = true;
    });

    expect(sut2.isChecked).toEqual(true);
    expect(sut2.childNodes).toBeDefined();
    expect(sut2.childNodes[0].isChecked).toEqual(true);
    expect(sut2.childNodes[1].isChecked).toEqual(true);
    expect(sut2.childNodes[1].childNodes[0].isChecked).toEqual(true);
  });
});
