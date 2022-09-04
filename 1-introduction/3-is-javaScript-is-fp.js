/*
    Is JavaScript functional?
    ===========================

    JavaScript is sort of functional programming.
    JavaScript has some FP features like : 
    first-class functions, anonymous functions, recursion, and closures.

    JavaScript has non FP features like : 
    side effects (impurity), mutable objects, and practical limits to recursion.

    JavaScript is not purely FP, but it has all the tools to work as it were one :

*/

// 1- Functions as first-class objects :
// It means you can do everything with functions , what you can do with other objects,
// like store them in a variable, pass them as argument to another function or return
// them as a result of calling other functions.

function getUsers (successCallback, errorCallback)
{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => 
    {
        if(res.status === 200)
        {
            return  res.json();
            
        }
        else
        {
            return false;
        }
        
    })
    .then (users => 
    {
        if (users)
        {
            successCallback(users);
        }
        else
        {
            errorCallback();
        }
        
    })
    .catch(err => console.log(err));
}

getUsers(function(data)
{
    console.log("users ", data);
}, 
function()
{
    console.log(" Failed to get users");
});


// 2- Recursion
// The idea of a function can call it self at certain point and when that happened,
// it can continue working with whatever result it has received.
// Example : factorial function n!
// If n = 0 then n!= 1 else n! = n * (n-1)!

function findFactorial (num)
{
    if ( num === 0)
        return 1;
    
    else
        return num * findFactorial(num - 1);
    
}

console.log (findFactorial(5));

// 3- closures : 
// Are a way to implement data hiding with private variables.
// AS function not only can access its own private variables, but also to everything outside 
// the context of the function

function getCount ()
{
    let count = 0;
    return function ()
    {
        count++;
        return count;
    }
}

const innerFunction =  getCount();
console.log( innerFunction() ); // 1
console.log( innerFunction() ); // 2
console.log( innerFunction() ); // 3

// Even after getCount() exits, the inner function still has access to count, but that
// variable is not accessible to any other parts of your code. However, this is a bad example
// for FP, because the function return different outputs for the same input.

// 4- arrow functions:
// They can be used everywhere except as constructors

const add = (num1, num2) => num1 + num2;


// 5- spread operator :  
// Using the spread operator helps write a shorter, more concise code

// Rest operator
const minNumber = (...args) => Math.min(...args);

console.log( minNumber(10, 2, 3,4, 5, 12));

// It can also be used to join arrays and objects.

// How to work with JavaScript ?
// THe latest version of JavaScript is E10 , which is not supported by all browsers , therefore
// We can use transpiler to convert ES10 TO ES5, which is supported by all browsers.
// The most popular transpiler for JavaScript is Babel https://babeljs.io/

// Using typeScript is also a good option http:/​/​www.​typescriptlang.​org/​

// As for testing a nice library for that is https://jasmine.github.io/