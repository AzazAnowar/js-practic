// single selctor

console.log(document.getElementById('my-form'));
console.log(document.querySelector('.container'));
console.log(document.querySelector('h1'));
// const form = document.getElementById('my-form');
// console.log(form);

// multiple selector

console.log(document.querySelectorAll('.items')); //this acts like an array. we can use array methods
console.log(document.getElementsByClassName('items')); // this is not acts like an arry.

//looping through items

const items = document.querySelectorAll('.items');
items.forEach((item) => console.log(item));

// manupulating object

const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
ul.firstElementChild.textContent = "Hello Js";
ul.children[1].innerText = "Anowar";
ul.lastElementChild.innerHTML = "<h1>This is a h1</h1>"

// event listener

const btn = document.querySelector(".btn");
// btn.style.background = 'red';
btn.addEventListener('click', (e)=>{
    e.preventDefault(); // preventing default functionality because this is a submit btn
    console.log("clicked");
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.className);
    document.querySelector("#my-form").style.background = "#ccc";
    document.querySelector('body').classList.add("bg-dark");
});

// different kind of envents : mouseover, mouseout, 