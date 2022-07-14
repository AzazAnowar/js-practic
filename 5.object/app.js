// object literals

const person = {
    firstName : 'Azaz',
    lastName : 'Anowar',
    age : 27,
    hobies :['driving','gamming', 'hikeing','painting'],
    address : {
        street: 'outer circular road',
        houseNo: '370',
        city: 'Dhake'
    }
};
console.log(person);
console.log(person.firstName, person.lastName, person.age);
console.log(person.address);
console.log(person.hobies[0]);
console.log(person.address.houseNo);

// another way of accessing data from object

const {firstName, lastName, address:{street},address:{houseNo},address:{city}} = person;

console.log(firstName);
console.log(person.address);
console.log(street);
console.log(houseNo);
console.log(city);

// adding new proparty

person.email = 'azazanowar@gmail.com';
console.log(person);
console.log(person.email);

// object inside an array

const todo = [{id: 1, text: 'drink tea', isDone: true},
    {id: 2, text: 'meating with the boss', isDone: true},
    {id: 3, text: 'compleate the unfinished project', isDone: false}
]
console.log(todo);
console.log(todo[0].text);
console.log(todo[1].text);

//creating a JSON format

const todoJSON = JSON.stringify(todo);
console.log(todoJSON);

// loop through an arrays
for(let i=0; i<todo.length; i++){
    console.log(todo[i].text);
}

// better way
for(let todos of todo){
    // console.log(todos);
    console.log(todos.id);
    console.log(todos.text);
    console.log(todos.isDone);
}

//high order array methods
// 1.foreach
todo.forEach(function(todos){
    console.log(todos.id);
    console.log(todos.text);
});

// 2. map
const todoText = todo.map(function(todos){
    return todos.text;
});
console.log(todoText);

// 3.filter
const todoCoplited = todo.filter(function(todos){
    return todos.isDone === true;
});
console.log(todoCoplited);


const todoCoplited1 = todo.filter(function(todos){
    return todos.isDone === true;
}).map(function(todos){
    return todos.text;
});
console.log(todoCoplited1);