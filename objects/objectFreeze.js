/*

object.freeze(obj):

Completely locks the object.
You cannot add, remove, or change any properties.
The object becomes fully immutable.

const user = { name: "Ali" };
Object.freeze(user);
user.name = "Vali";   // Won't change
user.age = 25;        // Won't add
delete user.name;     // Won't delete
console.log(user);    // { name: "Ali" }


object.seal(obj):

Seals the object structure.
You cannot add or remove properties.
But you can still change the values of existing properties.

const car = { model: "Nexia", year: 2020 };
Object.seal(car);
car.year = 2022;      // Allowed
car.color = "black";  // Not added
delete car.model;     // Not deleted
console.log(car);     // { model: "Nexia", year: 2022 }

*/