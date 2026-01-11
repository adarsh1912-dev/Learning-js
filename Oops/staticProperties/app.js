// learning about static properties in js (static properties belong to class itself not to the object)

class CreateUser{
   
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getBirthYear = () => {
        return new Date().getFullYear() - this.age;
    };

    getFullName = () => {
        return this.firstName + ' ' + this.lastName;
    };

    // static property 

    static owner = 'Adarsh';

    // we also have a static block in which we can write any logic and it will run even if the constructor is not called

    static {
        console.log('Js king Adarsh');
    }

}

// anohther way of declaring static property of class
CreateUser.sayMyName = () => {
    return `Js king Adarsh Badsahhh`;
};


// const user1 = new CreateUser('Adarsh', 'Raj', 2001);
// const user2 = new CreateUser('Ujjawal', 'Raj', 2003);

// console.log(`Age of Adarsh is ${user1.getBirthYear()}`);




