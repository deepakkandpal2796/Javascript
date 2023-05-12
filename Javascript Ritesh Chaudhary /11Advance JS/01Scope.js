// var, let and const keywords

// for backend related work there always been a problem which is scope and after some time the developer find its answer and finally the let keyword came into picture...

//# in other languages {} curly braces considered as a scope but in javaScript function is considered as a scope...what do you mean by scope ??

//? basically in most of the languages scope are the brackets inside of which if a variable is decleared then it cant be used outside..but in javascript scope is a method/function

//so what is the problem with var and const why let is required

//basically var and let are the same...we can rewrite value again and again...but there is a differnce in other languages and javascript because of which let is introduced....


//! (1) error and undefine

console.log(firstName);
var firstName = "Deepak"
// o/p:- undefined

//! now this undefined is good in front end we see this thing and make thing change to get desired output...but....whenever we are working in backend undefined is really make you crazy to find the mistake.....""""so it is better to have an error as compared to undefined in backend"""" 

console.log(firstName);
let firstName = "Deepak"
// o/p:- error

//! (1) scoping problem

//# as in javascript the scope is function not the brackets{} so if i say

if(true){
    var lastName = "kandpal"
    console.log(lastName);
}

//# and if i say this

if(true){
    var lastName = "kandpal"
}
console.log(lastName);

//these both act as same so this is very confusing and very hard error or mistake to track sometime that a variable is available to use outside the scope....same in for loop if we say for(var i = 0; i <10; i++){} so i can be used outside of this scope also...and to make it stop we have introdeuced let 

//!""always use let keyword in scoping"" for eg
if(true){
    let lastName = "kandpal"
    console.log(lastName);
}

// in for loop also use let

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}
