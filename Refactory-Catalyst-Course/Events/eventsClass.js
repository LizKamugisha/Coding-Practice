// Our javascript is looking at the html as an object,
// therefore the functions are called methods.
// var p is accessing the value in the html element <p> using the method querySelector
// p.textContent changes / replaces the property of the variable p

var textChange = () => {
  var p = document.querySelector('p');
  p.textContent = "I changed because of an event handler";
}

var abc = () => {
  var a = document.querySelector('p');
  a.textContent = "Changed because of events listener";
};
const button = document.querySelector('button');
button.addEventListener('click', abc);

// A callback function is a function passed into another function as an argument, 
// which is then invoked inside the outer function to complete some kind of routine or action.