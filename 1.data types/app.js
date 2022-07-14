// This is simple console print

console.log("Hello js");
console.error("This is an error");
console.warn("this is an warning");

// veriables declaration
// var , let , const

let age = 30;
age = 40;
console.log(age);
// let can re-assign any variable later

const age1 = 31;
// age1 = 30;
console.log(age1);
// const cannor be changed in a simillar scope

// data types :: string, number, boolean, null, undefined

const myName = 'Anowar';
const age2 = 28;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof myName);
console.log(typeof age2);
console.log(typeof rating);
console.log(typeof isCool);
console.log(typeof x);
console.log(typeof y);
console.log(typeof z);

// string concatenation
//older version
console.log('Hello i am ' +myName+ 'and I am ' +age);

// Template string

console.log(`Hello i am ${myName} and i am ${age}`);

const hello = `Hello i am ${myName} and i am ${age}`;
console.log(hello);