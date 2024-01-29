// ------- for loop -----

// for(let i=0; i<=10;i++){
//     console.log("subham",i);
// }
// 10 times subham 


// for(let i=1; i > 0; i++){
//     console.log(i);
// }
// infinite ---------


// for(let i=0; i <= 10; i = i + 2){
//     console.log(i);
// }
// adding 2 plus number 2 4 6 8 


// let result = '';
// for(let i=0; i<=10; i++){
//     if(i <= 9){
//         result += `${i} , `;
//     }
//     else{
//         result += `${i}`;
//     }
// }
// console.log(result);

//  ------ while loop ----

// let step = 6;
// while(step < 10){
//     console.log('step', step);
//     step += 1;
// }

// ---------- do-while loop --------

// let step = 11;
// do {
//    console.log('step', step);
//    step += 1;
// }while(step <= 10);

// continue & break 

// let step = 0;
// while(step < 5){
//     step += 1;
//     if(step === 2){
//         break;
//     }
//     console.log(step);
// }

let step = 0;
while(step < 5){
    step += 1;
    if(step === 2){
       continue;
    }
    console.log(step);
}