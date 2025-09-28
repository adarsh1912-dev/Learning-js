
let isEven = (a) => {
    return a % 2 == 0;
};

let num = 10;

if(isEven(num)){
    console.log(`${num} is even`);
}
else{
    console.log(`${num} is odd`);
}