// Accessing form elements by name
const validateLogin = () => {
  const userID = document.farmerLogin.userid;
  const password = document.farmerLogin.passid;
  const roleType = document.farmerLogin.selectRole;

  // Validating Username input to have 5 to 12 charcters (letters & numbers) using .test method
  // show warning text below form input (instead of pop up alert) using .innerHTML
  let idRegex = /^[0-9a-zA-Z]{5,12}$/;
  if (idRegex.test(userID.value) == false) {
    userID.style.border = "3px solid red";
    text =
      "<b>*Username is invalid.</b> <br> Avoid leaving this blank, adding spaces or special characters in your input.";
    document.getElementById("usernameAlert").innerHTML = text;
  } else {
    text = "";
    document.getElementById("usernameAlert").innerHTML = text;
    userID.style.border = "";
  }

  // Validating password input to have 6 to 12 charcters (letters, numbers & special characters) using .test method
  let pwdRegex = /^(?=.*\d)(?=.*[a-zA-Z]).{6,12}$/;
  if (idRegex.test(password.value) == false) {
    password.style.border = "3px solid red";
    text =
      "<b>*Password is invalid.</b> <br> Please use 6 to 12 characters & avoid leaving this input blank.";
    document.getElementById("pwdAlert").innerHTML = text;
  } else {
    text = "";
    document.getElementById("pwdAlert").innerHTML = text;
    password.style.border = "";
  }

  // Validating role selection using if statement
  if (roleType.value == "default") {
    roleType.style.border = "3px solid red";
    text = "<b>*Dont forget to select your role!</b>";
    document.getElementById("selectAlert").innerHTML = text;
  } else {
    text = "";
    document.getElementById("selectAlert").innerHTML = text;
    roleType.style.border = "";
  }
};
