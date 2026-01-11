// we will learn about factory functions in js

/*
    A factory function in JavaScript is a function that returns a new object each time it is called. Unlike constructor functions (which use the new keyword), factory functions are regular functions that create and return objects, often with methods and properties.

Key points:

No need for new keyword.
Can return any object (not limited to instances of a class).
Useful for creating multiple similar objects with shared or unique properties.

*/

function createCar(make, model) {
  return {
    make,
    model,
    drive() {
      console.log(`Driving a ${make} ${model}`);
    }
  };
}

const car1 = createCar('Toyota', 'Corolla');
const car2 = createCar('Honda', 'Civic');
car1.drive(); // Driving a Toyota Corolla
car2.drive(); // Driving a Honda Civic

// if we create new cars we will get a problem that function with same logic will be stored in memory again and again this problem will be solved by constructor functions.