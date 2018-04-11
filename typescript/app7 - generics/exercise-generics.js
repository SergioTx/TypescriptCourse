/*Let's keep it simple and only add the following methods to the Map:

setItem(key: string, item: T) // should create a new key-value pair
 
getItem(key: string) // should retrieve the value of the provided key
clear() // should remove all key-value pairs
printMap() // should output key-value pairs
The map should be usable like shown below:

const numberMap = new MyMap<number>();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
 
const stringMap = new MyMap<string>();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();*/
var MyMap = /** @class */ (function () {
    function MyMap() {
        this.map = {};
    }
    // should create a new key-value pair
    MyMap.prototype.setItem = function (key, item) {
        this.map[key] = item;
    };
    // should retrieve the value of the provided key
    MyMap.prototype.getItem = function (key) {
        return this.map[key];
    };
    // should remove all key-value pairs
    MyMap.prototype.clear = function () {
        this.map = {};
    };
    // should output key-value pairs
    MyMap.prototype.printMap = function () {
        for (var key in this.map) {
            if (this.map.hasOwnProperty(key)) {
                console.log(key, this.map[key]);
            }
        }
    };
    return MyMap;
}());
var numberMap = new MyMap();
numberMap.setItem('apples', 5);
numberMap.setItem('bananas', 10);
numberMap.printMap();
var stringMap = new MyMap();
stringMap.setItem('name', "Max");
stringMap.setItem('age', "27");
stringMap.printMap();
