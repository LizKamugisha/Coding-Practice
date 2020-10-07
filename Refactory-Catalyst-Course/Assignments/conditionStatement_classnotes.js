// Control statements & Structures
// Conditions are the best way to let the computer image by using control statements

function checkNum(num1){
    if(num1 === 10){
        console.log("num is " + num1);
    }
}

checkNum(10);
checkNum(2);

function oddNum(num2){
    if(num2 % 2 != 0){
        console.log(num2 + " is an odd number");
    }
}

oddNum(19)

function evenNum(num3){
    if(num3 % 2 == 0){
        console.log(num3 + " is an even number");
    }
}

evenNum(20)
