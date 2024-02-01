// ------------------ Arrow function  ----------------

// function greet(){
//     console.log('hello');
// }
// greet();

let greet = () => {
    console.log('hello world');
}
greet()

// -----------------------------

let greets = (count) => {
    for(i = 0; i < count; i++) console.log('hello world');
}
greets(3)

// -------
// const squsre = (num) => num * num;
// console.log(squsre(2));

