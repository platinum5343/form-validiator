// Code Starts Here..
const form = document.querySelector('#form');
const message = document.querySelector('#message');
const password1 = document.querySelector('#password1');
const password2 = document.querySelector('#password2');

let isValid = false;
let passwordMatch = false;

function validateForm(){
    isValid = form.checkValidity();
    console.log(isValid);
if(!isValid){
    message.textContent = 'please fill out all fields';
    message.style.color = 'red';
    password1.style.color = 'green';
    password2.style.color = 'green';
} else {
    if (password1.value == password2.value) {
        passwordMatch = true;

    } else {
        passwordMatch = false;
        message.textContent = 'Make sure password match'
        message.style.color = 'red';
        password1.style.color = 'red';
        password2.style.color = 'red';
        return;
    }
    if (isValid && passwordMatch){
        message.textContent = 'Register Successfully';
        message.style.color = 'green';
    }
}
}



form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateForm();
});
