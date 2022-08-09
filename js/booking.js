


document.addEventListener("DOMContentLoaded", () => {
  
getTreatement();


});

let mytreatment = document.querySelector("#treatment");

//get all the tratments in the spa
function getTreatement(){
    fetch("http://localhost:8080/treatments")
    .then((response) => response.json())
    .then((data) => {
        data.map((item) => {
            let newoption = document.createElement("option");
            let optiontext = document.createTextNode(`${item.category} - ${item.type} - Price €${item.price}`)
            newoption.appendChild(optiontext)
            mytreatment.appendChild(newoption); 
    });
});
}

//Disable tuesday - day off 
//Reference code at: https://stackoverflow.com/questions/49863189/disable-weekends-on-html-5-input-type-date

let picker = document.getElementById("date");
picker.addEventListener("input", function (e) {
  var day = new Date(this.value).getUTCDay();
  if ([2].includes(day)) {
    e.preventDefault();
    this.value = "";
    daterror.innerHTML = `<p>Sorry, Unfortunally Spa is not open on Tuesdays.</p>`;
  }
});

//Disable past dates in calendar
var dt = new Date();
dtyear = dt.getFullYear();
dtmonth = dt.getMonth() + 1;
if (dtmonth < 10) {
  dtmonth = "0" + dtmonth;
}
dtday = dt.getDate();
if (dtday < 10) {
  dtday = "0" + dtday;
}
mindate = dtyear + "-" + dtmonth + "-" + dtday;

let bookdate = document.querySelector("#date");
bookdate.setAttribute("min", mindate);




//booking section - sending data to database 
  

        function getbooking(){
    

        let selectedtreatment = document.querySelector('#treatment').value;
        let booktime = document.querySelector('#time').value;
        let bookdate = document.querySelector('#date').value;
        

        

        console.log(selectedtreatment);
        console.log(booktime);
        console.log(bookdate);
        

       

       fetch("http://localhost:8080/booking", {

        method:'POST',
        body: JSON.stringify({
            

            treatment: selectedtreatment,
            time: booktime,
            date: bookdate,
            
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
         

        
        


//time picker

/*$(function() {
  $('#timepicker').timepicker({
      timeFormat: 'h:mm p',
      interval: 30,
      minTime: '10',
      maxTime: '6:00pm',
      defaultTime: '11',
      startTime: '10:00',
      dynamic: false,
      dropdown: true,
      scrollbar: true
  });});*/
  






        





      







