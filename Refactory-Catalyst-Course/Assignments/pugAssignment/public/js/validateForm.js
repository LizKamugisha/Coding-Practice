// Accessing form elements by name & id, and assigning them variables.
const validateForm =() => {
    const name = document.form.formName;
    const eMail = document.form.formEmail;
    const genderM = document.getElementById("male");
    const genderF = document.getElementById("female");
    const progExp = document.form.progEx;
    
// Validating name input to have only alphabate charcters using .test method
let nameRegex = /^[a-zA-Z\s]+$/;
if(nameRegex.test(name.value) == true){
    name.style.border="1px solid green";
    text = "";
} else {
    name.style.border="1px solid red";
    text = "<br><br>*Name input is invalid. Please use alphabetic characters only";
    document.getElementById("nameAlert").innerHTML = text;
}

// Validating email adress input using .test method
let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
if(emailRegex.test(eMail.value) == true){
    eMail.style.border="1px solid green";
    text = "";
} else {
    eMail.style.border="1px solid red";
    text = "<br><br><br>*Email input is invalid.";
    document.getElementById("emailAlert").innerHTML = text;
}

// Validating gender selection using if statement
if(genderM.checked == false && genderF.checked == false){
    // alert("Please select your Gender");
    text = "*Gender selection is missing.";
    document.getElementById("genderAlert").innerHTML = text;
}

// Validating Experience  selection using if else statement
if(progExp.value == "Default"){
    // alert("Please select a Country.");
    progExp.style.border = "1px solid red";
    text = "*Selection is missing.";
    document.getElementById("progExpAlert").innerHTML = text;
} else {
    progExp.style.border = "1px solid green";
    text = "";
}
};