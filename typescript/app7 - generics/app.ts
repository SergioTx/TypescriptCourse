// Simple Generic -------
function echo(data: any) {
    return data;
}

console.log(echo("Max"));
console.log(echo(27));
console.log(echo({ name: "Max", age: 27 }));

// Better Generic -------
function betterEcho<T>(data: T) {
    return data;
}
console.log(betterEcho("Max").length);
console.log(betterEcho<number>(27));
console.log(betterEcho({ name: "Max", age: 27 }));

// Built-in Generics -------
const testResults2: Array<number> = [1.94, 2.33];
testResults2.push(-2.99);
// testResults.push("string");
console.log(testResults2);

// Arrays -------
function printAll<T>(args: T[]) {
    args.forEach((element) => console.log(element));
}
printAll(["Apple", "Banana"]);
printAll<string>(["Apple", "Banana"]); //more splicit

// Generic Types -------
const echo2: <T>(data: T) => T = betterEcho;
console.log(echo2<string>("Something"));

// Generic Classes -------
class SimpleMath<T extends number | string> {
    baseValue: T;
    multiplyValue: T;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}
const simpleMath = new SimpleMath<string>();
simpleMath.baseValue = "10";
simpleMath.multiplyValue = "20";
console.log(simpleMath.calculate());

class SimpleMath2<T extends number | string, U extends number | string> {
    baseValue: T;
    multiplyValue: U;
    calculate(): number {
        return +this.baseValue * +this.multiplyValue;
    }
}
const simpleMath2 = new SimpleMath2<string, number>();
simpleMath2.baseValue = "10";
simpleMath2.multiplyValue = 20;
console.log(simpleMath2.calculate());