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

    return num1/num2;
}

let num1;
let num2;
let operator;

let operate = function (num1,num2, operator){

   if (operator==="+") return add(num1, num2);
   if (operator ==="-") return subtract(num1, num2);
   if (operator ==="*") return multiply(num1, num2);
   if (operator ==="/") return divide(num1, num2);
}


let display= document.querySelector("p");
display.innerHTML="1000";