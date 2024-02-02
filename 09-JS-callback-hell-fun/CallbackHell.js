// ex - setTimeout()  ------ 

// console.log('hello');

// setTimeout(function() {
//   console.log('hello world');
// },3000);

// console.log('hello');
//---------------------------

// callback function ----
//  callback hell function ---

function getCheese(callback) {
    setTimeout(()=>{
       let cheese = '🍕';
       console.log('here is cheese', cheese);
       callback(cheese);
    },2000)
}

function mackDough(cheese, callback){
    setTimeout(()=>{
        let dough = cheese + '🍳';
        console.log('here is the dough',dough);
        callback(dough)
    },2000)
}

function mackPizza(dough, callback){
    setTimeout(()=>{
        let pizza = dough + '🍛';
        console.log('here is my pizza', pizza);
        callback(pizza)
    },2000)
}

getCheese((cheese)=>{
    mackDough(cheese,(dough)=>{
       mackPizza(dough, (pizza)=>{
        console.log('got my pizza',pizza);
       })
    })
});

// pizza-> dough -> cheese