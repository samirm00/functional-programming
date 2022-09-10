const curryVariadic =
    (fn, args = []) =>
    (...next) =>
        args.length + next.length === fn.length
            ? fn(...args.concat(next))
            : curryVariadic(fn, args.concat(next));

const curryUnary =
    (fn, args = []) =>
    (next) =>
        args.length + 1 === fn.length
            ? fn(...args, next)
            : curryUnary(fn, args.concat(next));

export default curryUnary;

export { curryUnary, curryVariadic };
