// Multi-dimentional array below 
var myNum = [10,20,30,[50,60,[70,80]]];

// Check the length of an array with .length
// The computer will print 4, because it counts the arrays within (on index 3) as one
console.log(myNum.length);

// The 2nd array is in position 3, 
// and the 3rd array is in position 2,
// and the value 80 is in position 1, within the 3rd array
// Therefore to print the value 80, we idenitfy it's position as explained above, and use the syntax below:
console.log(myNum[3][2][1])
