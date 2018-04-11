interface NamedPerson {
    name: string
    age?: number; //optional
    [propName: string]: any; //any property of any type
    greet(lastName: string): void;
}

function greet(person: NamedPerson) {
    console.log("Hello, " + person.name);
}

function changeName(person: NamedPerson) {
    person.name = "Anna";
}

const person: NamedPerson = {
    name: "Max",
    age: 27,
    hobbies: ["cooking", "sports"],
    greet(lastName: string) {
        console.log("Hi, I am " + this.name + " " + lastName);
    }
};

// greet({ name: "Max", age: 27 });
changeName(person);
greet(person);
person.greet("Anything");

class Person implements NamedPerson {
    name: string;
    lastName: string;
    greet(lastName: string) {
        console.log("Hi, I am " + this.name + " " + lastName);
    }
}
const myPerson = new Person();
myPerson.name = "Maximilian";
myPerson.lastName = "Anything";
greet(myPerson);
myPerson.greet(myPerson.lastName);


// Function types -------------------

interface DoubleValueFunc {
    (number1: number, number2: number): number;
}
let myDoubleFunction: DoubleValueFunc;
myDoubleFunction = function (value1: number, value2: number) {
    return (value1 + value2) * 2;
}
console.log(myDoubleFunction(10, 20));


// Interface inheritance -------------------

interface AgedPerson extends NamedPerson {
    age: number; //override optionality of age property
}
const oldPerson: AgedPerson = {
    age: 27,
    name: "Max",
    greet(lastName: string) {
        console.log("hello!");
    }
}
console.log(oldPerson);