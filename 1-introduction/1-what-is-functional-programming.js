/*
    What is functional programming ? 
    ===============================

    - Functional programming (FP) : is a paradigm of building computer programs using expressions and functions without mutating state and data.

*/


// Pure vs. Impure Functions
// ========================

// Pure functions take some inputs and gives a fixed output and they have no side effects
// Example : 

const add = (a, b) => a + b;

// add is a pure function because for a fixed value a, b the output will always be the same. 

// Example : 
const specialNumber = 42;

const getId = (a) => specialNumber * a;

// getId is NOT a pure function, because it is using a global variable `specialNumber`  
// if the value of `specialNumber` changed then we will have 
// different output for the same input. 


// Example : 
let id = 0 ;
const getNewId  = () => ++id;

// getNewId is NOT a pure function 1- it uses a non local variable , 2- it has a side effect on the global variable `id`


/*
    So far, we have learned that functional programming is dependent on a few rules : 

    1- Don’t mutate data.
    2- Use pure functions: fixed output for fixed inputs, and no side effects.
    3- Use expressions and declarations.

*/


