// IIFE / self-invoking function
(function (a, b) {
  console.log(a + b);
})(10, 20);

// Client Storages
// 5mb
// local storage (Netflix)
let person = {
  id: 1,
  name: "alina",
  age: 20,
};

localStorage.setItem("person", JSON.stringify(person));
localStorage.setItem("name", "alina");
console.log(JSON.parse(localStorage.getItem("person")));

logout = () => {
  //   localStorage.clear();
  localStorage.removeItem("name");
};

// session storage (Netbanking)
let product = {
  id: "UOIU-UOI",
  productName: "Rubbermaid",
  price: "20",
};
sessionStorage.setItem("product", JSON.stringify(product));
console.log(sessionStorage.getItem("product"));
// sessionStorage.clear();
// sessionStorage.removeItem();

// cookies - 4kb
window.document.cookie =
  "username = Alex; expires = Thu, 12 Feb 2026; secure=true";

// XML format
// JSON
// JSON.stringify();
// JSON.parse();

// String methods
// let str  = "" or '' or `` (ES6)

let str = "hello World!";
// index starts from 0
// console.log(str.search("el"));//return the index
// str.indexOf
// str.toLowerCase();
// str.toUpperCase();
// str.trim();
// str.charAt(5);//character
// str.charCodeAt(5);//character code
// str.includes();
// str.slice();

console.log(str.split(""));

let arr = [10, 2, 3, 8];
arr.reverse();
console.log(arr.join());

let strVal = "alina";
// output = "anila";

console.log(strVal.split("").reverse().join(""));

for (let i = strVal.length - 1; i >= 0; i--) {
  console.log(strVal[i]);

  if (strVal[i] == "i") {
    console.log("Found:", strVal[i]);
    break;
  }
}

// Template Strings
let template = `hello 
world!`;
// \n
console.log(template); //multiple line

// variable & expression substitution
let firstName = "alex";
let lastName = "joe";
let age = 20;

console.log("My Name is " + firstName + " " + lastName + " is of age" + age);

console.log(`My Name is ${firstName} ${lastName}, is of age ${age}`);

// Prototype custome method to Pre defined classes
console.log(String.prototype);

String.prototype.getValues = function (a, b) {
  return {
    first: a.toUpperCase(),
    last: b.toLowerCase(),
  };
};

console.log(str.getValues("alina", "joe"));

console.log(Number.prototype);
console.log(Array.prototype);
