"use strict";
// string
var myName = 'Max';
// myName = 28;
// number
var myAge = 27.5;
// myAge = 'Max';
// boolean
var hasHobbies = false;
// hasHobbies = 1;
// assign types
var myRealAge;
myRealAge = 27;
// myRealAge = '27';
// array
var hobbies = ['Cooking', 'Sports'];
hobbies = [100];
// hobbies = 100;
// tuples
var address = ['Superstreet', 99];
// enums
var Color;
(function (Color) {
    Color[Color["Gray"] = 0] = "Gray";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue"; // 2
})(Color || (Color = {}));
var myColor = Color.Green;
console.log(myColor);
var Color2;
(function (Color2) {
    Color2[Color2["Gray"] = 0] = "Gray";
    Color2[Color2["Green"] = 100] = "Green";
    Color2[Color2["Blue"] = 101] = "Blue"; // 101
})(Color2 || (Color2 = {}));
var myColor2 = Color2.Green;
console.log(myColor2);
var Color3;
(function (Color3) {
    Color3[Color3["Gray"] = 0] = "Gray";
    Color3[Color3["Green"] = 100] = "Green";
    Color3[Color3["Blue"] = 2] = "Blue";
    Color3[Color3["Red"] = 3] = "Red"; // 3
})(Color3 || (Color3 = {}));
// any
var car = 'BMW';
console.log(car);
car = { brand: 'BNW', series: 3 };
console.log(car);
// functions
function returnMyName() {
    return myName;
}
console.log(returnMyName());
// functions void
function sayHello() {
    console.log('Hello!');
}
// argument types
function multiply(value1, value2) {
    return value1 * value2;
}
// console.log(multiply(2, 'Max'));
console.log(multiply(2, 10));
// function types
var myMultiply;
// myMultiply = sayHello;
// myMultiply();
myMultiply = multiply;
console.log(myMultiply(5, 2));
// objects
var userData = {
    name: 'Max',
    age: 27
};
// userData = {};
// userData = {
//     a: 'hello',
//     b: 22
// }
// complex object
var complex = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
var complex2 = {
    data: [100, 3.99, 10],
    output: function (all) {
        return this.data;
    }
};
// union types
var myRealRealAge = 27;
myRealRealAge = '27';
// myRealRealAge = true;
// check types (during runtime)
var finalValue = 30;
if (typeof finalValue == 'number') {
    console.log('finalValue is a number');
}
// never type (typescript 2+)
function neverReturns() {
    throw new Error('An error');
}
// nullable types (typescript 2+)
var canBeNull = 12;
// canBeNull = null; //tsconfig -> "strictNullChecks": true
var canBeNull2 = 12;
canBeNull2 = null;
var canAlsoBeNull;
canAlsoBeNull = null;
var canThisBeAny = null;
// canThisBeAny by default is now type any and not type null
canThisBeAny = 12;
