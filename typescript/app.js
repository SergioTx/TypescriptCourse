var MyMath;
(function (MyMath) {
    var Circle;
    (function (Circle) {
        var PI = 3.14;
        function calculateCircumference(diameter) {
            return diameter * PI;
        }
        Circle.calculateCircumference = calculateCircumference;
    })(Circle = MyMath.Circle || (MyMath.Circle = {}));
})(MyMath || (MyMath = {}));
var MyMath;
(function (MyMath) {
    function calculateRectangle(width, length) {
        return width * length;
    }
    MyMath.calculateRectangle = calculateRectangle;
})(MyMath || (MyMath = {}));
//import namespaces
/// <reference path="circleMath.ts" />
/// <reference path="rectangleMath.ts" />
//assign alias
var CircleMath = MyMath.Circle;
var PI = 2.99;
console.log(MyMath.calculateRectangle(10, 20));
console.log(MyMath.Circle.calculateCircumference(3));
console.log(CircleMath.calculateCircumference(3));
console.log(PI);
