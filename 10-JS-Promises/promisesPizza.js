// promises pizza ---- 

// pizza > dough > cheese

function getCheese(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            let cheese = '🧀';
            resolve(cheese)
        },2000)
    });
}

function makeDough(cheese){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            let dough = cheese + '🍛';
            // resolve(dough)
            reject('bad cheese')
        },2000);
       
    });
}

function backPizza(dough){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            let pizza = dough + '🍕';
            resolve(pizza)
        },2000);
       
    });  
}


// async and await ---- function --- 

async function orderPizza(){
    try{
        let cheese = await getCheese();
    console.log('here is the cheese' , cheese);

    let dough = await makeDough(cheese);
    console.log('here is the dough', dough);
    
    let pizza = await backPizza(dough);
    console.log('here is the pizza' , pizza);
    }
    catch (error) {
        console.log('error occured', error);
    }
    console.log('Process ended');
}
orderPizza()

// getCheese()
//      .then((cheese)=>{
//         console.log('here is the cheese', cheese);
//         return makeDough(cheese);
//      })
//      .then((dough)=>{
//         console.log('here is the dough' , dough);
//         return backPizza(dough);
//      })
//      .then((pizza)=>{
//         console.log('here is the pizza', pizza);
//      })
//      .catch((data)=>{
//         console.log('error occered', data);
//      })
//      .finally(()=>{
//         console.log('Process ended');
//      })