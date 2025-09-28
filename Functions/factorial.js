
console.log(".............Program for finding factorial of a number in javaScript..............");

let n = 5;


let fact = (n) => {

	if (n === 0) return 1;
	return fact(n - 1) * n;
};

console.log("Factorial of ", n, " is : ", fact(n));
