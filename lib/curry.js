const curry = (fn, args = []) => (...next) =>
  args.length + next.length === fn.length
    ? fn(...args.concat(next))
    : curry(fn, args.concat(next));

export default curry;
