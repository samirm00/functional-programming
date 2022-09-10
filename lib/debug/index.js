/*
  the intercept function is curried, tagged and configurable
  properties on it are useable without a curry

  all functions are unary
    except config options on debug, which only impact matter for debugging side-effects
 */

// ===== core function =====

const intercept =
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

intercept.pause = (thing) => {
    debugger;
    return thing;
};

// --- all of the console methods

Object.entries(console).reduce(
    (_intercept, next) => (
        // gymnastics so there's a named function in the callstack
        (_intercept[next[0]] = new Function(
            `return function ${next[0]}(thing) { console.${next[0]}(thing); return thing; }`,
        )()),
        _intercept
    ),
    intercept,
);

// ===== export the function =====

export const debug = Object.freeze(intercept);

export default debug;
