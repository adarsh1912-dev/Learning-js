const myArray = [1, 2, 3, 4, 5, 6, 15, 67, 55];
console.log('myarray : ', myArray);

console.log('finding first element greater than 15 ....')

let ans = myArray.find(num => num > 15);

setTimeout(() => {
	console.log('Number greater than 15 in myarray is ', ans);
}, 4000);
