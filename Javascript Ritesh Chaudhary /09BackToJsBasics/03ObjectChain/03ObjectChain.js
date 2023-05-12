//object chain is commonly known as prototype chaining

//until now ==> we can make the object in a functional way and make unique user out of it.....we can also properties to the object in a functional way from outside of the object...

//ab aage

//so now we are working on a very small code but when we will be working on the big code we are not abe to go to the real funtional object add and properties thats why we add properties outside the object....

//# but is the name of any key of the property inside the object not matched to the function that we are giving out side the function then it will give "undefine" to us...check example below and which is much more bad then an error because we cant go back and search for all the code...

//!=============================ORIGNAL CODE=============================================
// var User = function (firstName, courseCount) {
//   this.firstName = firstName;
//   this.courseCount = courseCount;
//   this.getCouseCount = function () {
//     console.log(`Course count is: ${this.courseCount}`);
//   };
// };

// User.prototype.getFirstName = function () {
//   console.log(`Your first name is: ${this.firstName}`);
// };

// var deepak = new User("Deepak", 2);
// deepak.getCouseCount();
// deepak.getFirstName();

// var sam = new User("Sam", 4);
// sam.getCouseCount();
// sam.getFirstName();

//!=============================WRONG CODE EXAMPLE=============================================
//we made a typo here ==> we change the firstName key to firstNamee

//todo is code ko run krke dekhna agr smj nhi aaya to

// var User = function (firstName, courseCount) {
//   this.firstNamee = firstName;
//   this.courseCount = courseCount;
//   this.getCouseCount = function () {
//     console.log(`Course count is: ${this.courseCount}`);
//   };
// };

// User.prototype.getFirstName = function () {
//   console.log(`Your first name is: ${this.firstName}`);
// };

// var deepak = new User("Deepak", 2);
// deepak.getCouseCount();
// deepak.getFirstName();

// var sam = new User("Sam", 4);
// sam.getCouseCount();
// sam.getFirstName();

//# it will give "undefine" to us...and which is much more bad then an error because undefined has many reason to occur one of them is typo  other is bject is not properly defied but we hustle very hard to predect that..but we can use a property which sepecifically tells us the undefine comes from the key of the object 

//todo when we check on the object we find a proto in console and we can use the proto properties to make thing intresting as we know....

//# in proto we have another propety which is known as "hasOwnPropetry" (img1) => this will giv us true or false for the property which is already existing in that object (img2)

//look at the images to get the full picture 

//todo so for safty purpose we make a conditional satement ....so we can get that if undefine error occur which means we did something wrong with the object keys so we can go there and make it perfect....

// example
 var User = function (firstName, courseCount) {
      this.firstName = firstName;
      this.courseCount = courseCount;
      this.getCouseCount = function () {
        console.log(`Course count is: ${this.courseCount}`);
      };
    };
    
    User.prototype.getFirstName = function () {
      console.log(`Your first name is: ${this.firstName}`);
    };
    
    var deepak = new User("Deepak", 2);
    deepak.getCouseCount();

   //conditional run
   if (deepak.hasOwnProperty("firstName")) {
    deepak.getFirstName();
   }
   else{
       console.log("something is fishy in the object");
   }
 
//so we can make the conditional check to make our lives easy

