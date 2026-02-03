//Accidental Global Variable Creation in function
//function expression & declaration

console.log(this); //window

addName();
// function declaration
function addName() {
  console.log(this); //window
  name = "alina";
  console.log("Name added: ", name);
}

x = 10;
console.log(name);

addName();

// function expression
let productDetails = function () {
  console.log("t-shirt");
};

productDetails();

let product = {
  productPrice: 900,
  productName: "t-shirt",
  details: function () {
    console.log(this.productName);
  },
};

// Prototype
// object function constructor
function Employee(salary, age, city) {
  ((this.salary = salary), (this.age = age), (this.city = city));
}

let empOne = new Employee(90000, 20, "pune");
console.log(empOne);

Employee.prototype.nationality = "Indian";
console.log(empOne.nationality);

// instance member: salary, age, city
// prototype member: nationality

console.log(Object.keys(empOne)); //
console.log(Object.values(empOne)); //

for (let e in empOne) {
  console.log(e);
}

// [[Prototype]]
// __proto__
// prototype

console.log(product);

Object.freeze({ name: "alex", id: 2 });
Object.create(product);

Array.isArray();

let colors = ["pink", "red", "green", "blue"];
console.log(colors);

let str = new String("hello");
console.log(str);

// prototypal inheritance
function Company(id) {
  this.id = id;
}

function Hr_department(salary) {
  Company.call(this, 23);
  this.salary = salary;
}

// Inherit the prototype
Hr_department.prototype = Object.create(Company.prototype);

// manual set the contructor
Hr_department.prototype.constructor = Hr_department;

let h = new Hr_department(2000);
console.log(h.id);

// ES6
// class CompanyName {
//   constructor() {
//     this.id = 10;
//   }
// }

// // inheritance
// class HR_department extends Company {
//   constructor() {
//     super(); //call the parent constructor function
//   }
// }

// let hr = new Hr_department();
// console.log(hr);

let person = {
  firstName: "alina",
  lastName: "joe",
};

// let personTwo = {
//     display : function () {

//     }
// }

// personTwo.call(person, "India");

console.log(Object.getPrototypeOf(product));
console.log(Object.setPrototypeOf(product, person));
console.log(Object.getPrototypeOf(product));
