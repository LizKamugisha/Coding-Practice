const validateRegForm =() => {
    const userID = document.registration.userid;
    const password = document.registration.passid;
    const name = document.registration.username;
    const userAddress = document.registration.address;

    const userCountry = document.registration.country;
    // const countryAF = document.getElementById("af");
    // const countryAL = document.getElementById("al");
    // const countryDZ = document.getElementById("dz");
    // const countryAS = document.getElementById("as");
    // const countryAD = document.getElementById("ad");

    const zipCode = document.registration.zip;
    const eMail = document.registration.email;

    // const gender = document.registration.sex;
    const genderM = document.getElementById("sexM");
    const genderF = document.getElementById("sexF");

    const language = document.registration.lang;

    const about = document.registration.desc;

// Validating user Id input to have 5 to 12 charcters (letters & numbers) using .test method
let idRegex = /^[0-9a-zA-Z]{5,12}$/;
if(idRegex.test(userID.value) == true){
    alert("Valid user ID has been used");
    userID.style.border="1px solid green";
} else {
    alert("Invalid user ID. Please only use 5 to 12 characters to create your User ID.");
    userID.style.border="1px solid red";}

// Validating password input to have 7 to 12 charcters (letters, numbers & special characters) using .test method
let pwdRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{7,12}$/;
if(idRegex.test(password.value) == true){
    alert("Valid password been used");
    password.style.border="1px solid green";
} else {
    alert("Invalid password has been used. Please only use 7 to 12 characters to create your password.");
    password.style.border="1px solid red";}

// Validating Name input to have only alphabate charcters using .test method
let nameRegex = /^[a-zA-Z\s]+$/;
if(nameRegex.test(name.value) == true){
    alert("Valid name has been used");
    name.style.border="1px solid green";
} else {
    alert("Invalid name has been used. Please only use alphabetic characters to create your name.");
    name.style.border="1px solid red";}

// Validating Address input to have alphanumeric charcters using .test method
let addyRegex = /^[0-9a-zA-Z\s]+$/;
if(addyRegex.test(userAddress.value) == true){
    alert("Valid address has been used");
    userAddress.style.border="1px solid green";
} else {
    alert("Invalid address has been used. Please only use letters or numbers to create your address.");
    userAddress.style.border="1px solid red";}

// 1st Appempt Validating country input using .match method
// if(userCountry.value.match(countryAF,countryAL,countryDZ,countryAS,countryAD)){
//     alert("Valid country has been selected");
//     userCountry.style.border="1px solid green";
// } else {
//     alert("Invalid selection, Please select a country from the options provided.");
//     userCountry.style.border="1px solid red";
// }

// 2nd Attempt Validating Country
if(userCountry.value == "Default"){
    alert("Please select a country.");
    userCountry.style.border = "1px solid red";
} else {
    alert("A country has been selected");
    userCountry.style.border = "1px solid green";
}

// Validating Zip Code input to have only numeric charcters using .test method
let zipRegex = /^[0-9]+$/;
if(zipRegex.test(zipCode.value) == true){
    alert("Valid zip code has been used");
    zipCode.style.border="1px solid green";
} else {
    alert("Invalid zip code has been used. Please only use numbers to create your zip code.");
    zipCode.style.border="1px solid red";}

// Validating email adress input using .test method
let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
if(emailRegex.test(eMail.value) == true){
    alert("correct email has been used");
    eMail.style.border="1px solid green";
} else {
    alert("incorrect email has been used");
    eMail.style.border="1px solid red";
}

// 1st Attempt Validating gender selection input using .match method
// if(gender.name.match(sex)){
//     alert("Valid option has been selected");
// } else {
//     alert("Invalid selection, Please select a sex from the options provided.");
// }

// Validating gender selection using if statement
if(genderM.checked == false && genderF.checked == false){
    alert("Please select your gender");
}

// Optional validation of language selection input using .match method
if(language.value.match(lang)){
    alert("Valid option has been selected");
} else {
    alert("Invalid selection, Please select from the options provided.");
}

// Optional validation of About input to accept alphanumeric charcters using .match method
let aboutRegex = /^[0-9a-zA-Z\s]+$/;
if(about.name.match(desc)){
    alert("Valid input has been used");
    about.style.border="1px solid green";
} else {
    alert("Invalid input has been used. Please only use letters or numbers to write your comment.");
    about.style.border="1px solid red";
}

};