// objects are basically a key value pair, it is a lot more easier to use than array.
var user = {
  firstName: "Deepak", //key = value
  lastName: "kandpal",
  role: "admin",
  loginCount: 34,
  facebookSignedIn: false,
};
//? how to access value from objects ==> u have to use the key and it will give you the valur of it
console.log(user);
console.log(user.firstName);
console.log(user.facebookSignedIn);
// another way to access is not using dot and using brackets insted.
console.log(user["lastName"]);


//how to change value of the keys in the object 
console.log(user.loginCount);
user.loginCount = 44;
console.log(user.loginCount);


// you can use console.table to use the table to show the result...
console.table(user);

