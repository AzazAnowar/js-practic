// Functions

function addNum(num1, num2){
   return num1+num2;
};
console.log(addNum(5,5));
console.log(`Toptal number is ${addNum(5,5)}`);
console.log(`Toptal number is ${addNum(10,5)}`);

// arrow function

// adding tow number with arrow function
const addNum1 = (num1, num2) => {
   return `total is =${num1+num2}`;
}
console.log(addNum1(50,5));

// shorter version
const message = (message1,message2) => message1 + message2;

console.log(message("hi i am", " real"));

// better work with the foreach

// todos.forEach(todo => {
//    console.log(todo.text);
// });

// You can pass less or more arguments while calling a function. If you pass less arguments then rest of the parameters will be undefined. If you pass more arguments then additional arguments will be ignored.

function showMessage(firstName, lastName){
   return `Your name is ${firstName} ${lastName}`;
}

console.log(showMessage('Azaz', 'Anowar', 'Real'));
console.log(showMessage('Azaz', 'Anowar'));
console.log(showMessage('Azaz'));
console.log(showMessage(100,200));

// The Arguments Object

// All the functions in JavaScript can use arguments object by default. An arguments object includes value of each parameter.
// The arguments object is an array like object. You can access its values using index similar to array. However, it does not support array methods.

function showName(firstName, lastName){
   return `Hello ${arguments[0]} ${arguments[1]}`;
}
console.log(`this from arguments object ${showName('anowar', 'real')}`);

// An arguments object can be iterated using for loop.
function test1(){
   for(var i=0; i<arguments.length; i++){
      console.log(`theis is returned through for loop ${arguments[i]}`);
   }
}
test1('Azaz','Anowar','Real');

// A function can return another function in JavaScript.

function multiple(x){
   function fn(y){
      return x*y;
   }
   return fn;
}
var triple = multiple(3); //this is making a function
console.log(`This function is returning triple ${triple()}`);
console.log(`This function is returning triple ${triple(2)}`);
console.log(`This function is returning triple ${triple(3)}`);



// Points to Remember :
// JavaScript a function allows you to define a block of code, give it a name and then execute it as many times as you want.
// A function can be defined using function keyword and can be executed using () operator.
// A function can include one or more parameters. It is optional to specify function parameter values while executing it.
// JavaScript is a loosely-typed language. A function parameter can hold value of any data type.
// You can specify less or more arguments while calling function.
// All the functions can access arguments object by default instead of parameter names.
// A function can return a literal value or another function.
// A function can be assigned to a variable with different name.
// JavaScript allows you to create anonymous functions that must be assigned to a variable.