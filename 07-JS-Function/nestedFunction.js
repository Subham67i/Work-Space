function addSquare(a,b){
    
    let sa = square(a);
    let sb = square(b);

    function square(num){
        return num * num;
    }
    return sa + sb;
}
console.log(addSquare(3,6));

