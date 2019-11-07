import emmie from '../src';

describe('emmie', () => {
  let events: any;
  let instance: any;

  beforeEach(() => {
    events = {};
    instance = emmie(events);
  });

  describe('on()', () => {
    it('should register a new event', () => {
      const fn = () => {};

      instance.on('hello', fn);

      expect(events).toHaveProperty('hello', [fn]);
    });

    it('should register any number of handlers for an event', () => {
      const fn = () => {};
      const fn2 = () => {};

      instance.on('hello', fn);
      instance.on('hello', fn2);

      expect(events).toHaveProperty('hello', [fn, fn2]);
    });
  });

  describe('off()', () => {
    it('should remove an event listener', () => {
      const fn = () => {};

      instance.on('hello', fn);

      expect(events).toHaveProperty('hello', [fn]);

      instance.off('hello', fn);

      expect(events).not.toHaveProperty('hello', [fn]);
    });
  });

  describe('emit()', () => {
    it('should invoke an event handler', () => {
      const fn = jest.fn();

      instance.on('hello', fn);
      instance.emit('hello');
      instance.emit('hello');

      expect(fn).toHaveBeenCalledTimes(2);
    });
  });
});
