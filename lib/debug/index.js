/*
  the debug function is curried, tagged and configurable
  properties on it are useable without a curry

  all functions are unary
    except config options on debug, which only impact matter for debugging side-effects
 */

// ===== core function =====

const debug =
    (
        tag = 'debug:', // visible in debugger even if `log` is false
        { pause = false, log = true, out = console.log } = {},
    ) =>
    (thing) => {
        if (log) out(tag, thing);
        if (pause) debugger;
        return thing;
    };

// ===== utility properties =====

// --- the debugger statement

debug.pause = (thing) => {
    debugger;
    return thing;
};

// --- inspect a function's inputs/outputs

// https://towardsdatascience.com/avoid-debuggers-with-functional-programming-43ea379605dd
debug.trace =
    (fn, tag = '') =>
    (...args) => {
        const result = fn(...args);
        const label = tag
            ? tag + ':'
            : fn.name === 'anonymous'
            ? ''
            : fn.name + ':';
        console.log(label, ...args, ' -> ', result);
        return result;
    };

// ===== funcitonalized console methods =====

// --- all of the console methods

debug.c = Object.freeze(
    Object.entries(console).reduce(
        (fpc, next) => (
            // gymnastics so there's a named function in the callstack
            (fpc[next[0]] = new Function(
                `return function ${next[0]}(thing) { console.${next[0]}(thing); return thing; }`,
            )()),
            fpc
        ),
        {},
    ),
);

// ===== export the function =====

Object.freeze(debug);

export default debug;
