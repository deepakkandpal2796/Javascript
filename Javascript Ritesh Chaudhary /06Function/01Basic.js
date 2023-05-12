//!  function is just a piece of code which is seprated out from the main code to reuse again and again.

// Syntax
function nameOfFunction() {
  console.log("This is the basic function");
}

nameOfFunction();
//    you can print this again and again by just writting a small and simple code

nameOfFunction();

//    refrencing and calling a function
nameOfFunction(); // calling a function.
nameOfFunction; // refrencing a function this we will study later, in libraries like react and view.

//  Using artribute in function.

function helloOlder(name) {
  console.log("hello there,", name); //But this is quite old thing to do.
}

helloOlder("Deepak");

//    new stuff is here

function helloNewer(name) {
  console.log(`Hello there,${name}. How are you?`); //you can use full statement here also just add dollar where you want ki yha artribute print ho.
}
helloNewer("Deepak");

// =====================================================================================

//now we are using the return keyword its simple as its name it is used to return the end product of a function.

function namestey() {
  return "Hello in India";
}
namestey(); //here this will print nothing because the function is returning the value and but not printing the value.

// so what we have to do when we are deleaing with return that we have to store this in a variable.

var greetings = namestey();
console.log(greetings);
console.log(namestey()); // you can use this also without making a variable.
