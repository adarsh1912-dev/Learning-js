
console.log("Program for printing the factorial of a given number");


function Factorial(i){

    let ans = 1;
    for(let k=2; k<=i; k++){
        ans*=k;
    }

    console.log("Factorial of given number is : ", ans);
}