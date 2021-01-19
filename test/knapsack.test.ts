import { simpleKnapsack, dpKnapsack } from '../src/index';

[simpleKnapsack, dpKnapsack].forEach((fn) => {
  test(fn.name, () => {
    expect(
      fn(5, [
        { value: 3, size: 4 },
        { value: 7, size: 5 },
      ]),
    ).toBe(7);

    expect(
      fn(6, [
        { value: 3, size: 1 },
        { value: 7, size: 5 },
        { value: 7, size: 8 },
        { value: 7, size: 9 },
      ]),
    ).toBe(10);

    expect(
      fn(11, [
        { value: 3, size: 1 },
        { value: 7, size: 5 },
        { value: 12, size: 8 },
        { value: 15, size: 9 },
      ]),
    ).toBe(18);

    expect(
      fn(3, [
        { value: 3, size: 1 },
        { value: 4, size: 2 },
        { value: 5, size: 3 },
      ]),
    ).toBe(7);

    expect(
      fn(16, [
        { value: 4, size: 3 },
        { value: 5, size: 4 },
        { value: 10, size: 7 },
        { value: 11, size: 8 },
        { value: 13, size: 9 },
      ]),
    ).toBe(23);

    if (fn.name === 'simpleKnapsack') return;
    console.time(fn.name);
    fn(16, [
      { value: 4, size: 3 },
      { value: 5, size: 4 },
      { value: 10, size: 7 },
      { value: 11, size: 8 },
      { value: 13, size: 9 },
      { value: 4, size: 3 },
      { value: 5, size: 4 },
      { value: 10, size: 7 },
      { value: 11, size: 8 },
      { value: 13, size: 9 },
      { value: 4, size: 3 },
      { value: 5, size: 4 },
      { value: 10, size: 7 },
      { value: 11, size: 8 },
      { value: 13, size: 9 },
      { value: 4, size: 3 },
      { value: 5, size: 4 },
      { value: 10, size: 7 },
      { value: 11, size: 8 },
      { value: 13, size: 9 },
      { value: 4, size: 3 },
      { value: 5, size: 4 },
      { value: 10, size: 7 },
      { value: 11, size: 8 },
      { value: 13, size: 9 },
      { value: 4, size: 3 },
      { value: 5, size: 4 },
      { value: 10, size: 7 },
      { value: 11, size: 8 },
      { value: 13, size: 9 },
    ]),
      console.timeEnd(fn.name);
  });
});
