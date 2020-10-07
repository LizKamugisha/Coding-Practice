// OOP = object orineted programing
// A concept that advocates for creating software based on real life objects
// There are objects & classes. An object is an instance of a class, & class is a blueprint or template from which objects are created.
// Class gives us the structure of an object, like a blueprint or template
// Note in JS, a function is a firstclass object. An array is also an object

// Declaring an object (myoop), it has the properties name, make, engine & year of make.
var myoop = {
    name: "subarulegacyb4",
    make: "Japan",
    engine: "ej25turbo",
    year: 2011,
}
// We use a dot operator (eg the '.' between 'myoop.make') to access the property / attributes / characteristics or function of an object
console.log(myoop.make);

// Declare a function within an object, this is called a method. 
// A method is a collection of behaviours that define what an object does to itself or others
// A behaviour is a statement (line of code) declaring the characteristics of the method
// This arragement below can only create one fixed instance of the object 
var breakfast = {
    eggs:"omlette",
    juice:"passion",
    coffee:"black coffee",
    bread:"brown bread",
    fruit:"banana",
    myOrder: function(){
        console.log("I want to order "+breakfast.eggs+" for breakfast")
    }
}
breakfast.myOrder();


// The block of code below is changing a function into an object
// "this." defines a property of a function, and we are assigning it to the values passed through the parameters
// This arrangement allows us to create as many instances of an object
function cow (color,breed,milkQty,size){
    this.color = color;
    this.breed = breed;
    this.milkQty = milkQty;
    this.size = size;
}

// A constructor is used to give values to a created object / Initialize an insatiated object 
var cow1 = new cow("Black & White","Fresian","10 liters","140 kg");
var cow2 = new cow("Brown","Ankole","4 liters","160 kg");

console.log(cow1.breed)