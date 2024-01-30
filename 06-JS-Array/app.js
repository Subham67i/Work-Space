// array 
// const myArray = ['apple', 'mango','banana','orange'];
//  console.log(myArray);



//  assessing array elements
// const array1 = ['a', 'b', 'c', 'd', 'e'];
// console.log(array1[4]);


//  array properties
// const words = ['apple', 'orange',10,true];
//  console.log(words[3]);

// const student = [{
//     name : 'rahul',
//     roll : 35,
//     school : 'ips'
// },
// function hello(){
//     console.log('hello words');
// }];
// console.log(student);
 

//  length array
// const array2 = ['a', 'b', 'c', 'd', 'e'];
//  console.log(array2.length);

//  update array element ;
// const array3 = ['apple', 'banana', 'mango', 'orange'];
// console.log(array3);
// const newArray3 = array3;
// newArray3[3] = 'graps';
// console.log(array3);

// --------------------------// ------------------------------

// indexOf() index positon return , elements not present return = -1
const nums = [2,3,4,5,6,7,8,,85,45,];
// console.log(nums.indexOf(6)); 

// includes() return true or false
const num1 = [2,3,4,5,6,7,8,85,45,];
// console.log(num1.includes(2));     // true

// push() add new array elements at last 
const num2 = [2,3,4,5,6,7,8,85,45,];
num2.push('subham');
console.log(num2);

// unShift() add new array elements at front
const num3 = [2,3,4,5,6,7,8,85,45,];
num3.unshift('subham');
console.log(num3);

// pop() used to last array elements removed
const num4 = [2,3,4,5,6,7,8,85,45,];
num4.pop();
console.log(num4);

// shift()  used first Array elements removed
const num5 = [2,3,4,5,6,7,8,85,45,];
num5.shift();
console.log(num5);

// short() using Array elements assinding order .123456
const num6 = [2,3,4,5,6,7,8,85,45,];
num6.sort();
console.log(num6);

// slice() used create new array 
const num7 = [2,3,4,5,6,7,8,85,45,];
const subArray = num7.slice(3,5);
console.log(subArray);
 