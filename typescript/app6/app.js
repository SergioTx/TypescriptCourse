function greet(person) {
    console.log("Hello, " + person.name);
}
function changeName(person) {
    person.name = "Anna";
}
var person = {
    name: "Max",
    age: 27,
    hobbies: ["cooking", "sports"],
    greet: function (lastName) {
        console.log("Hi, I am " + this.name + " " + lastName);
    }
};
// greet({ name: "Max", age: 27 });
changeName(person);
greet(person);
person.greet("Anything");
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.greet = function (lastName) {
        console.log("Hi, I am " + this.name + " " + lastName);
    };
    return Person;
}());
var myPerson = new Person();
myPerson.name = "Maximilian";
myPerson.lastName = "Anything";
greet(myPerson);
myPerson.greet(myPerson.lastName);
var myDoubleFunction;
myDoubleFunction = function (value1, value2) {
    return (value1 + value2) * 2;
};
console.log(myDoubleFunction(10, 20));
var oldPerson = {
    age: 27,
    name: "Max",
    greet: function (lastName) {
        console.log("hello!");
    }
};
console.log(oldPerson);
