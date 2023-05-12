//====UNDERSTANDING OBJECTS FULLY=====//

var obj = {
  name: "Deepak",
};
console.log(obj);
//when you print an object then you got ==> _proto_

//# in this _proto_ we can see a whole lot of stuff (img 1 in folder) ==> like constructor, toString,  valueOf....

//# and there are so many properties inside the properties (img 2 in folder)==> we can see that there is ""f"" written on the every value of the object.....for example => constructor: ƒ Object()..

//! this "f" denotes that it is a function object...

//todo so lets how we can take advantage of this _proto_ and its properties....and what is this "f" keyword

// so far i have seen that we are declaring object with key and value pair...but here we gonna declare that with the help of function......lets see how-----------

//===lets do wih a situation===

//# every time user logged in to the website we want a identification of it like name, course taken and all....... and i cant do this thing manually so i have to make a prototype to do all this stuff......we also want every user to be unique so that the course of the two user dosent mix up....so lets go

//it is not compulsary but it is recomended that when you are going to create some prototype like this we use first letter capital in the variable...

var User = function (firstName, courseCount) {
  this.firstName = firstName;
  this.courseCount = courseCount;
  this.getCouseCount = function () {
    console.log(`Course count is: ${this.courseCount}`);
  };
};

//i am sure you havent seen this type of thing and you are confused...this is a functional way of defining an object...... now you can define unique object without editing them manually...basically this is a prototype..

// basically we have defined a prototype for every single user which is going to login to this website...we store there information in an object and make sure that the object is unique also....

//# as we can see in img 1 (in the folder) there is a conustructor there and when ever there is a constructor included there will be """new""" keyword associated with it...

//===NOW USER LOGIN TO THE WEBSITE===

var deepak = User("Deepak", 2);
console.log(deepak);
//o/p:-  undefined

//! if we cross check object function is correct..every thing is fine ..problem is we use this to create object and here """"User("Deepak", 2);"""" this is not creating an object...so how to create object...

// if you want to create an object this way you have to use """"new"""" keyword..

var deepak = new User("Deepak", 2);
console.log(deepak);

// o/p:- User {
//   firstName: 'Deepak',
//   courseCount: 2,
//   getCouseCount: [Function (anonymous)]
// }

// so we have created a new user whose properties are store in an object successfully with the help of proto functioning of object.

var sam = new User("Sam", 4);
console.log(sam);

// o/p:- User {
//     firstName: 'Sam',
//     courseCount: 4,
//     getCouseCount: [Function (anonymous)]
//   }

// we can creally see that the new user is created with different properties.

//# what new keyword doing here...

//# (1):- this new keyword is responsible for the executing the code of functional object as we have already seen...

//# (2):- this new keyword is responsible for invoking a constructor and creating a unique instant(unique user) every single time.. thats why we have said that if constructor is one of the properties of the object then we can use ""new"" keyword to it...

//# (3):- as we have already discussed.....for all ""regular function"" call then this keyword points towards the global object....and here User("Deepak", 2); is look like a regular function....and thats why it says undefined when we call it without new keyword because it is calling a global object....

//? but when we use ""new"" keyword this will do great thing towards the function call...first it make the copy of the functional object prototype which is....

// var User = function (firstName, courseCount) {
//     this.firstName = firstName;
//     this.courseCount = courseCount;
//     this.getCouseCount = function () {
//       console.log(`Course count is: ${this.courseCount}`);
//     };
//   };

//? and then new keyword move this keyword from global object to inside of this user functional object...so now as soon as we use the new keyword like this """new User("Sam", 4);"""  it will not the normal function call...



