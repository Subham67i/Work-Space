// step - 1 to create newPromises : .... 
// synchnoures nature -- coade
const ticket = new Promise(function(resolve , reject){
    let isBoarded = false;
    if(isBoarded){
        resolve('you are in the flight')
    }
    else{
        reject('you are not in flight')
    }
})
// step - 2 use the promises
.then((data)=>{
    console.log('ooh yes',data);
})
.catch((data)=>{
    console.log('ooh no', data);
})