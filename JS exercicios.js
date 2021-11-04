//VARIABLES
var nameCar = Volvo

var x = 50

var z = 5
var y = 10;
document.getElementById("demo").innerHTML = x + y;

var x = 5;
var y = 10;
var z = x + y;
alert(z);

var firstName = "John", lastName = "Doe",age = 35;

//OPERATORS
alert(10 * 5);

alert(10 / 2);

alert(15 % 9);

x = 10;
y = 5;
x += y;

x = 10;
y = 5;
x *= y;

//DATA TYPES
let length = 16;          // Number
let lastName = "Johnson"; // String
const x = {
  firstName: "John",
  lastName: "Doe"
};                        // Object

//FUNCTIONS
function myFunction() {
    alert("Hello World!");
  }
myFunction();

function myFunction(){
  alert("Hello World!");
}

function myFunction() {
    return "Hello";
}
document.getElementById("demo").innerHTML = myFunction();

function myFunction() {
    document.getElementById("demo").innerHTML = "Hello";
}

//OBJECTS
const person = {
    firstName: "John",
    lastName: "Doe"
  };
alert(person.firstName);

const person = {
    firstName: "John",
    lastName: "Doe", 
    country: "Norway"
};

const person = {
  name: "John", age: 50
};
alert(person.name + " is " + person.age);

//EVENTS
<button onclick="alert('Hello')">Click me.</button>

//<button onclick="myFunction()">Click me.</button>

//<div onmouseover="this.style.backgroundColor='red'">myDIV.</div>

//STRINGS
let txt = "Hello World!";
let x = txt.length;alert(x);

let txt = "We are \"Vikings\"";
alert(txt);

let str1 = "Hello ";
let str2 = "World!";
alert(str1 + str2);