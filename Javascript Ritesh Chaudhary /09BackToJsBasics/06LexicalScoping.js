//lexical programing is nothing but actually the old school way to write javascript as we discussed earlier that we preffer functional programing but before functional programing we use lexical scoping to write javascript

//so we have something great points in that approch so we will gonna see that...

//init => is actually initialisation
function init() {
  var firstName = "Deepak";
  function sayName() {
    console.log(firstName);
  }
  sayName();
}
init();
console.log(firstName);
// as we all studied about execution context and global contex we all know that why firstName console log dosen't work so the reason is simple as soon as the init is called we made a execution context above the global context and in that firstName is declared and then when sayName is called then also the a new wxecution context is created on the top and as soon as sayName funtion is executed then that execution context get removed simillarly init execution context get removed after being executed and var firstName is removed with that execution context thats why it is not working...

//? but if we stored this function in a variable then the senario is completely different and thats what we called """""closure""""" which we use in redux.....so understand this carefully its important...

//# closure is hard to understand but we have to do it as we need this to code...

