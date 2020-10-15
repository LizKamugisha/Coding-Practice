// Put everything into a function/method that we can call in the html using onClick action in the button 
// Access the html elements by ID & group all variables at the top
const userName = () => {
const name = document.getElementById("name");
const password = document.getElementById("password");
// .focus() - Puts cursor on an input field of focus, to guide user where to start
name.focus();

/* Check if the value input by the user matches the condition set
If it works, an alert will show and then the input field box will change
If not, an alert will show */

// Set username validation of text input fields to adhere to this regular / regex expression (capital & lowercase letters)
let text = /^[A-Za-z]+$/;

if(name.value.match(text)){
    alert("correct input");
    console.log(name.value);
    name.style.border="5px solid green";
} else {
    alert("wrong input");
}
};

// Seting the username validation to be email format
let email = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

// if (name.value.match(email)){
//     alert("Right input");
//     name.style.border = "5px solid green";
// } else {
//     alert("Wrong input");
// };

//Setting the username & password to be alphanumeric (combination of numbers & letters)
let alphaNumeric = /^[0-9a-zA-Z]+$/;

if (name.value.match(email)){
    alert("Right input");
    name.style.border = "5px solid green";
} else {
    alert("Wrong input");
};

if (password.value.match(alphaNumeric)){
    alert("Valid password input");
    name.style.border = "5px solid green";
} else {
    alert("Please input the correct input");
}

// Setting a condition so users do not leave empty fields
if(name.value == "" && password.value == ""){
    alert ("Empty fields not acceptable as valid input");
    name.style.border="5px solid red";
    password.style.border="5px solid red";
    name.focus();
    return false;
}
};
