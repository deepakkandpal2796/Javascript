//# There are two type of context available to us one is global context and the other one is execution context.
//! What is execution context???
var num = 1;            // This is stored on global context.
function sayMe(){
    console.log("Say me");  // This time also get stored in global context.
}
sayMe();  // but when we want to execute something then the execution context get kicks in....so when i call say me function as say me function has some thing to execute(console.log) then execution context comes in and when this function is executed it goes away...


// The execution context remain there until the execution of the code/function is completed, sometime it take long time & somtime it is so quick.....




//# The whole idea behind global context is to just collect the information.....but as soon as you want to run some code for example console.log then execution context kicks and when this logged in console then execution context just goes away.




//==============================================================


//SUMMERY;

//# we have global context which is collecting information about every thing happening in the code....in majority of the cases its the window object that is available......window object is tied with the browser....

//# we also saw that there are some execution context which is keeps on comming and going...There can be more than one execution context at a time......for example:- may be the 1st execution is long and in middle of that a new execution comes in hence new execution context is formed for that......and hence the execution context stacking one over other......these execution context notjust comes with the function it comes with every line of code that we want to execute...and as i mentioned if the execution is just of one line then it just come and go away, if a execution is of long function, big context comes in code will execute and then it goes away...


//# assume there is three execution context for function 1 2 and 3rd for console log....1st console log get executed and its execution context goes away then the one is smaller between 1 and 2 execute and goes away and the last the longer one execute and goes away.....they form a stack upon each other depending upon the time that context take the one take more time be on the more bottom in the list......(or if they are interdependent then the parent one comes at the bottom.)

//! execution context comes with 3 more thing.......(1)variable object  (2)scope chain    (3)this keyword..........these we will study later....

//* remember just two things:- (1) function declarations are scanned and made available.........as we see in the following code function scanned and made available for the whole code...thats why the below code is executed...

                            //VARIABLE OBJECT//

sayhello();

function sayhello() {
  console.log("Hello");
}

//* (2) variable declaration are scanned and made undefined......variable declation scan hoti h but variable undefined bn jata h..... and you can filled that variable ahead with string, numbers, and all that stuff...




//WAP to give 5$ tip in a restraunt on every meal.

tipper("40"); // we know this will work because of the global context concept.....

function tipper(money) {
    var bill = parseInt(money)  //parse int is to convert any thing string float variable to int 
    console.log(bill + 5);
}


//# But if we will write it in a different way....

var tipper = (money) => {
    var bill = parseInt(money)  //parse int is to convert any thing string float variable to int...... 
    console.log(bill + 15);
}

tipper("50"); // this will work as we have seen in past lectures.......


// but when we call this function early


var bigTipper = (money) => {
  var bill = parseInt(money)  //parse int is to convert any thing string float variable to int...... 
  console.log(bill + 15);
}
bigTipper("50"); 

//? But this will show us an error....because read the second statement....variable declaration are scanned and made undefined......variable declation scan hoti h but variable undefined bn jata h...

//# I know this bigTipper is a function but this bigtipper is function in variable.....tipper is a function and bigTipper is a function variable in....

// so here var bigTipper which we used as function is undefined in global context hence it cant be access early...


//let me show you one more intresting thing...

// var Name = "Deepak";
// console.log(Name);

// this works absolutely fine.....

console.log(Name);
var Name = "Deepak";

// this shows us name is undefine....//! remember that undefine is differnt from error...
//# here the js says that the variable is defined somewhere in code its just that right now it is undefined....because of the 2nd property (variable declaration are scanned and made undefined)...


//?let me show you one more intresting thing...

// console.log(Name);   //this will gove us undefine...
// var Name = "Deepak"; //saved to global context

function sayName (){  // function save to global context not the name 
  var Name = "Mr. X";
  console.log(Name);
}

sayName(); // This comes in execution context block as it is calling a function and that function is executing something.....and as execution context block stored above of global context block hence javascript has nomore know about deepak name....so it store name as mr x.......this stored in excution context and once its completed its gone..
console.log(Name); //now the execution context is gone and new execution context come up which only knows about the name deepak...because the past name mr. x is stored in execution context which is gone... this in cpp said and global and local variable..
