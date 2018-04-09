// Exercise 1 -----------
/*function Car(name) {
    this.name = name;
    this.acceleration = 0;

    this.honk = function() {
        console.log("Toooooooooot!");
    };

    this.accelerate = function(speed) {
        this.acceleration = this.acceleration + speed;
    }
}
var car = new Car("BMW");
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);*/

class Car {
    acceleration: number;
    constructor(public name: string) {
        this.acceleration = 0;
    }

    honk() {
        console.log("Toooooooooot!");
    }
    accelerate(speed: number) {
        this.acceleration += speed;
    }
}
let car2 = new Car('BMW');
car.honk();
console.log(car.acceleration);
car.accelerate(10);
console.log(car.acceleration);

// Exercise 2 -----------
/*var baseObject = {
    width: 0,
    length: 0
};
var rectangle = Object.create(baseObject);
rectangle.width = 5;
rectangle.length = 2;
rectangle.calcSize = function() {
    return this.width * this.length;
};
console.log(rectangle.calcSize());*/
class BaseObject {
    width = 0;
    height = 0;
}
class Rectangle extends BaseObject {
    calcSize() {
        return this.width * this.height;
    }
}
const rectangle = new Rectangle();
rectangle.width = 10;
rectangle.height = 2;
console.log(rectangle.calcSize());

// Exercise 3 -----------
/*var person = {
    _firstName: ""
};
Object.defineProperty(person, "firstName", {
    get: function () {
        return this._firstName;
    },
    set: function (value) {
        if (value.length > 3) {
            this._firstName = value;
        }
        else {
            this._firstName = "";
        }
    },
    enumerable: true,
    configurable: true
});
console.log(person.firstName);
person.firstName = "Ma";
console.log(person.firstName);
person.firstName = "Maximilian";
console.log(person.firstName);*/
class Person2 {
    private _firstName: string = '';

    get firstName() {
        return this._firstName;
    }
    set firstName(value: string) {
        if (value.length > 3) {
            this._firstName = value;
        } else {
            this._firstName = '';
        }
    }
}
const persn = new Person2();
console.log(persn.firstName);
persn.firstName = 'ma';
console.log(persn.firstName);
persn.firstName = 'Maximilian';
console.log(persn.firstName);