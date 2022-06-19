function memoize(fn) {
  // closure
  const cache = {};

  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    console.log(cache);
    return result;
  };
}

module.exports = memoize;
