const demo = document.getElementById("demo");
demo.style.border = "2px solid purple";

const classDemo = document.getElementsByClassName("demo");
// classDemo[0].style.border= "1px solid orange";
// classDemo[1].style.border= "1px solid orange";

// You can also use for loop to access 2 elements with the same name (class.demo) This becomes an array
for (item = 0; item < classDemo.length; item++) {
  classDemo[item].style.border = "1px solid orange";
}
const demoTag = document.getElementsByTagName("article");
for (item = 0; item < demoTag.length; item++) {
  demoTag[item].style.border = "1px solid blue";
}

const querySel = document.querySelector(".demo-query");
querySel.style.border = "1px solid green";

// Using For Each to access elements
const querySelAll = document.querySelectorAll(".demo-query-all");
querySelAll.forEach((item) => {
  item.style.border = "1px solid red";
});
