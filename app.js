// data types and variables
var myName = "James";
var myAge = 30;
var mySurname = "Berry";
console.log(myName + " " + mySurname);

// conditiionals
var pinNumber = 1234;
if(pinNumber=== 1234){
console.log("correct pin number");
}else{
  console.log("incorrect");
}

// loops
var animals =["cat", "donkey", "goose"];
for (var i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// functions
var printName=function(){
console.log("James");
}
printName(); // command shift D
printName();
printName();
printName();

// arrays
var pubNames = ["Cloisters", "4042", "The Red Lion"];
console.log(pubNames);

// objects
var person = {
  name : "James",
  pinNumber: 1234,
  tel: 123456
}
console.log(person.name);
