export function recursiveFib(n: number): number {
  if (n < 2) {
    return n;
  }
  return recursiveFib(n - 1) + recursiveFib(n - 2);
}

export function dpFib(n: number): number {
  if (n < 2) {
    return n;
  }

  let last = 1;
  let lastLeft = 0;
  for (let i = 2; i < n + 1; i++) {
    const current = last + lastLeft;

    lastLeft = last;
    last = current;
  }
  return last;
}
