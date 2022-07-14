// string concatenation
//older version
console.log('Hello i am ' +myName+ 'and I am ' +age);

// Template string

console.log(`Hello i am ${myName} and i am ${age}`);

const hello = `Hello i am ${myName} and i am ${age}`;
console.log(hello);

//string proparty and methods
// proparty does't have a parenthesis (); methods have parenthesis ()

const s = 'Hello world';
console.log(s.length);
console.log(s.substring(0, 8).toUpperCase());
//split method
console.log(s.split(""));
const str = 'computer, technology, it, code, js';
console.log(str.split(", "));