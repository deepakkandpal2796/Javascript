// *   Write a program to:-
// *        (a)  show user a signout button if he is login(authenticated).
// *        (b)  otherwise show user a login button

// var authenticated = true;

// if(authenticated){
//     console.log("Show sign out button");
// }
// else{
//     console.log("Show sign in");
// }

var authentication = false;

authentication ? console.log("Show sign out button") : console.log("Show sign in");