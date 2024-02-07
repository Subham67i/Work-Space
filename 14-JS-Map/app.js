let students = [
    {id:'001',name:'Anish',sports:'cricket'},
    {id:'002',name:'Rashmi',sports:'Tabletanish'},
    {id:'003',name:'Canchal',sports:'Football'},
    {id:'004',name:'Suraj',sports:'Basketball'},
    {id:'005',name:'Rahul',sports:'Chees'},
    {id:'006',name:'Janmejay',sports:'Hockey'}
];

// let newArray = students.filter(curValue,index,array) => {

// }

// even number filter out
// let newArray = students.filter((curValue) => {
//     if(curValue.id % 2 == 0) return true;
//     else return false;
// })
// console.log('even number.....');
// console.log(newArray);

// // odd number filter out---

// let newAry = students.filter((curValue)=>{
//    if(curValue.id % 2 ==1) return true;
//    else return false;
// })
// console.log('odd number');
// console.log(newAry);

// map ----

let names = students.filter(curValue => curValue.sports === 'cricket')          
.map((curValue)=>{
    return `<li>${(curValue.name)}</li>`
})
console.log(names);


// football player---
let namess = students.filter(curValue => curValue.sports === 'Football')          
.map((curValue)=>{
    return `<li>${(curValue.name)}</li>`
})
console.log(namess);

let div = document.getElementById('container');
div.innerHTML = `<ul>${names.join('')}</ul>`
