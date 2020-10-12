// Put everything into a function/method that we can call in the html using onClick action in the button 
// Access the html elements by ID & group all variables at the top
const userName = () => {
const name = document.getElementById("name");
const password = document.getElementById("password");
// .focus() - Puts cursor on an input field of focus, to guide user where to start
name.focus();
// Input text should adhere to this condition (capital & lowercase letters)
let text = /^[A-Za-z]+$/;
// Check if the value input by the user matches the condition set
// If it works, an alert will show and then the input field box will change
// If not, an alert will show
if(name.value.match(text)){
    alert("correct input");
    console.log(name.value);
    name.style.border="5px solid green";
} else {
    alert("wrong input");
}
};