const Myfunction = () =>{

         const text = document.querySelector('.text');
         const inputNumber = document.getElementById('number');
         document.getElementById('submit').addEventListener('click',() =>{

             if(inputNumber.value >= 25){
               text.innerHTML = inputNumber.value;
                 document.getElementById('text').innerHTML = "Your Are Adult";
                 
             }
             else if(inputNumber.value >= 18){
               text.innerHTML = inputNumber.value;
                 document.getElementById('text').innerHTML = "You Are teenager";
                 
             }
             else if(inputNumber.value >= 15){
               text.innerHTML = inputNumber.value;
                 document.getElementById('text').innerHTML = "You Are Minor";
                 
             }
             else if(inputNumber.value >= 12){
               text.innerHTML = inputNumber.value;
                document.getElementById('text').innerHTML = "You Are Kid ";
             }
             
             else if(inputNumber.value >= 10){
               text.innerHTML = inputNumber.value;
                document.getElementById('text').innerHTML = "You Are A child";
             }
             else if(inputNumber.value <= 3){
               text.innerHTML = inputNumber.value;
                document.getElementById('text').innerHTML = "You are baby";
             }
             else{
                document.getElementById('text').innerHTML = "Invalid Age";
             }
         })


     }


     Myfunction()