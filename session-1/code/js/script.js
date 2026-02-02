// variables
var firstName = "alina";

var color = "pink";

if (true) {
  let color = "yellow";
  console.log(color); //
}

const num = 20;
// num = 10;

const arr = [10, 20, 30, 40];
arr[0] = 100;
console.log(arr); //

// hoisting
x = 20;
console.log(x);
var x;

var y = 10;

// getData();
// function getData() {

// }
// getData();

let a = null;
console.log(a); //null
console.log(typeof a); //object

let b;
console.log(b); //undefined
console.log(typeof b); //undefined

console.log(typeof arr); //object

//object literal
let person = {
  age: 20,
  salary: 9009090,
  city: "puna",
};

console.log(typeof person);

console.log(Array.isArray(arr)); //true

let result = firstName ?? null; //ES2020
console.log(result);
console.log(person?.age); //ES2020
// ? () : ()

// string
console.log(10 + "20"); //
console.log(10 + 20 + "a"); //
console.log(20 + 20 - "b"); //NaN

// Implicit coersion
console.log("20" / 10); //2

//check the operator priority/precedence
//check if + and string is there, then concatenate
//if + is not there, then check the type of string (if numeric, then it will convert to number)
//then NaN

console.log(true + false > 2); //true -> 1 & false -> 0
console.log(a == b); //true
console.log(a === b); //false

// Explicit coersion
console.log(Number("20")); //20
console.log(parseInt("20")); //20
console.log(parseFloat("20")); //20
console.log(Number("ab")); //

const n = 60;
console.log(n.toString());
console.log(Number(true)); //1
console.log(Number(false)); //0

// Array

// closures
// var counter = 0;
// function add() {
//   counter += 1;
//   return counter;
// }

// console.log(add());//1
// console.log(add());//2
// console.log(add());//3

function incCounter() {
  //local scope
  var counter = 0;
  counter += 1;
  return counter;
}

console.log(incCounter()); //1
console.log(incCounter()); //1
console.log(incCounter()); //1

// handle it with clousure
function counterInc() {
  var counter = 0; //lexical scope

  //   inner function/ clousure
  return function () {
    counter += 1;
    console.log(counter);
  };
}

let fun = counterInc();
fun(); //1
fun();

function entertainment() {
  let user = null;

  function signIn(_data) {
    user = _data;
    console.log(user);
  }

  return signIn;
}

let entertainUser = entertainment();
entertainUser();


