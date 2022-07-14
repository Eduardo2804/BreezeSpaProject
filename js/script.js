const submit  = document.querySelector('#submit');
window.alert("Testing");

function registerUser() {
    let firstName  = document.querySelector('#firstName');
    console.log(firstName)
}

const saveUser = async() =>  { 

    let response = await fetch('localhost:8080/staffs');
    console.log(response);



}

submit.addEventListener('click', saveUser);

