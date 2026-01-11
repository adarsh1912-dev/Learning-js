// we can make any property private by adding '#' in the beginning .
// we must declare private properties outside of the constructor also.


class CreateUser{
    
    #age
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.#age = age;
    }

    getBirthYear = () => {
        return new Date().getFullYear() - this.age;
    };

    getFullName = () => {
        return this.firstName + ' ' + this.lastName;
    };

    getAge = () => {
        return this.#age;
    }

}


const user1 = new CreateUser('Adarsh', 'Raj', 2001);
const user2 = new CreateUser('Ujjawal', 'Raj', 2003);

// console.log(`Age of Adarsh is ${user1.getBirthYear()}`);

console.log(user1.getAge());