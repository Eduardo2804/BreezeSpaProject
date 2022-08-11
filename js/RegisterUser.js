

function registerUser(){



  event.preventDefault();

   let myfirstName  = document.querySelector('#firstName').value
   let mylastName = document.querySelector('#lastName').value
   let mygender = document.getElementById("#gender")
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
           phoneNumber: myphone

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
         }); 
}


/*//comunication with API

const listCustomers = async () => {

  const response = await fetch('http://localhost:8080/customers')
  const data = await response.json()
  console.log(data)

  data.forEach(item => {
 
      const containerCustomerElement = document.getElementById("customer-container")


//connecting to element template   

      const template = document.getElementById("listCos")

//cloning the element template from listCustomer html
      const customerElement = document.importNode(template.content, true)

//fill up the cloned template with data   
      const customersAtributes = customerElement.querySelectorAll("span")
      
      customersAtributes[0].innerText = item.id
      customersAtributes[1].innerText = item.firstName
      customersAtributes[2].innerText = item.lastName
      customersAtributes[3].innerText = item.genrer
      customersAtributes[4].innerText = item.address
      customersAtributes[5].innerText = item.phone
      
//add the element customer inside the container of customer
      containerCustomerElement.append(customerElement)
      
  })
}

const listById = () => {

  
}


window.onload = () => {

  listCustomers()
  
  const btSelectCustomer = document.getElementById("buttonList")

  btSelectCustomer.onclick = () => {

      



  }

  



}*/


 