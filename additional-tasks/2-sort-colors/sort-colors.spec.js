import { sortColors } from './sort-colors';

describe('Sort Colors', () => {
  test('Should return [0,0,1,1,2,2] for [2,0,2,1,1,0]', () => {
    const arr = [2,0,2,1,1,0];
    sortColors(arr);
    expect(arr).toEqual([0,0,1,1,2,2]);
  })

  test('Should return [0,0,1,2,2] for [2,2,0,1,0]', () => {
    const arr = [2,2,0,1,0];
    sortColors(arr);
    expect(arr).toEqual([0,0,1,2,2]);
  })

  test('Should return [0,0,0,0,1,1,1,2,2,2] for [0,1,1,2,0,2,2,0,0,1]', () => {
    const arr = [0,1,1,2,0,2,2,0,0,1];
    sortColors(arr);
    expect(arr).toEqual([0,0,0,0,1,1,1,2,2,2]);
  })
});
