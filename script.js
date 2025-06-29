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
let floatNumber;

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

        if(display.textContent==="0") display.textContent="";

    
        display.textContent+=numbers[i].textContent;
        
        if(num2===undefined) num1=parseFloat(display.textContent);
        else num2=parseFloat(display.textContent);

    
       
        
    })
}





let operators=document.querySelectorAll(".operator")

for(let i=0; i<operators.length; i++){

    operators[i].addEventListener("click", () =>{

        display.textContent="";
        num2=display.textContent;

        if(sum) num1=sum;
    
        operator=operators[i].textContent;

        

    })
}


let equals=document.querySelector(".equals");

equals.addEventListener("click", () => {

    
    
    sum=operate(num1, num2, operator);

    if(sum) display.textContent= sum;
    
    
    
    
   
})


let dot=document.querySelector(".dot");

dot.addEventListener("click", ()=>{

    if(display.textContent==="0" || display.textContent==="") display.textContent="0.";
    if(!display.textContent.includes(".")) display.textContent+=".";
    
   })

