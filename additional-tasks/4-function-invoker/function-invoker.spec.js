// import { invoker } from './function-invoker';

xdescribe('Function Invoker', () => {
  test('First case', () => {
    const args = {
      a: 'string',
      b: true,
      y: 42,
      z: null
    };

    function fn(a, b, x, y, z) {
      expect(a).toEqual(args.a);
      expect(b).toEqual(args.b);
      expect(x).toEqual(args.x);
      expect(y).toEqual(args.y);
      expect(z).toEqual(args.z);
    }

    invoker(fn, args);
  });

  test('Second case', () => {
    const args = {
      arg: 'string',
      argNamed42: 42,
      anotherArg: []
    };

    function fn(arg, argNamed42, anotherArg) {
      expect(arg).toEqual(args.arg);
      expect(argNamed42).toEqual(args.argNamed42);
      expect(anotherArg).toEqual(args.anotherArg);
    }

    invoker(fn, args);
  });
});
