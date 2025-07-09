let add = function (num1, num2){

    return num1+num2;
}

let subtract = function(num1, num2) {

  return num1-num2;
	
};

let multiply = function (num1, num2){

    return num1*num2;
}

let divide = function(num1, num2){

    if (num2==0) return "ERROR"

    return num1/num2;
}

let num1;
let num2;
let sum;
let operator;
let sum2;

let operate = function (num1,num2, operator){

   if (operator==="+") return add(num1, num2);
   if (operator ==="-") return subtract(num1, num2);
   if (operator ==="x") return multiply(num1, num2);
   if (operator ==="÷") return divide(num1, num2);
}


let display= document.querySelector("p");


let numbers=document.querySelectorAll(".number")

for(let i=0; i<numbers.length; i++){

    numbers[i].addEventListener("click", () =>{

        if(display.textContent==="0") {
            
            display.textContent="";           
            
        }

        if(display.textContent==sum2){

            display.textContent="";
            sum2=undefined;          
            

        }
           
        if(display.textContent==sum) {
        
            
            display.textContent="";
            num2=undefined;
            sum=undefined; 
            

        }

        display.textContent+=numbers[i].textContent;
        
        if(num2===undefined) num1=parseFloat(display.textContent);
        else num2=parseFloat(display.textContent);
      
        
    })
}



let operators=document.querySelectorAll(".operator")

for(let i=0; i<operators.length; i++){

    operators[i].addEventListener("click", () =>{

        if(display.textContent==="-") display.textContent="";
        if(sum!=undefined && display.textContent==sum) sum=undefined;

        if(num1!=undefined)

    {

    
      if(display.textContent!=sum2) display.textContent="";   
      
       
      if(num2!=undefined && num2!==""){
            
             sum2=operate(num1, num2, operator);
             display.textContent=sum2;
             num1=sum2; 
             
                            
        }               

    
      num2=""; 

      operator=operators[i].textContent;

        
    }

    })
}


let equals=document.querySelector(".equals");

equals.addEventListener("click", () => {

    //  if(sum==undefined) {
    //  display.textContent=num1;
    //  num1= parseFloat(display.textContent);}
    

    //  if(num2!==""){

    //  if(num1!=undefined && num2==undefined && sum==undefined && sum2==undefined && operator==undefined){

    //     sum=num1;
        
    // }

     if(num1!=undefined && num2==undefined && sum==undefined && sum2==undefined){

        sum=num1;
     } 
    
        
     if( num1!=undefined && num1!=="" && num2!=undefined && num2!=="" && operator !=undefined)
    
        {  sum=operate(num1, num2, operator); }

     
     if(sum!=undefined) {
        display.textContent= sum;}
       
     if(num2===""){

        num2=undefined;
        sum2=undefined;
        operator=undefined;
        num1=undefined;
        sum=undefined; 
        display.textContent="ERROR";       
        
    // }
        
    
}
   
})


let dot=document.querySelector(".dot");

dot.addEventListener("click", ()=>{

    if(display.textContent==sum2){

            display.textContent="";
            sum2=undefined;          
            

        }

    
    if(display.textContent==sum) {
            
            display.textContent="";
            num2=undefined; 
            sum=undefined; 

        }
    if(display.textContent==="0" || display.textContent==="") display.textContent="0.";
    if(!display.textContent.includes(".")) display.textContent+=".";
    
   })


// inputting negative numbers

let minus =document.querySelector(".subtract");
minus.addEventListener("click", ()=>{


    if(operator==undefined && display.textContent===""){

        display.textContent="-";


    }

    else{

        if(sum!=undefined && display.textContent==sum) sum=undefined;

        if(num1!=undefined){


         if(display.textContent!=sum2) display.textContent="";

         if(num2!=undefined && num2!==""){

                    
            sum2=operate(num1, num2, operator);
            display.textContent=sum2;
            num1=sum2; 

         }

        
        num2="";

        operator="-";
    
    }

}

}) 

let clear = document.querySelector(".clear");

clear.addEventListener("click", () => {

        
        display.textContent="";
        num1=undefined;
        num2=undefined;
        sum=undefined;
        operator=undefined;
        sum2=undefined;


})
