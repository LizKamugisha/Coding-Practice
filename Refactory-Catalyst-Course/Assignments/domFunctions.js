// Javascript is an interpreted language. It is a scripting language.
// A Javascript engine in a web browser interprets js
// Js is hosted by html on the front end and hence js is a front end language
// Node js is a backend hosting language for js.

var insertBlock;
var container;

insertBlock = document.createElement("div");
insertBlock.innerHTML = "This Div was inserted into a page using Javascript";
container = document.getElementById("container");
container.appendChild(insertBlock);

container.style.background = "pink";
insertBlock.style.border = "2px solid purple";

// We have been doing structured programing above
// Bellow we write the same code as a function

function addDiv() {
  var insertBlock;
  var container;

  insertBlock = document.createElement("div");
  insertBlock.innerHTML = "This Div was inserted into a page using Javascript";
  container = document.getElementById("container");
  container.appendChild(insertBlock);

  container.style.background = "pink";
  insertBlock.style.border = "2px solid purple";
}

addDiv();

// ES - European Standard - is another way of defining a function
// ES was created by European Computer Manufacturing Association Standards (ECMAS)
// ECMAS created standards for JS, called ES6.
// ES6 standard for writting functions in JS follows this syntax: var div1 = () => {};
// => is an arrow function
// Obsolete computers wont run this new standard due to old JS engines

var addDiv = () => {
  var insertBlock;
  var container;

  insertBlock = document.createElement("div");
  insertBlock.innerHTML = "This Div was inserted into a page using Javascript";
  container = document.getElementById("container");
  container.appendChild(insertBlock);

  container.style.background = "pink";
  insertBlock.style.border = "2px solid purple";
};

addDiv();
