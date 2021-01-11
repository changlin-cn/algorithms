import { dpFib, recursiveFib } from '../src/index';

[dpFib, recursiveFib].forEach((fn) => {
  test(fn.name, () => {
    expect(fn(0)).toBe(0);
    expect(fn(1)).toBe(1);
    expect(fn(2)).toBe(1);
    expect(fn(3)).toBe(2);

    expect(fn(4)).toBe(3);
    expect(fn(5)).toBe(5);
    expect(fn(6)).toBe(8);
  });
});

// console.time('dp');
// dpFib(20)
// console.timeEnd('dp');

// console.time('re');
// recursiveFib(20)
// console.timeEnd('re');
