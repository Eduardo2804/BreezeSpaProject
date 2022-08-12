
function registerTreatments(){


    event.preventDefault();
 
     let categoryService  = document.querySelector('#category').value
     let serviceType = document.querySelector('#type').value
     let priceService = document.querySelector('#price').value
     
 
     console.log(categoryService);
     console.log(serviceType);
     console.log(priceService);
     
 
     fetch("http://localhost:8080/treatments", {
 
       
         method: 'POST',
         body: JSON.stringify({
 
              
             category: categoryService,
             type: serviceType,
             price: priceService,
 
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
