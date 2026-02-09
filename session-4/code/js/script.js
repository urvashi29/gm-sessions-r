// Function
let x = 10;
console.log(x);

// Function expression
// first class function: passing function as a value to a variable
let fun = function () {
  console.log("Hello");
};

fun(); //function calling
console.log(fun); //function definition

sample();
// function declaration
function sample() {
  console.log("World");
}

sample();

// callback function: passed as an argument to another function
function sum(a, b, myCallback) {
  let sum = a + b;
  myCallback(sum);
}

//callback parameter: s
sum(10, 20, function (s) {
  console.log(s);
});

// Real time: callback in Array methods in ES6, Timing Events, addEventListener, Promises

// high ordered function: a function which takes another function as a parameter or return another function: sum, Array methods

let arr = [10, 20, 30, 40];

arr.map((ele) => ele * 2);

// pure function
function addToCart(pId) {
  let cartArray = [];
  // store the data in cartArray
  return cartArray;
}

addToCart(20);

function multiply(x, y) {
  return x * y;
}

console.log(multiply(10, 20));
console.log(multiply(10, 20));

// closure function

// arrow function (ES6)/Fat arrow
// 1. syntax, 2. return, 3. this keyword
add = () => 10 + 20;

console.log(add());

let person = {
  details: function () {
    console.log(this); //person
  },
  detail: () => {
    console.log(this); //window
  },
};

person.detail();
person.details();

// throttle & debouncing Technique: to optimise search functionality / limit the api call on user input

const searchApi = function () {
  //api call

  console.log(document.querySelector("#name").value);
};

function throttle(fun, delay) {
  let timeoutId;

  return function () {
    if (!timeoutId) {
      timeoutId = setTimeout(() => {
        fun.apply(this);
        timeoutId = null;
      }, delay);
    }
  };
}

let searchApiThrottle = throttle(searchApi, 1000); //function, delay

const debounce = (fun, delay) => {
  let timeoutId;
  return () => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fun.apply(this);
    }, delay);
  };
};

const searchApiDebounce = debounce(searchApi, 1000);

// document.querySelector("#name").addEventListener("input", searchApiThrottle);
document.querySelector("#name").addEventListener("input", searchApiDebounce);

// 1000ms = 1s
