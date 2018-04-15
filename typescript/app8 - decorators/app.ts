// Decorators --------------------------
function logged(constructorFn: Function) {
    console.log(constructorFn);
}

@logged
class Person3 {
    constructor() {
        console.log('Hi!');
    }
}

// Factory --------------------------
function logging(value: boolean) {
    return value ? logged : null; // must return a function
}
@logging(true)
class Car3 {

}

// Advanced --------------------------
function printable(constructorFn: Function) {
    constructorFn.prototype.print = function () {
        console.log(this);
    }
}
@logging(true) // can have more than one
@printable
class Plant3 {
    name = 'Green plant';
}
const plant3 = new Plant3();
(<any>plant3).print(); // doesn't recognize otherwise the print method

// Method decorator --------------------------
// Property decorator --------------------------
function editable(value: boolean) {
    return function (target: any, propName: string, descriptor: PropertyDescriptor) {
        descriptor.writable = value;
    }
}

function overwritable(value: boolean) {
    return function (target: any, propName: string): any {
        const newDescriptor: PropertyDescriptor = {
            writable: value
        }
        return newDescriptor;
    }
}

class Project3 {
    @overwritable(false)
    projectName: string;

    constructor(name: string) {
        this.projectName = name;
    }

    @editable(false)
    calcBudget() {
        console.log(1000);
    }
}
const project = new Project3('Super Project!');
project.calcBudget();
project.calcBudget = function () {
    console.log(2000);
}
project.calcBudget();
console.log(project);

// Parameter decorator --------------------------
function printInfo(target: any, methodName: string, paramIndex: number) {
    console.log('Target: ', target);
    console.log('methodName: ', methodName);
    console.log('paramIndex: ', paramIndex);
}
class Course {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    printStudentNumbers(mode: string, @printInfo printAll: boolean) {
        if (printAll) {
            console.log(10000);
        } else {
            console.log(2000);
        }
    }
}
const course = new Course('Super Course');
course.printStudentNumbers('anything', true);
course.printStudentNumbers('anything', false);