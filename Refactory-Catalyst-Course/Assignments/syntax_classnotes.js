const a = "Hello"
var b;
let c;

//const is for constant variable (eg. a is assigned the string of words "Hello")
// Note: in javascript syntax we can not declare a constant without assigning a value 
// var is simply a variable which is not constant & can change
// let reffers to a variable whose scope of the value is limited
// We are telling the computer to reserve these spaces & assign values to them (eg. a, b or c)
// below we are initialising b & c with values 

b = "World"
c = "Liz here"
// "\t" creates space between & "/n" creates a new line
console.log(a+"\t"+b+"\t"+c);