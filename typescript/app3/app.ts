class PersonCls {
    name: string;
    private type: string;
    // protected -> child classes can access it too
    protected age: number = 27;

    constructor(name: string, public userName: string) {
        this.name = name;
    }

    printAge() {
        console.log(this.age);
        this.setType('Old guy');
    }

    private setType(type: string) {
        this.type = type;
        console.log(this.type);
    }
}

const person = new PersonCls('Max', 'max');
console.log(person);
console.log(person.name, person.userName);
person.printAge();
// person.setType('Cool guy');

class Max extends PersonCls {
    constructor(username: string) {
        super('Max', username);
        this.age = 31;
    }
}

const max = new Max('max');
console.log(max);

// Getters and setters
class Plant {
    private _species: string = 'Default';

    get species() {
        return this._species;
    }

    set species(value: string) {
        if (value.length > 3) {
            this._species = value;
        }
        this._species = 'Default';
    }
}
let plant = new Plant();
console.log(plant.species); //sin barrabaja. Se llama al getter
plant.species = 'Green Plant';
console.log(plant.species);

// static properties & methods
class Helpers {
    static PI: number = 3.14;
    static calcCircumference(diameter: number): number {
        return this.PI * diameter;
    }
}
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));

// Abstract classes
abstract class Project {
    projectName: string = 'Default';
    budget: number;

    abstract changeName(name: string): void;

    calcBudget() {
        return this.budget * 2;
    }
}
class ITProject extends Project {
    changeName(name: string): void {
        this.projectName = name;
    }
}
let newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super ITProject');
console.log(newProject);

// private constructors
class OnlyOne {
    private static instace: OnlyOne;
    public readonly name: string;

    private constructor(name: string) {
        this.name = name;
    }

    static getInstance() {
        if (!OnlyOne.instace) {
            OnlyOne.instace = new OnlyOne('The only one');
        }
        return OnlyOne.instace;
    }
}
// let wrong = new OnlyOne('The only one');
let right = OnlyOne.getInstance();
console.log(right.name);
// right.name = 'try to assign to readonly';