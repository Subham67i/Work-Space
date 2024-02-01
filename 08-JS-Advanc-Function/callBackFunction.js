// callback function -------

//  function greet(name  , callback){
//     console.log('hi' + '' + name);
//     callback();
//  }

//  // callback function 

//   function callMe(){
//     console.log('i am callback function');
//   }

//   // passing function as a argument
//   greet('subham', callMe)

// -------------------- 

let calculator = ( a ,b , operation) => {
    return operation(a,b);
};

// method ---- 1
let addition = calculator( 4 , 5 , function(num1 , num2){
    return num1 + num2;
});
console.log(addition);

// method --- 2 ----
let subtraction = (a , b) => a - b;

let subResult = calculator(8, 4 , subtraction);

console.log(subResult);

// method ---- 3 
function multiplay(a, b){
    return a * b;
}
let mulResults = calculator(4 , 6 , multiplay);
console.log(mulResults);

// multiplay ----------------

let mulResult = calculator(6 , 7 , function(mul1 , mul2){
    return mul1 * mul2
});

console.log(mulResult);

// division -----------

let divResult = calculator(50 , 5 , function(div1 , div2){
    return div1 / div2
});
console.log(divResult);