//Assignment - Create a program that displays a message with a grade depending on the numerical score

const grade = 120;

if(grade<50 && grade>=0)
{console.log("You failed the test")}
else if(grade>=50 && grade<65)
{console.log("You passed the test")}
else if(grade>65 && grade<80)
{console.log("You got a B")}
else if(grade>=80 && grade<=100)
{console.log("You got an A")}
else
{console.log("Grade should be between 0 and 100.")}