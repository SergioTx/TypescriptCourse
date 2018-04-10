//import namespaces
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
//assign alias
import CircleMath = MyMath.Circle;

const PI = 2.99;

console.log(MyMath.calculateRectangle(10, 20));
console.log(MyMath.Circle.calculateCircumference(3));
console.log(CircleMath.calculateCircumference(3));
console.log(PI);