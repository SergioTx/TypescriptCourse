// let & const
console.log('LET & CONST');
let variable = 'Text';
console.log(variable);
variable = 'Another value';
console.log(variable);

const maxLevels = 100;
console.log(maxLevels);
// maxLevels = 99;

// Block scope
console.log('BLOCK SCOPE');
function reset() {
    // console.log(variable);
    let variable = null;
    console.log(variable);
}
reset();
console.log(variable);

// Arrow function
console.log('ARROW FUNCTIONS');
const addNumbers = function (number1: number, number2: number) {
    return number1 + number2;
}
console.log(addNumbers(10, 3));

const multiplyNumbers = (num1: number, num2: number) => num1 * num2;
console.log(multiplyNumbers(10, 3));

const greet = () => {
    console.log('hello');
}
greet();

const greetFriend = (friend: string) => console.log(friend);
greetFriend('man');

// Default parameters
console.log('DEFAULT PARAMETERS');
const countDown = (start: number = 10): void => {
    console.log(start);
    while (start > 0) {
        start--;
    }
    console.log('Done!', start);
}
countDown();

// Rest & spread operators
console.log('REST & SPREAD');
// spread (...) transforms an array into a list
const numbers = [1, 10, 99, -5];
console.log(Math.max(1, 10, 99, -5));
console.log(Math.max(...numbers));

// rest operator (...) does the opposite.
function makeArray(...args: number[]) {
    return args;
}
console.log(makeArray(1, 2, 6));

// Destructuring
console.log('DESTRUCTURING');
const myHobbies = ['Cooking', 'Sports'];
console.log(myHobbies[0], myHobbies[1]);
const hobby1 = myHobbies[0];
const hobby2 = myHobbies[1];
console.log(hobby1, hobby2);
const [hob1, hob2] = myHobbies;
console.log(hob1, hob2);

// destructuring objects
const userData2 = {
    userName: 'Max',
    age: 27
};
console.log(userData2.userName, userData2.age);
// no alias, same property names
const { userName, age } = userData2;
console.log(userName, age);
// alias
const { userName: myName2, age: myAge2 } = userData2;
console.log(myName2, myAge2);

// Template literals
console.log('TEMPLATE LITERALS');
const hisName = 'Max';
const greeting = 'hello, I\'m, ' + hisName;
console.log(greeting);
const backtickGreeting = `This is a heading!
I'm ${hisName}.
This is cool!`;
console.log(backtickGreeting);

// symbols, iterators or generators
// BUSCAR INFO