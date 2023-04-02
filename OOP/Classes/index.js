//Basic syntax
class MyClass {
    constructor(color) {
        this.color = color;
    }

    // instatnce methods:
    getColor() {
        return this.color;
    }
}

let myInstance = new MyClass('red');

// console.log(myInstance.getColor());


// User type 'Class' :

class User {
    constructor(name) {
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

let myUser = new User('Safwan');
// console.log(myUser.getName());


// Class inheritance
class Animal{
    // Class Methods
    constructor(name) {
        //props
        this.speed = 0;
        this.name = name;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }

    stop() {
        this.speed = 0;
        console.log(`${this.name} stands still.`);
    }
}

class Wolf extends Animal{
    constructor(name, food) {
        super(name);
        this.food = food;
    }
    eat() {
        console.log(`${this.name} is eating ${this.food}`);
    }
}


// Examples:
let animal1 = new Animal('My Pet');

let myPet = new Wolf('my Wolf','rabbits');

// console.log(myPet);
// myPet.eat();

// Static props and methods

class Employee {
   static typeName() {
        return this === Employee
    }
    constructor(type) {
        this.type = type;
    }
}

//console.log(Employee.typeName());
let mohannad = new Employee('freelancer');


// console.log(mohannad.typeName()); // TypeError: mohannad.typeName is not a function

class Article{
    
    static publisher = 'Safwan Kherallah';
    
        constructor(title, date) {
        this.title = title;
        this.date = date;
        
    }
}

//console.log(Article.publisher);
//console.log(new Article('JS', '26/03/2023').publisher) // undefined

class Dogs {
    static planet = 'Earth';

    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }

    run(speed = 0) {
        this.speed += speed;
        console.log(`${this.name} runs with speed ${this.speed}`);
    }


    static compare(dogA, dogB) {
        return dogA.speed - dogB.speed;
    }
}


// inherit from Dogs

class Husskey extends Dogs{
    bark() {
        return 'haw haw';
    }
}