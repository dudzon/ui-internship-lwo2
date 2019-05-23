// import { memoizeWrapper } from './memoize';
let originalFibonacciTime, originalFactorialTime, wrappedFibonacciTime, wrappedFactorialTime;
const cycleCount = 100,
    seed = Math.floor((Math.random() * 10) + 20);

xdescribe('Memoize', () => {
  test('Original functions work as expected', () => {
    expect(fibonacci(1)).toEqual(1);
    expect(fibonacci(0)).toEqual(0);
    expect(fibonacci(2)).toEqual(1);
    expect(fibonacci(3)).toEqual(2);
    expect(fibonacci(4)).toEqual(3);
    expect(fibonacci(5)).toEqual(5);
    expect(fibonacci(6)).toEqual(8);
    expect(fibonacci(7)).toEqual(13);
    expect(fibonacci(8)).toEqual(21);
    expect(fibonacci(9)).toEqual(34);
    expect(fibonacci(10)).toEqual(55);

    expect(factorial(0)).toEqual(1);
    expect(factorial(1)).toEqual(1);
    expect(factorial(2)).toEqual(2);
    expect(factorial(3)).toEqual(6);
    expect(factorial(4)).toEqual(24);
    expect(factorial(5)).toEqual(120);
    expect(factorial(6)).toEqual(720);
    expect(factorial(7)).toEqual(5040);
    expect(factorial(8)).toEqual(40320);
    expect(factorial(9)).toEqual(362880);
    expect(factorial(10)).toEqual(3628800);

    originalFibonacciTime = measureExecutionTime(cycleCount, () => {
      fibonacci(seed);
    });

    originalFactorialTime = measureExecutionTime(cycleCount, () => {
      factorial(seed);
    });
  });

  test('Wrapped functions work as expected', () => {
    fibonacci = memoizeWrapper(fibonacci);
    factorial = memoizeWrapper(factorial);

    expect(fibonacci(0)).toEqual(0);
    expect(fibonacci(1)).toEqual(1);
    expect(fibonacci(2)).toEqual(1);
    expect(fibonacci(3)).toEqual(2);
    expect(fibonacci(4)).toEqual(3);
    expect(fibonacci(5)).toEqual(5);
    expect(fibonacci(6)).toEqual(8);
    expect(fibonacci(7)).toEqual(13);
    expect(fibonacci(8)).toEqual(21);
    expect(fibonacci(9)).toEqual(34);
    expect(fibonacci(10)).toEqual(55);

    expect(factorial(0)).toEqual(1);
    expect(factorial(1)).toEqual(1);
    expect(factorial(2)).toEqual(2);
    expect(factorial(3)).toEqual(6);
    expect(factorial(4)).toEqual(24);
    expect(factorial(5)).toEqual(120);
    expect(factorial(6)).toEqual(720);
    expect(factorial(7)).toEqual(5040);
    expect(factorial(8)).toEqual(40320);
    expect(factorial(9)).toEqual(362880);
    expect(factorial(10)).toEqual(3628800);

    wrappedFibonacciTime = measureExecutionTime(cycleCount, () => {
      fibonacci(seed);
    });

    wrappedFactorialTime = measureExecutionTime(cycleCount, () => {
      factorial(seed);
    });
  });

  test('Wrapped functions are at least two times faster than their originals', () => {
    const wrappedFibonacciSpeedup = originalFibonacciTime / wrappedFibonacciTime;
    const wrappedFactorialSpeedup = originalFactorialTime / wrappedFactorialTime;

    console.log('Fibonacci original time:', originalFibonacciTime + 'ms');
    console.log('Fibonacci wrapped time:', wrappedFibonacciTime + 'ms');
    console.log('Fibonacci speedup:', wrappedFibonacciSpeedup, 'times');

    console.log('Factorial original time:', originalFactorialTime + 'ms');
    console.log('Factorial wrapped time:', wrappedFactorialTime + 'ms');
    console.log('Factorial speedup:', wrappedFactorialSpeedup, 'times');

    expect(wrappedFibonacciSpeedup > 2).toBeTruthy();
    expect(wrappedFactorialSpeedup > 2).toBeTruthy();
  });
});

function fibonacci(n) {
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 1) + fibonacci(n - 2);
};

function factorial(n) {
  if (n < 1) {
    return 1;
  }

  return factorial(n - 1) * n;
};

function measureExecutionTime(cycles, fn) {
  const start = process.hrtime();
  for (let i = 0; i < cycles; i++) {
    fn();
  }

  return process.hrtime(start)[1];
}
