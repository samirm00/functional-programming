import debug from './index.js';

import curry from '../curry.js';
import pipe from '../pipe.js';

// --- core function ---

// log: "hello", "world"
debug('hello')('world');

// log: hello, world.  and pause in the debugger
debug('hello', { pause: true })('world');

// pause in debugger, but don't log anything
debug('hello', { pause: true, log: false })('world');

// do nothing
debug('hello', { pause: false, log: false })('world');

// --- utility properties ---

// log, then pause, then trace
debug.c.trace(debug.pause(debug.c.log('hello')));

// --- debugging sequences of unary functions ---

const add = curry((a, b) => a + b);
const sub = curry((a, b) => a - b);
const mul = curry((a, b) => a * b);

const debugSequence = [
    debug('hello'),
    add(4),
    debug('pause!', { pause: true }),
    sub(2),
    debug.pause,
    mul(3),
    debug.c.log,
];

pipe(debugSequence)(1);

// --- trace values along the way

pipe([
    debug.trace(add(4), 'adding 4'),
    debug.trace(sub(2), 'subtracting from 2'),
    debug.trace(mul(3), 'multiplying by 3'),
    debug('final result'),
])(1);
