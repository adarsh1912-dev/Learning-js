const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question("Enter array elements (space separated): ", (answer) => {
	const arr = answer.trim().split(' ').map(Number);
	const sum = arr.reduce((acc, val) => acc + val, 0);

	console.log(`Sum of the given array is ${sum}`);
	rl.close();
});

