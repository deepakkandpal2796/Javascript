//CLOSURE IN JAVASCRIPT

// function init() {
//     var firstName = "Deepak";
//     function sayName() {
//       console.log(firstName);
//     }
//     sayName();
//   }
//   init();

//# this is the older method we discussed that hoe execution context work in this....

//# Lets do the new method which we are going to use in redux....

function init() {
  var firstName = "Deepak";
  console.log("I am init");

  function sayFirstName() {
    console.log(firstName);
  }
  return sayFirstName; //? here we are not loging the name we are returning the name that means that i am not runing this function directly but i have a refrence of this method(function) but i am not executing it right away...
}
// whenever i call init function it create the firstName in execution context and then it create another execution context on top of it which is a function called sayFirstName but it dosent executing that function....and it is passing the refrence so you can execut it where ever you like... so it stays in the memory and we can execute it whereever we like...

var value = init(); //! here we are calling the init function..so as soon as the inti runs it dosent really just execute and go away rather it gives me a refrence to the function called sayFirstName....hence if we look from the execution context point.... init execution context mounts up over global execution context and then sayFirstName mounts over init's execution context...but as sayFirstName is not executing it dosent goes away...we still got a refrence of it so the memory cant free it up......now if we comment value(); then we see that I am init is printing from this function now it is executing but its executional context not going away...because its has a refrence there...

//# so total removal of init and this sayFirstName function is not possible from execution context...

value(); //! now the value behave as sayName function because in the memory they are beahving as the same..and we can also prove that init execution contex is there as the sayFirstName is executing through this line and without var firstName = "Deepak"; it is not possible and this is in init execution context...

//=============LETS MOVE ON TO ANOTHER EXAMPLE=================

// function doAddition(x) {
//   return function (y) {   //#we are returning another function which is a refrence to the function doAddition without it addition cant be done
//     return x + y;
//   };
// }

//# how to use this function

// var add5 = doAddition(4); //# i want to use this function so i will pass the first artribute to the main function..now it is referring to the retun function which have y artribute..

// console.log(add5(5)); //# now in the memory the add5 variable is behaving as same as the retuning function...hence we can use that to pass value

// console.log(doAddition(5)(5));  //# we can also do this in the same line using 2 brackets side by side and first bracket value goes to the main function and the second bracket value goes to the referring function..


// you will be also seeing this 

//doAddition()()() //# this is called curring ..we have studied this in clouser example
