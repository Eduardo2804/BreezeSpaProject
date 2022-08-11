

/*Declaring variables*/
let errorLogin = document.querySelector("#errorlogin");

/*Function to login (customer)*/
function login() {
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("id");
  let myemail = document.querySelector("#email").value;
  let mypassword = document.querySelector("#password").value;

  fetch("http://localhost:8080/login", {
    method: "POST",
    body: JSON.stringify({
      email: myemail,
      password: mypassword,
    }),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  })
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      if (data == "Sorry, Email not registered.") {
        errorLogin.innerHTML = `<p>${data}</p>`;
      } else if (data == "Wrong password.") {
        errorLogin.innerHTML = `<p>${data}</p>`;
      } else {
        let token = Math.random().toString(16).substring(2);
        console.log(token);
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("id", data);
        window.location.href="booking.html";
      }
    });
}


    


    



