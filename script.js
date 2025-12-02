// // Data types
// // Arrays, Objects, Null, Undefined, Booleans, Strings......

// // Variables
// // const, let, var

// // Variable syntax in js
// // const variableName = value/dataType/function etc

// const fruits = ["Banana", "Mango", "Apple", "Kiwi", "Guava"];
// console.log(fruits);

// const cat = {
//     sound: "Meow",
//     food: "Milk",
//     isHungry: false,
//     age:2,
//     gender:"male",
//     wife: null,
// }

// let chair
// console.log("The value of chair",chair)

// // Booleans
// // true, false

// // Functions

// function changeColor(){
//     let color = "#0089f9";
//     console.log(color)
// }
// changeColor()

// Background color changer
const button = document.getElementById("button");

function backgroundColorChanger() {
  const hexadecimal = Date.now().toString(16).slice(-6);
  const hexadecimalString = `#${hexadecimal}`;

  const angle = Date.now().toLocaleString();
  const design = Date.now().toString();
  const correctAngle = Number(angle.slice(-2));
  const design1 = Number(design.slice(-2));
  const design2 = Number((design * 154).toString().slice(-2));

  //   console.log("Correct Angle",correctAngle)

  const hexadecimalColor2 = (Date.now() * 10).toString(16).slice(-6);
  // console.log("Second hexadecimal", hexadecimalColor2);

  // console.log(
  //   "Angle",
  //   correctAngle,
  //   "Color1",
  //   hexadecimalString,
  //   "Color2",
  //   hexadecimalColor2
  // );

  document.body.style.background = `linear-gradient(${correctAngle}deg, ${hexadecimalString} ${design1}%, #${hexadecimalColor2} ${design2}%`;
  //   <body style="backgroundColor: blue; "></body>
  // console.log(
  //   `Design 1: ${design1}% for the color: ${hexadecimalString} Design 2: ${design2}% for the color: #${hexadecimalColor2} and the angle is ${correctAngle}deg`
  // );
}

// Event listeners
button.addEventListener("click", backgroundColorChanger);

const date = Date.now();
// console.log(date);
const random = date.toString(16);
// Base 16 value making up a hexadecimal kind of presentation of numbers
// 0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f

console.log(random);

// slicing a value
const hexadecimal = random.slice(-6);
console.log(hexadecimal);

// String concatenation
// String literal
const hexString = `#${hexadecimal}`;
console.log(hexString);

// The plus operator
// const string = "#" + hexadecimal;
// console.log(string);

// Conditional statements
// if (){}

// multiply => use *
// divide => use /
// subtract => use -
// add => use +
// equals => use ===
// greater than => use >
// less than => use <
// greater than or equal to => use >=
// less than or equal to => use <=
// OR => use //
// AND => use &&

function checkNumber() {
  const win = document.getElementById("win");
  const lose = document.getElementById("lose");
  // win.innerText = "  MORNING";
  const number = Date.now().toString().slice(-4);

  const correctNumber = Number(number);
  if (correctNumber >= 6000) {
    console.log("Hurray");
    win.innerText = "***HURRY***";
    lose.innerText = "";
  } else if (correctNumber >= 5000) {
    lose.innerText = "Almost there";
    win.innerText = "";
    win.console.log("almost there!");
  } else if (correctNumber >= 3000) {
    console.log("wow! keep it up!");
    win.innerText = "";
    lose.innerText = "wow! keep it up";
  } else if (correctNumber >= 2000) {
    console.log("this is a good start");
    lose.innerText = "This is a good start";
    win.innerText = "";
  } else {
    console.log("journey of a thousand miles...");
    lose.innerText = "Journey of a thousand miles...";
    win.innerText = "";
  }
}

// button.addEventListener("click", checkNumber);
// addEventListener("keypress", function (event) {
//   if (event.key === "Enter") {
//     checkNumber();
//   }
// });

const play = document.getElementById("play");
play.addEventListener("click", checkNumber);
play.addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    checkNumber();
  }
});
// Floats in js
let float = 2.7654;

let fixedFloat = float.toFixed(2);
console.log(fixedFloat);

const float2 = 67;
fixedFloat = float.toFixed(2);
console.log(fixedFloat);

// loops in js
// Adding only one to the initial value
let value = 9;
value++;
console.log(value);

let loopValue = document.getElementById("loopvalue");
for (let i = 0; i < 5; i++) {
  console.log(i);
  loopValue.innerHTML += "HELLO";
}

// for......in loop
// it is used to repeat /loop into object keys
const someone = {
  name: "john",
  gender: "male",
  age: "20",
  occupation: "manager",
};
for (const key in someone) {
  console.log(`${key}: ${someone[key]}`);
}

// for....of loops
// loops into Arrays
// syntax: for (const variable of array){}
// let fruits = ["mango", "orange", "pawpaw", "guava"];
// for (const fruit of fruits) {
//   document.body.innerHTML += `<h2>I like ${fruit}</h2>`;
// }
// for each loop
// syntax: array . for each function(current value,index,array)
// fruits.forEach(function (fruit, index) {
//   document.innerHTML += `${fruit}, number ${index}is the best`;
// });
// arrow Functions
// syntax: () =>{}
const newFunc = (a, b) => {
  console.log(a + b);
};
newFunc(1, 3);
newFunc("hello ", "you");
// old function
// syntax: function(){}

const oldFunc = function funcName() {};
