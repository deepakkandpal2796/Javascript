//# when we are using string most of the people use double and single quotes....these are ok but to be precise double quotes are used for string and single quotes are used for letters 

//# if you want to give apostrophe then you have to give a slash to specify that the sting dosent end here for example

// var firstName = 'Deepak\'s';
// var firstName = "Deepak\"s";


//? the other and cool way is to use backticks...in backtick you wont face any problem
// var firstName = `Deepak's`;


var firstName = `deepak`;
var fullName = `${firstName} kandpal`;

console.log(fullName);


//# we can do a lot of things with strings slice the string and all read documentation for more

console.log(fullName.charAt(0)); //char at index 0
console.log(fullName.endsWith("?")); //check string ends with ? or not
console.log(fullName.includes("deepak")); //check string includes sting or not
console.log(fullName.toUpperCase()); // make string upper case

