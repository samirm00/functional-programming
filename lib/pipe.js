// adapted from 1-liners

const pipeUnary = (fns) => fns.reduceRight((f, g) => (arg) => f(g(arg)));

const pipeVariadic = (...fns) =>
    fns.reduceRight(
        (f, g) =>
            (...args) =>
                f(g(...args)),
    );

export default pipeUnary;

export { pipeUnary, pipeVariadic };
