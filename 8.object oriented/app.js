// constractor function always stars with a capital letter

//constracting function

function Person(firstName, lastName, dob){
   this.firstName = firstName;
   this.lastName = lastName;
   this.dob = dob;
   // problem faccing
   this.dob = new Date(dob); 
   this.getBirthYear = function(){
       return this.dob.getFullYear();
    };
    this.getFullName = function(){
       return `${this.firstName} ${this.lastName}`;
    };
};
// declearing a prototype
Person.prototype.getFullName = function(){
   return `${this.firstName} ${this.lastName}`;
}

// class declearing in es6

class Car{
   constructor (firstName, lastName, dob){
      this.firstName = firstName;
      this.lastName = lastName;
      // this.dob = dob;
      this.dob = new Date(dob);
   }
   getFullName (){
      return `${this.firstName} ${this.lastName}`;
   }
   getFullYear(){
      return this.dob.getFullYear();
   }
}

// instantiate object

const person1 = new Person('Azaz','Anowar', '1997,04,24');
const person2 = new Person('Riya','Fahmida', '30-12-1999');
const person3 = new Person('John','Doe','1980,02,20')
console.log(person1); 
console.log(person2.firstName); 
// console.log(person2.dob.getFullYear()); 

// console.log(person3.getFullYear());

console.log(person1.getFullName());
console.log(person2.getFullName());

const car1 = new Car('Toyota', 'Corola', '3-3-2020');
console.log(car1);
console.log(car1.getFullName());
console.log(car1.getFullYear());

