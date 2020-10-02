// A function is a group of statements that has a name & performs a specific task

function my_num(){
    const num1=100, num2=300;
    var sum=num1+num2;
    console.log(sum);
}
// Invoke of call the function
my_num();

// another way of function definition
// parameters are defined in the () in the function below eg. (num1,num2)
function addNum2(num1,num2){
    const adding = num1 + num2;
    console.log(adding);
}

// arguments are the values we put in the function definition in the place of parameters
addNum2(20, 30)
addNum2(50, 30)
addNum2(3, 10)