let add = function (num1, num2){

    return num1+num2;
}

let subtract = function(num1, num2) {

    return num1-num2;
	
}

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

const listNums = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const listOperators = ["+", "*", "/"];

let operate = function (num1,num2, operator){

   if (operator==="+") return add(num1, num2);
   else if (operator ==="-") return subtract(num1, num2);
   else if (operator ==="x") return multiply(num1, num2);
   else if (operator ==="÷") return divide(num1, num2);
}

let checkForSums = function () {

    if(display.textContent==sum) {

            display.textContent="";
            num2=undefined;
            sum=undefined; 
            operator=undefined; 
            
        }

    else if(display.textContent==sum2) {
         
            display.textContent="";
            sum2=undefined;               

        }
}

let checkForZero = function () {

    if(display.textContent==="0") {
            
            display.textContent="";                   
        }
}


let captureValues= function() {

    if(num2===undefined) num1=parseFloat(display.textContent);
    else num2=parseFloat(display.textContent);
}

let handleDot = function () {

    checkForSums();

    if(display.textContent==="0" || display.textContent==="") {
        display.textContent="0.";
        captureValues();}
    if(!display.textContent.includes(".")) {
        display.textContent+=".";
        captureValues();}
    
}

let checkPrerequisitesForOperators = function(){

    if(display.textContent==="-") display.textContent="";
    else if(sum!=undefined && display.textContent==sum) sum=undefined;

}

let calculate = function() {
   
    if(display.textContent!=sum2) display.textContent="";

    if(num2!=undefined && num2!==""){
               
            sum2=operate(num1, num2, operator);
            display.textContent=sum2;
            num1=sum2; 
        }
        
    num2="";
}

let handleMinus= function() {

    if(operator==undefined && display.textContent===""){

        display.textContent="-";
    }

    else{

        if(sum!=undefined && display.textContent==sum) sum=undefined;

        if(num1!=undefined) {

            calculate(); 
            operator="-";        
         }      
    }
}

let handleDel = function() {

    if(display.textContent==="-") display.textContent="";

    else if(display.textContent!=sum && display.textContent!=sum2 && display.textContent!=="") {      
    
        if(num1!=undefined && num1==display.textContent && sum==undefined && sum2==undefined && num2==undefined && operator==undefined){
            display.textContent=display.textContent.slice(0,-1);
            if(display.textContent!=="" && display.textContent!=="-" && display.textContent!=="0.") num1=parseFloat(display.textContent);
            else num1=undefined;
        }

        else if(num2!=undefined && num2==display.textContent && num1!=undefined){
            display.textContent=display.textContent.slice(0,-1);
            if(display.textContent!=="" && display.textContent!=="0.") num2=parseFloat(display.textContent);
            else num2=""; 
        }
    }
}

let handleClear = function () {

        num1=undefined;
        num2=undefined;
        sum=undefined;
        operator=undefined;
        sum2=undefined;
}

let handleEquals = function (){

   
     if(num1!=undefined && num2==undefined && sum==undefined && sum2==undefined){

        sum=num1;
     } 
            
     else if(num1!=undefined && num2!=undefined && num2!=="" && operator !=undefined)
    
        {  sum=operate(num1, num2, operator); }
    
     if(sum!=undefined) {
        display.textContent= sum;}
       
     else if(num2===""){

        display.textContent="ERROR";
        handleClear();       
         
}
   
}

let display= document.querySelector("p");


let numbers=document.querySelectorAll(".number");

for(let i=0; i<numbers.length; i++){

    numbers[i].addEventListener("click", () =>{

        checkForSums();
        checkForZero();     

        display.textContent+=numbers[i].textContent;
        
        captureValues();
      
        
    });
}

let dot=document.querySelector(".dot");
dot.addEventListener("click", handleDot);


let operators=document.querySelectorAll(".operator");

for(let i=0; i<operators.length; i++){

    operators[i].addEventListener("click", () =>{

        checkPrerequisitesForOperators();

        if(num1!=undefined) {

            calculate(); 
            operator=operators[i].textContent;      
        }

    });
}

let minus =document.querySelector(".subtract");
minus.addEventListener("click", handleMinus); 


let del = document.querySelector(".delete");
del.addEventListener("click", handleDel);

let clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    
    display.textContent="";
    handleClear();

});


let equals=document.querySelector(".equals");
equals.addEventListener("click", handleEquals);


// Keyboard Support

document.addEventListener("keydown", (event) => {

     event.preventDefault();

     let key= event.key; 

     if (listNums.includes(key)){
        
        checkForSums();
        checkForZero();     

        display.textContent+=key;

        captureValues();

    }

     else if(key===".") handleDot();

     else if (listOperators.includes(key)){

        checkPrerequisitesForOperators();

        if(num1!=undefined) {

            calculate();
            
            if(key==="+") operator ="+";
            else if(key==="*") operator="x";
            else if(key==="/") operator="÷";
        }
    }

     else if(key==="-") handleMinus();

     else if(key==="Backspace") handleDel();

     else if(key==="c" || key==="C" || key==="Escape") {

        display.textContent="";
        handleClear();
     }

     else if(key==="Enter") handleEquals();
    
});





