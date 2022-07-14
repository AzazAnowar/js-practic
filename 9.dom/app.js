const myForm = document.querySelector("#my-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
    e.preventDefault();
    // console.log(nameInput.value);

    if(nameInput.value ==='' || emailInput.value ===''){
        msg.classList.add('error');
        msg.innerHTML = 'Please Inter your Name and Email';

        // removing the error msg in 3 sec in js time is count in mullisecound
        setTimeout(() => msg.remove(), 3000);
    }else{
        // console.log('succcess');
        const li = document.createElement('li'); // create a li
        li.appendChild(document.createTextNode(`Name: ${nameInput.value} Email: ${emailInput.value}`)); // initialize the values of the li

        userList.appendChild(li);
        // clear the text fild
        nameInput.value = '';
        emailInput.value = '';
    }
}