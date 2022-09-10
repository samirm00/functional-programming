// adapted from 1-liners

const composeUnary = (fns) => fns.reduce((f, g) => (arg) => f(g(arg)));

const composeVariadic = (...fns) =>
    fns.reduce(
        (f, g) =>
            (...args) =>
                f(g(...args)),
    );

export default composeUnary;

export { composeUnary, composeVariadic };
