// DOM

// selectors
// window.document.getElementById();
// window.document.getElementsByClassName();

// querySelector(css selector)
console.log(typeof document.querySelector("#sample"));
console.log(document.querySelector("#sample").textContent);
console.log(document.querySelector(".item"));

function store() {
  let arr = [];
  let items = document.querySelectorAll(".item");
  items.forEach((item) => {
    console.log(item.textContent);
    arr.push(item.textContent);
  });
  console.log(arr);
}

document.querySelector("#btn").addEventListener("click", store);

// form Events
// onchange
// oninput
// onclick
// onkeyup
// onkeydown

// update
document.querySelector("#sample").textContent = "World";

console.log(document.querySelector(".items").innerHTML);
console.log(document.querySelector(".items").textContent);

// create the dom node/element
let ele = document.createElement("div"); //<div></div>
// let p = document.createAttribute("p");
// p.textContent = "ReactJs";
ele.innerHTML = "<p>ReactJs</p>"; //<div><p>ReactJs</p></div>
document.body.appendChild(ele);

let img = document.createElement("img");
// img.src = "";
img.alt = "pattern image";
// img.width = "200";
// img.height = "200";
img.style.width = "200px";
img.style.height = "200px";

img.setAttribute(
  "src",
  "https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
);
document.body.appendChild(img);

//add & remove class
let divClass = document.querySelector("#divtag").classList;
divClass.add("design");
divClass.remove("design");

document.body.addEventListener("load", () => {
  //api call
});

// Task
// creating div element, add attribute & css
// get the data from api & display in the form card in UI (https://jsonplaceholder.typicode.com/users)
