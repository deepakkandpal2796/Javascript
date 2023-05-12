//# array is collection of data....

//! general Naming in coding.... {}these are braces or curly braces....() these are pranthieses....[] these are brackets....

var name;
var name2;
var name3;

// its not the precise way to do this we can make an array and store all the names in that array...
// index of the array starts from "0"....

var countries = ["India", "USA", "Japan", "Russia"];

//#  New style of declaring array.....

var states = new Array("Delhi", "Hariyana", "Goa", "Mumbai");

//? ACCESSING VALUE OF ARRAY...

console.log(states); //? For accessing all the elements in array.....

console.log(states[0]);
console.log(states[2]); //# for accessing specific index....

//* Methods in array ..... just by putting a dot after variable name take you to the method section.....

console.log(states.length); //? it tells the length of an array....

//# method to replace value in array...its as simple as changing input to the variable ...

states[0] = "Punjab";
console.log(states);

var user = ["Deepak", "deepak@dev.com", 3, true];

//* yes here we can save all the different datatype data in an array....but this is not the right thing to do to store the different datatype.....We use object for that but i just showing ki this we can also do...

//# comming back to  methods again...

user.pop(); //? It removes the last value of the array.....true is removed
console.log(user);

user.pop(); //? 3 is removed
console.log(user);

states.unshift("New state"); //? add a value to the start and all the values are pushed backward...
console.log(states);

states.shift(); //? This will remove the value from the starting postion
console.log(states);

console.log(user);
console.log(user.indexOf("Deepak")); //? this will tell us the index of the value;

console.log(user.indexOf("Bhau")); //? The element which is not in the array this will give -1 corresponding to that value....

//todo  ======IMPORTANT========>>>>>>>>>>>       how we can use this ....we have studied if and else so if index is negative then tum dal sakte ho enter the existing values and search me nhi hai ...any thing...

console.log(Array.from("DEEPAKKANDPAL"));

//# It will make an array from this by seprating all the letters....

//!!  write Array. in vs code in js file and you will see a whole lot of method that you can use with the array and its recomended to study this so write notes about all of them;

// we can acess so many properties in the array just like length and u are wondoring what are those properties...open img1....in javaScript everything is treated as an object so we will acessing array as an object...

// how to declare an empty array
//var arr = [];
// var arr = new Array ();
//! they both are same but the 2nd one is the new format and commanly used now a days..
//then you can add all the data to it  arr[0] = India;
//arr.push("USA")
//arr.unshift("Japan")
//console.log(arr);

//we can also make a random variable and add an array in it......
// var newArr = states;

// here is not like cpp that you have to declare newArr[] and then the compiler understand that the  this is array here all the variable are same the type of data you store in the variable make the datatype of the variable......hence this (newArr = states;) works...
