import debug from './index.js';

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
debug.trace(debug.pause(debug.log('hello')));

// --- debugging sequences of unary functions ---

const add = (a) => (b) => b + a;
const sub = (a) => (b) => b - a;
const mul = (a) => (b) => b * a;

const debugSequence = [
    debug('hello'),
    add(4),
    debug('pause!', { pause: true }),
    sub(2),
    debug.pause,
    mul(1),
    debug.log,
];

pipe(debugSequence)(1);
