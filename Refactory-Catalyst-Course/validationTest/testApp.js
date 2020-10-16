// Accessing form elements by name & id, and assigning them variables.
const validateRegForm =() => {
    const userID = document.registration.userid;
    const password = document.registration.passid;
    const name = document.registration.username;
    const userAddress = document.registration.address;
    const userCountry = document.registration.country;
    const zipCode = document.registration.zip;
    const eMail = document.registration.email;

    const genderM = document.getElementById("sexM");
    const genderF = document.getElementById("sexF");

    const langE = document.getElementById("langEn");
    const langNe = document.getElementById("langNoen");

    const about = document.getElementById("desc");

// Validating user Id input to have 5 to 12 charcters (letters & numbers) using .test method
let idRegex = /^[0-9a-zA-Z]{5,12}$/;
if(idRegex.test(userID.value) == true){
    // alert("Valid user ID has been used");
    userID.style.border="1px solid green";
} else {
    alert("Invalid User Id. Avoid leaving this blank or adding space or special characters in your input.");
    userID.style.border="1px solid red";}

// Validating password input to have 7 to 12 charcters (letters, numbers & special characters) using .test method
let pwdRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{7,12}$/;
if(idRegex.test(password.value) == true){
    // alert("Valid password been used");
    password.style.border="1px solid green";
} else {
    alert("Invalid Password. Avoid leaving this input blank.");
    password.style.border="1px solid red";}

// Validating Name input to have only alphabate charcters using .test method
let nameRegex = /^[a-zA-Z\s]+$/;
if(nameRegex.test(name.value) == true){
    // alert("Valid name has been used");
    name.style.border="1px solid green";
} else {
    alert("Please enter your First & Last name. Avoid using numbers or special characters.");
    name.style.border="1px solid red";}

// Validating Address input to have alphanumeric charcters using .test method
let addyRegex = /^[0-9a-zA-Z\s]+$/;
if(addyRegex.test(userAddress.value) == true){
    // alert("Valid address has been used");
    userAddress.style.border="1px solid green";
} else {
    alert("Please enter your Address. Avoid leaving this input blank.");
    userAddress.style.border="1px solid red";}

// Validating Country selection using if else statement
if(userCountry.value == "Default"){
    alert("Please select a Country.");
    userCountry.style.border = "1px solid red";
} else {
    // alert("A country has been selected");
    userCountry.style.border = "1px solid green";
}

// Validating Zip Code input to have only numeric charcters using .test method
let zipRegex = /^[0-9]+$/;
if(zipRegex.test(zipCode.value) == true){
    // alert("Valid zip code has been used");
    zipCode.style.border="1px solid green";
} else {
    alert("Please enter your ZIP Code.");
    zipCode.style.border="1px solid red";}

// Validating email adress input using .test method
let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
if(emailRegex.test(eMail.value) == true){
    // alert("correct email has been used");
    eMail.style.border="1px solid green";
} else {
    alert("Invalid email has been used");
    eMail.style.border="1px solid red";
}

// Validating gender selection using if statement
if(genderM.checked == false && genderF.checked == false){
    alert("Please select your Sex");
}

// Optional / Practice validation of language selection using if statement
// if(langE.checked == false && langNe.checked == false){
//     alert("Please select your Language");
// }

// Optional / Practice validation of About input to accept alphanumeric charcters using .match method
// if(about.value == false){
//     alert("Please add aditional infomation in About")
//     about.style.border="1px solid red";
// } else {
//     let aboutRegex = /^[0-9a-zA-Z\s]+$/
//     if (about.value.match(aboutRegex)){
//         // alert("Correct input")
//         about.style.border="1px solid green";
// }}

};