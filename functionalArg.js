// Functional Argument
function sum(a, b){
   return a+b;
}

function substract(a, b){
   return a-b;
}

function multiply(a, b){
   return a*b;
}

function doMaths(a, b, func){
   return func(a, b)
}

console.log(doMaths(1,3,multiply))