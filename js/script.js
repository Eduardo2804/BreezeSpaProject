const submit  = document.querySelector('#submit');


const saveUser = async() =>  { 

    let response = await fetch('localhost:8080/staffs');
    console.log(response);



}

submit.addEventListener('click', saveUser);

