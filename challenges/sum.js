const myArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('myarray : ', myArray);

console.log('calculating sum .......');

let sum = myArray.reduce((acc, num) => acc + num, 0);

setTimeout(() => {
	console.log('Sum of given array is : ', sum);
}, 2000);
