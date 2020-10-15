/* 
Another way to access html elemnets using the form itself,
eg. 'signUpForm' is the name assigned to the form in the signUp.html doc.
Using name instead of ids to identify elements.
*/

const accessSignup =() => {
    const userName = document.signUpForm.name;
    const eMail = document.signUpForm.email;
    const pwd = document.signUpForm.password;
    const phoneNum = document.signUpForm.phone;

    // name.focus();

// Validating username input using .match method
let nameRegex = /^[0-9a-zA-Z]+$/;
if(userName.value.match(nameRegex)){
    console.log(userName.value);
    alert("correct username has been used");
    userName.style.border="2px solid green";
} else {
    alert("incorrect username has been used");
    userName.style.border="2px solid red";
}

// Validating email input using .test method
// let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
if(emailRegex.test(eMail.value) == true){
    alert("correct email has been used");
    eMail.style.border="2px solid green";
} else {
    alert("incorrect email has been used");
    eMail.style.border="2px solid red";
}

// Validating password input using .match method
let pwdRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;
if(pwd.value.match(pwdRegex)){
    alert("Correct password has been used")
    pwd.style.border="2px solid green";
} else {
    alert("Incorrect password. Password must contain minimum 8 characters with no spaces, please try again.")
    pwd.style.border="2px solid red";
}

// Validating phone input using .test method
let phoneRegex = /^[+]*[(]{0,3}[0-9]{0,3}[)]*[\s0-9]*$/
// /^[+]*[0-9\s]*$/;
if(phoneRegex.test(phoneNum.value)){
    alert("Correct phone number has been used.")
    phoneNum.style.border="2px solid green";
} else {
    alert("Incorrect phone number has been used.")
    phoneNum.style.border="2px solid red";
}

};