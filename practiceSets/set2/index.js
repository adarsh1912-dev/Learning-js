let product = {
	size: 'S',
	name: 'Jeans',
	fit: 'Slim fit'
};

let copyProduct = product;
console.log(`before modifying copyProduct `, copyProduct);
console.log(`before modifying copyProduct product is  `, product);

copyProduct.name = 'Shirt';

console.log(`after modifying copyProduct `, copyProduct);
console.log(`after modifying copyProduct product is `, product);

