// by default whenever we call any function with new keyword it will return an object

function createUser(firstName, lastName, age){
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
}


const user1 = new createUser("Adarsh", "Raj", 24);
const user2 = new createUser("Ujjawal", "Raj", 22);

console.log(user1.__proto__ === user2.__proto__);