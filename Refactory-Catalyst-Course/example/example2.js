// A diffent way to write callback function
// Access html elements & creating a copy paste function
// Directly accessing the div element and its attributes
const source = document.querySelector("div.source");

// event listner to capture data & convert to string & upper case
// clipboard - memory space for data in transition
// preventDefault clears the value/data that was copied on the clipboard in order to store a new value / data.
source.addEventListener("copy", (event) => {
  const selection = document.getSelection();
  event.clipboardData.setData("text/plain", selection.toString().toUpperCase());
  event.preventDefault();
});
