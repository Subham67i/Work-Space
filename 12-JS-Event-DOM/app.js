// Event handlers -----

// function myFunction(){
//     console.log('i was clicked');
// }

// let mouseOver = () => {
//     console.log('mouse over');
// }

// function keyPressEvent() {
//     console.log('key was pressed');
// }

// function keyDownEvent(){
//     console.log('key down event');
// }

// function keyUpEvent(){
//     console.log('key up event');
// }

// ---- Event Listenears ------

// let box1 = document.getElementById('box-1');
// box1.addEventListener('click', (e) => {
//     console.log('click by event' , e);
// });
// box1.addEventListener('mousemove', (e) => {
//     console.log('click by event 2', e.clientX , e.clientY);
// })

// key event -- 

let nameInput = document.getElementById('nameInput');
nameInput.addEventListener('keypress' , (e)=>{
    console.log('key', e.key);
})
// key focus
nameInput.addEventListener('focus', (e)=>{
    console.log('key', e);
})
// Bubbling--- vs  Capture---- 
let box1 = document.getElementById('box-1');
box1.addEventListener('click', () => {
    console.log('clicked on box ', );
})

let container = document.getElementById('container');
container.addEventListener('click',()=>{
    console.log('click container ');
})