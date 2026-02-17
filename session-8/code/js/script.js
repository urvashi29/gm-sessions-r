// ES6 - 2015
// let, const
// Arrow (fat arrow)
// Array helper methods -map(), filter(), some(), every(), reduce(), forEach()
// Promises
// Template Strings

// class
function University(id) {
  this.id = id;
}

let u = new University(20);
console.log(u);

//templates or blue print of object
class Shapes {
  constructor(id) {
    this.id = id;
  }
}

let s = new Shapes(10);
console.log(s);

class Circle extends Shapes {
  constructor(radius) {
    super(6); //call the parent constructor
    this.radius = radius;
  }
}

const c = new Circle(5);
console.log(c);

// Spread operator (...): object & arrays
let obj = {
  a: 10,
  b: 20,
};

// shallow copy
// let objTwo = obj;
// objTwo.a = 100;
// console.log(obj, objTwo);

// deep copy (spread)
let objTwo = { ...obj, z: 200 };
objTwo.a = 100;
console.log(obj, objTwo);

let arrOne = [10, 20, 30];
let arrTwo = [...arrOne, 100, 200];
console.log(arrTwo);

// rest operator(...)
add = (...arr) => {
  console.log(arr);
};

add(10, 2, 4, 5, 6);

// destructuring of object & arrays
let person = {
  id: 20,
  firstName: "alina",
  age: 24,
};

const { firstName, age } = person;
console.log(firstName, age);

let nums = [10, 3, 20, 15, 18];
let [a, b, ...d] = nums;
console.log(a, b, d);

//  restructuring
let first = "alina";
let last = "joe";
let salary = 89090;

const emp = {
  first,
  last,
  salary,
};

console.log(emp);

// for...of (arrays, strings)
for (let x of nums) {
  console.log(x);
}

// for...in (objects)
for (x in emp) {
  console.log(`${x}: ${emp[x]}`);
}

// Module
// ES5 require

// import
// export

// Map (key/value pair)
const newMap = new Map();
newMap.set("name", "alaya");
newMap.set("1", "value");
// newMap.delete(key)
// newMap.clear()
console.log(newMap.has("id"));
console.log(newMap.get("1"));
console.log(newMap.size);

// Set (no duplicate)
let setObj = new Set();
setObj.add(1);
setObj.add(1);
setObj.add([1, 2, 3, 4]);

console.log(setObj.has(1));
setObj.delete(1);
console.log(setObj);

//duplicate removal
let num = [1, 2, 6, 2, 4, 5, 5, 6];
let setValue = new Set(num);
console.log(setValue);
