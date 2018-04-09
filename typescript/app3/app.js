"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PersonCls = /** @class */ (function () {
    function PersonCls(name, userName) {
        this.userName = userName;
        // protected -> child classes can access it too
        this.age = 27;
        this.name = name;
    }
    PersonCls.prototype.printAge = function () {
        console.log(this.age);
        this.setType('Old guy');
    };
    PersonCls.prototype.setType = function (type) {
        this.type = type;
        console.log(this.type);
    };
    return PersonCls;
}());
var person = new PersonCls('Max', 'max');
console.log(person);
console.log(person.name, person.userName);
person.printAge();
// person.setType('Cool guy');
var Max = /** @class */ (function (_super) {
    __extends(Max, _super);
    function Max(username) {
        var _this = _super.call(this, 'Max', username) || this;
        _this.age = 31;
        return _this;
    }
    return Max;
}(PersonCls));
var max = new Max('max');
console.log(max);
// Getters and setters
var Plant = /** @class */ (function () {
    function Plant() {
        this._species = 'Default';
    }
    Object.defineProperty(Plant.prototype, "species", {
        get: function () {
            return this._species;
        },
        set: function (value) {
            if (value.length > 3) {
                this._species = value;
            }
            this._species = 'Default';
        },
        enumerable: true,
        configurable: true
    });
    return Plant;
}());
var plant = new Plant();
console.log(plant.species); //sin barrabaja. Se llama al getter
plant.species = 'Green Plant';
console.log(plant.species);
// static properties & methods
var Helpers = /** @class */ (function () {
    function Helpers() {
    }
    Helpers.calcCircumference = function (diameter) {
        return this.PI * diameter;
    };
    Helpers.PI = 3.14;
    return Helpers;
}());
console.log(2 * Helpers.PI);
console.log(Helpers.calcCircumference(8));
// Abstract classes
var Project = /** @class */ (function () {
    function Project() {
        this.projectName = 'Default';
    }
    Project.prototype.calcBudget = function () {
        return this.budget * 2;
    };
    return Project;
}());
var ITProject = /** @class */ (function (_super) {
    __extends(ITProject, _super);
    function ITProject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ITProject.prototype.changeName = function (name) {
        this.projectName = name;
    };
    return ITProject;
}(Project));
var newProject = new ITProject();
console.log(newProject);
newProject.changeName('Super ITProject');
console.log(newProject);
// private constructors
var OnlyOne = /** @class */ (function () {
    function OnlyOne(name) {
        this.name = name;
    }
    OnlyOne.getInstance = function () {
        if (!OnlyOne.instace) {
            OnlyOne.instace = new OnlyOne('The only one');
        }
        return OnlyOne.instace;
    };
    return OnlyOne;
}());
// let wrong = new OnlyOne('The only one');
var right = OnlyOne.getInstance();
console.log(right.name);
// right.name = 'try to assign to readonly';
//# sourceMappingURL=app.js.map