
let box1 = document.getElementById('box-1');
box1.innerHTML = "hello world";

box1.style.backgroundColor = 'red';

let box3 = document.getElementById('box-3')
box3.classList.add('round-border');

//----
let boxes = document.getElementsByClassName('box');
for(let i=0; i < boxes.length; i++){
   boxes[i].classList.add('round-border')
}

// remove  class 
box1.classList.remove('round-border')

//   creating element   -----------
let newParagraph = document.createElement('p');
newParagraph.innerHTML = "this ia my name";
newParagraph.classList.add('box' , 'round-border')

let container = document.getElementById('container');
container.appendChild(newParagraph)






// let myBody = document.body;
// console.log(myBody);

// // ----
// let box2 = document.getElementById('box-2');
// console.log(box2);

// //-----------

// let divs = document.getElementsByTagName('div');
// console.log(divs);

// // -----------------
// let boxes = document.getElementsByClassName(' box ');
// console.log(boxes);

// // -------- css qurtselector
// let select = document.querySelector('.container');
// console.log(select);



