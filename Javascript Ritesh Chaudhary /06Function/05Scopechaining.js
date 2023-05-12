                                 //SCOPE CHAINING//
                                
{
    // in other languages like cpp or java ({}) these brackets are considered as scope...but in javascript there is a cathch this brackets are considered as scope but not for switch , for loops or for if and else ONLY FOR FUNCTION....
}

    //#  {}these are considered as scope only and only for the function ......
    // function myname(){

    //  }

    //# here these are considerd as scopes not of loops switchs and if else....


  //? now just remeber that you can ask for the value for the above but not from the lower one...what do i mean by this ...lets understant...

//   var name = "Deepak";
//   console.log("Line number 18", name);

//   function sayName(){
//       var name = "Mr. X";
//       console.log("Line number 22", name);
    
//       function sayNameTwo(){
//           console.log("Line number 25", name);
//       }
//       sayNameTwo();
//   }
// sayName();

//run this 


//* If you closly observe then you find this that the function sayNameTwo ask for the name variable from its upper guy....if its upper guy dosent have the name varible the they both are gonna ask for the name from their upper guy..

//# but remeber they never gonna ask for name from the lower member.....

var Name = "Deepak";
  console.log("Line number 39", Name);

  function sayName(){
      
      console.log("Line number 43", Name);
    
      function sayNameTwo(){
         var Name = "Mr. X";
          console.log("Line number 47", Name);
      }
      sayNameTwo();
  }
sayName();

//* As you can see here the sayName function used the name deepak from its above variable but not from the below function sayNameTwo...

//# now if we remove name from both then they both gonna ask for the name from the upper variable....

// var Name = "Deepak";
//   console.log("Line number 57", Name);

//   function sayName(){
      
//       console.log("Line number 62", Name);
    
//       function sayNameTwo(){
//           console.log("Line number 65", Name);
//       }
//       sayNameTwo();
//   }
// sayName();

//before running this function just comment out all the above function nhi to global context ki vajah se sab gadbad ho jayega because same name hai sare function and variables ke ...

//? Moral of the story is that if some varible is not in scope then it will gonna ask that variable from above not from the below ....WHAT EVER IT TAKES.......

