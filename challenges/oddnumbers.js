const myarray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log('myarray : ', myarray);

console.log('filtering array : ');

const newArray = myarray.filter(num => num % 2 != 0);
console.log('odd elements : ', newArray);
