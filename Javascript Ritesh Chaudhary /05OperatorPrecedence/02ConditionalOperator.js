// IF ELSE and NESTED IF ELSE


//* if user want to purchase code on udemy then they will need:
//*       1. user must be logged in.
//*       2. Email confirmation. 
//*       3. card details must be correct. 

var isLoggedIn, isEmailVerified, cardInfo;
isEmailVerified = true;
isLoggedIn = true;
cardInfo = false;

// if (isLoggedIn) {
//     console.log("Logged IN succesfully");
//         if (isEmailVerified) {
//             console.log("Email is verified");
//             if(cardInfo){
//                 console.log("You can make a purchase");
//             }
//             else{
//                 console.log("Please re-enter the card details");
//             }
//         }
//         else{
//             console.log("Email is not verified");
//         }
// }
// else{
//     console.log("Not succesfully loged in");
// }


if (isEmailVerified && isLoggedIn && cardInfo) {
    console.log("You are allowed to make purchase");
}
else{
    console.log("Please try to re-enter your detail");
}



//* Q2- allow user to use website if he is logged in Form:-
//*      (a) google.
//*      (b) facebook.
//*      (c) email.


// here we use or condition to do that ||  i am not doing this with nested if else || you can do that.

var isLoggedInWithGoogle =true , isLoggedInWithFacebook = false, isLoggedInWithEmail = false;
if(isLoggedInWithGoogle || isLoggedInWithFacebook || isLoggedInWithEmail){
    console.log("You are allowed to access website");
}
else{
    console.log("Please logIn with Google, Facebook or E-mail again");
}