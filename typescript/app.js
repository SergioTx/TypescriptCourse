"use strict";
// let & const
console.log('LET & CONST');
var variable = 'Text';
console.log(variable);
variable = 'Another value';
console.log(variable);
var maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99;
// Block scope
console.log('BLOCK SCOPE');
function reset() {
    // console.log(variable);
    var variable = null;
    console.log(variable);
}
reset();
console.log(variable);
// Arrow function
console.log('ARROW FUNCTIONS');
var addNumbers = function (number1, number2) {
    return number1 + number2;
};
console.log(addNumbers(10, 3));
var multiplyNumbers = function (num1, num2) { return num1 * num2; };
console.log(multiplyNumbers(10, 3));
var greet = function () {
    console.log('hello');
};
greet();
var greetFriend = function (friend) { return console.log(friend); };
greetFriend('man');
// Default parameters
console.log('DEFAULT PARAMETERS');
var countDown = function (start) {
    if (start === void 0) { start = 10; }
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log('Done!', start);
};
countDown();
// Rest & spread operators
console.log('REST & SPREAD');
// spread (...) transforms an array into a list
var numbers = [1, 10, 99, -5];
console.log(Math.max(1, 10, 99, -5));
console.log(Math.max.apply(Math, numbers));
// rest operator (...) does the opposite.
function makeArray() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    return args;
}
console.log(makeArray(1, 2, 6));
// Destructuring
console.log('DESTRUCTURING');
var myHobbies = ['Cooking', 'Sports'];
console.log(myHobbies[0], myHobbies[1]);
var hobby1 = myHobbies[0];
var hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
var hob1 = myHobbies[0], hob2 = myHobbies[1];
console.log(hob1, hob2);
// destructuring objects
var userData2 = {
    userName: 'Max',
    age: 27
};
console.log(userData2.userName, userData2.age);
// no alias, same property names
var userName = userData2.userName, age = userData2.age;
console.log(userName, age);
// alias
var myName2 = userData2.userName, myAge2 = userData2.age;
console.log(myName2, myAge2);
// Template literals
console.log('TEMPLATE LITERALS');
var hisName = 'Max';
var greeting = 'hello, I\'m, ' + hisName;
console.log(greeting);
var backtickGreeting = "This is a heading!\nI'm " + hisName + ".\nThis is cool!";
console.log(backtickGreeting);
// symbols, iterators or generators
// BUSCAR INFO
//# sourceMappingURL=app.js.map