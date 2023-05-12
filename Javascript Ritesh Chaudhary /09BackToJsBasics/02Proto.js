var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCouseCount = function () {
    console.log(`Course count is: ${this.courseCount}`);
  };
};

var deepak = new User("Deepak", 2);
// console.log(deepak);
deepak.getCouseCount(); // o/p:- Course count is: 2
//! this proves that every object we created is unique as we can see course count for deepak and sam are different from each other...
//? there is no method now for get firstName we can grab it directly like ==> console.log(deepak.firstName)
//todo i want to create a method not a manual one...
//# when you are working on the big projects and you want to add something to the object you can't go back to the orignal object and change this is non sense as it take so much time and effort ==> so what we do then? ==> we access proto

// all the bject have __proto to access the __proto we write User.prototype ==> and now in here you can give them more properties more function geters seters and all that...i am giving a new method here

//here we can access all the properties of the above object because technically this is the part of the object...
User.prototype.getFirstName = function () {
  console.log(`Your first name is: ${this.firstName}`);
};

//basically i am not changing the actually object i am injecting a new method from outside...

//as soon as the new instance is created this """new keyword """ have the job to find all this type of prototype and inject that in to the main object..basically we can also acess them as the same element of the object...

deepak.getFirstName();  // o/p:- Your first name is: Deepak

var sam = new User("Sam", 4);
// console.log(sam);
sam.getCouseCount(); // o/p:- Course count is: 4
sam.getFirstName();  // o/p:- Your first name is: Sam


//# === PROTO SUMMARY===
//? With the help of proto we can add the method, property or any functionallity to the object from outside and ==> as soon as we inject new properties from outside the new keyword does it job and consider all the properties or method we have declared inside or outside the object...and hence we can use it ...when we are doing some big project then we use this without going to the main object add method and properties in next line using proto...

// if we see in img1 in new keyword folder... now if we add this object code in console and then add User.proto we will see that proto have the new element in his list ((img1 new keyword folder)) whose name is getFirstname .......us we can use all the proto there we can use getters setters to actuallly over write these properties and all that to do stuff..you have to study about all this to access



