const userId = "abcd0123";

//* const are same as var just the difference is there value cant be over written

var fullName = "Deepak kandpal";
var email = "deepakkandpal2796@gmail.com";
var password = "deepakkapeed";
var confirmPassword = "deepakkapeed";
var courseCount = 0;
var isLoggedInFromGoogle = false;


//! how to take input from the user;

// 1.usingalert which comes upin pop up and we enter the input.

// 2.using prompt, lets say u want to enter the value in fullName, then you will write:- 
//! full_name = prompt("Enter your name");  
// this is only work in console so you have to attch with html.
//todo   we have a way which will work without html page we will take later:-


//todo we can print this all by using console.log but it is very old way:-
// console.log(user_id)
// console.log(full_name);
// console.log(email);
// console.log(password)


//todo the newer way is using backTicks
console.log(`
    Your unique ID is: ${userId}
    Your user name is: ${fullName}
    Your email is: ${email}
    Your password is: ${password}

`);