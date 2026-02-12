// Asynchronous Programming in JS
console.log("2");

// callback
let ids = setTimeout(() => {
  console.log("Welcome");
}, 1000);

let id = setInterval(() => {
  const date = new Date();
  //   console.log(date);
}, 1000);

clearInt = () => {
  clearInterval(id);
  clearTimeout(ids);
};

console.log("1");

setTimeout(() => {
  console.log("hello");
}, 0);

// Callback hell
// createOrder(cart, () => {
//     proceedTopayment(orderId, function() {
//         orderHistory()
//     })
// })

// Promises
let myPromise = new Promise((res, rej) => {
  //producing code
  let x = 0;
  if (x != 0) {
    res("ok");
  } else {
    rej("error");
  }
});

console.log(myPromise);

// consume a promise
myPromise
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });

//  Promise based
// axios
// fetch

async function getUsers() {
  try {
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await res.json();
    console.log(users);
  } catch (err) {
    console.log(err);
  }
}

getUsers();

// fetch(api)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// axios
//   .get("https://jsonplaceholder.typicode.com/users")
//   .then((res) => {})
//   .catch((err) => {});

// async await
// return a promise object
async function add(a, b) {
  let result = (await a) + b;
  return result;
}

console.log(3);
let promiseObj = add(10, 20);
promiseObj.then((res) => {
  console.log(res);
});

// function return undefined if we are not returning anything
function subtract() {
  console.log(20 - 10);
}

console.log(subtract()); //undefined

// Task
//  Creating a Simple Promise: Write a function that returns a promise which resolves to a specific object after 1 second.
//  Create an object with a method that returns a promise. The promise should resolve with the object's properties after 2 seconds.
//  Write a function that accepts an object with two promises. Return a new promise that resolves when both resolve (Promise.all).
//  Write a function that takes a promise and a timeout. If the promise exceeds the timeout, reject with an error (Promise.race).
