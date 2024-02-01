// // Array callback funaction -- 

// const a = [4 ,5 ,6 , -8 , 9, -5 ,-1, 0, -8 ,10];

// // used find() method to  find the firstNegativ number -- 

// let firstNeg = (num) => {
//     return num < 0 ;
// }
// result  = a.find(firstNeg);
// console.log(result);   // -8

// //-------------------------------- find Index number ----

// let firstNegtig = (num) => {
//     return num < 0 ;
// }
// result2  = a.findIndex(firstNegtig);
// console.log(result2);    // return index value = 3

// // ------------------------

// const b = [4 ,5 ,6 , -8 , 9, -5 ,-1, 0, -8 ,10];

// b.forEach((num, i ) => {
//    console.log('array number' ,num , i );
// })
// --------------------------------------
const c = [4 ,5 ,-6 , -8 , 9, -5 ,-1, 0, -8 ,10];

let firstNag = (num) => {
    return num < 0;
}
let result = c.find(firstNag);
console.log(result);