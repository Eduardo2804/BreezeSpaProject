
function registerStaff(){






   event.preventDefault();

    let myfirstName  = document.querySelector('#firstName').value
    let mylastName = document.querySelector('#lastName').value
    let myjob = document.querySelector('#job').value


    console.log(myfirstName);
    console.log(mylastName);
    console.log(myjob);
  

    fetch("http://localhost:8080/staff", {

      
        method: 'POST',
        body: JSON.stringify({

             
            firstName: myfirstName,
            lastName: mylastName,
            job: myjob,


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

 

    


    




  








