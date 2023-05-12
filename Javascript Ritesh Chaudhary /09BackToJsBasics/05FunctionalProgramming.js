//# SELF EXECUTING ANONOMYOUS FUNCTION(ALSO KNOWN AS An IIFE (Immediately Invoked Function Expression)) 

// SELF EXECUTING ANONOMYOUS FUNCTION => this is the type of function that you don't have to call... these are self executing so they call themself automatically..
//? these function dont have name because we dont want to call the function as they are self executing...

//! SYNTAX
(function () {
    console.log("Say Hello");
    console.log("I Say Hello");
})();


//# FUNCTIONAL PROGRAMIMG

//regular functional way to do

let score = 456;
function addBonous(){
    score = score + 45;
    return score;
}

//functional programing

function addBonous(score){
    return score+45;
}

//! rule 1:- keep your data and your function totally seprate because while debugging functional programing code is very easier to debug as it is not reffering to any global variable which might be causing problem...
//# it is more like self intake function as it is not depending on any global variable and just returning the answer....so basically it is just making calculation and its up to us to store this answer...

//========State change in functional programing==========
//It says that you not change the state much often as much as you can avoid changing plz do...example

deepak = "smart";
deepak = "bhaut smart";
deepak = "bhaut zayada smart";

//? so basically we are just updating the value which is correct but the problem is we not do this in functional programing...what we do is we create a similar global variable to address the new properties.

deepakAfterShower = "bhaut smart";
deepakBeforeShower = "bhaut zayada smart";



//========Function are treated as the first class==========

const number = 45;
const name = "Deepak";

// it says that what we are doing with the number and strings that we can return them in a function  use them in a function or anywhere in code.....we can do same thing with the function....

const addScore = function (score){
    return score + 45;
}

//# basically we have to do programing in such a way that when we call a function we are able to pass the function as an atribute in a function...example

// sayHello(function(){...}){
//     return  function(){...};
// }

//! So we can store the function as variable 
// const addScore = function (score){
//     return score + 45;
// }

//! we can pass the function as a perimeter
// sayHello(function(){...}){
//     return  function(){...};
// }