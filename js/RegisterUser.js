
//Function called when button to book is clicked
function registerUser(){



  event.preventDefault();

   let myfirstName  = document.querySelector('#firstName').value
   let mylastName = document.querySelector('#lastName').value
   let mygender = document.querySelector('#gender')
   let myaddress = document.querySelector('#address').value
   let myemail = document.querySelector('#email').value
   let mypassword = document.querySelector('#password').value
   let myphone = document.querySelector('#phoneNumber').value
   

   console.log(myfirstName);
   console.log(mylastName);
   console.log(mygender);
   console.log(myaddress);
   console.log(myemail);
   console.log(mypassword);
   console.log(myphone);
   
   fetch("http://localhost:8080/user", {

     
       method: 'POST',
       body: JSON.stringify({

            
           firstName: myfirstName,
           lastName: mylastName,
           gender: mygender,
           address: myaddress,
           email: myemail,
           password: mypassword,
           phoneNumber: myphone,
          

       }),

       headers: {
           "Content-Type": "application/json; charset=UTF-8",
         },
       })

       .then(function (response) {
           return response.json();
         })
         .then(function (data) {
          console.log(data)
          let usercontainer = document.querySelector("#usercontainer");
          let msgcontainer = document.querySelector("#tkscontainer");
          usercontainer.classList.add("containerhidden");
          msgcontainer.classList.remove("containerhidden");
          
         }); 
}



 