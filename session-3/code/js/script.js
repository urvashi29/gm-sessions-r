// Arrays

let obj = { id: 10, test: "hi" };
console.log(obj.id);

//index
let arr = [10, 20, 30, 40, 50];
console.log(arr[1]);
console.log(arr.length);

//iterate over an array
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// Methods
//push: add element in the end of an array
arr.push(100, 200);
console.log(arr);

//pop: delete element from end
arr.pop();
arr.pop();
console.log(arr);

//unshift: add in the beginning
arr.unshift(10);
console.log(arr);

//shift: delete in the start
arr.shift();
console.log(arr);

//splice: add/delete in middle of the array
//slice - extract
console.log(arr.slice(0, 3)); //return the array from 0th index till 2nd index

// ES6 - 2015
// map: iterate over an array. return an array
let nums = [2, 4, 24, 6, 9, 10, 12];

let mapResult = nums.map((ele, i, a) => {
  console.log(ele, i, a);
  return ele * 2;
});

console.log(mapResult);

// forEach: iterate over an array
// return undefined if we try to return something here
nums.forEach((e) => {
  console.log(e * 2);
});

//filter: is used filter the array based on some condition. return filtered array with array elemnts
let ages = [10, 18, 20, 15, 11, 12, 90];
let filterResult = ages.filter((ele) => {
  return ele >= 18;
});
console.log(filterResult);

//find: return first element that pass the test
let findResult = ages.find((ele) => {
  return ele >= 18;
});
console.log(findResult);

//some (||) - return boolean value. if condition is true
//considering [2, 4, 24, 6, 9, 10, 12]
let someResult = nums.some((e) => {
  return e >= 20;
});

console.log(someResult);

//every(&&)- return boolean. all the elements should return true
let everyResult = nums.every((e) => {
  return e >= 20;
});

console.log(everyResult);

//includes
console.log(nums.includes(24));

//sort
// nums.sort((a, b) => {
//   return b - a;
// });

// console.log(nums);

let color = ["pink", "red", "green", "apple"];
color.sort();
console.log(color);

// array of object
const students = [
  {
    name: "Alina",
    age: 20,
    id: 2,
  },
  {
    name: "Alina",
    id: 1,
    age: 15,
  },
  {
    name: "John",
    id: 5,
    age: 10,
  },
];

let filteredStudents = students.filter((student) => {
  return student.age >= 20;
});

console.log(filteredStudents);

students.sort((a, b) => {
  return a.age - b.age;
});

console.log(students);

//reduce: is used to reduce array to a single value
//considering [2, 4, 24, 6, 9, 10, 12]
let reduceResult = nums.reduce((accumulatedValue, next) => {
  console.log("accumulated", accumulatedValue); //2 6 30 36 45 55
  console.log("next", next); //4 24 6 9 10 12
  return accumulatedValue + next;
}, 0);

console.log(reduceResult);

//flat 
// [10, 20, [100, 200]]

// Function
// Function expression & function declaration
// callback function 
// high ordered function 
// first class function 
// closure function 
// arrow function 
// pure function 