const myStates = ["Delhi", "Rajasthan", 1947, "Kerela", "Tamilnadu", "Assam"];

//in documentation for each loop is not considered as a loop but as a method on the array....but it is a loop....

// var i = 0;

// for (;;) {
//   if (i > 3) {
//     break;
//   }
//   console.log(i);
//   i++;
// }

//# the above is a simple quiz question which simply means no conditon check by for loop...but if condition check a condition and hence the result comes out....


//=================== FOR EACH =========================
//? for each takes a call back function loop.... which goes through the each and every element of an arrays ...
myStates.forEach((s) => (console.log(s)));
//# basically to access the array most of the people uses the foreach loop instead of normal for loop as it makes it easier....