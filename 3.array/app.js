// arrays

const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['banana','apple','pears','oranges'];
console.log(fruits);
console.log(fruits[3]);
fruits[4]= 'grapes';
fruits.push('mangos');

//added to first
fruits.unshift('strawberries');
console.log(fruits);
fruits.pop();
console.log(fruits);
//check is array?
console.log(Array.isArray(fruits));
console.log(Array.isArray(myName));
console.log(fruits.indexOf('oranges'));

const arrType = typeof(fruits); // checking the veriable is array or not if array then return OBJEECT. because array in js is a special type of OBJECT
console.log(arrType);

const a = new Array(40);  //create an array with 40 undefiened items
const b = [50];           //create an array which has only one element
console.log(a);
console.log(b);