//#for all  """"regular function"""" call ..........this keyword points towards the global object,,,,,,,,,, which is window in chrome and scope ( {} ) in node..........basically global object..

console.log(this);
// o/p => {} scope is glbal object in node....
//! lets run the same code in chrome
//o/p => Window {0: global, window: Window, self: Window, document: document, name: "", location: Location, …}
//? because the global object in the chorme console is windoes object....

// var user = {
//   firstName: "Deepak",
//   courseCount: 4,
//   getCourseCount: function () {
//     console.log("Line 13", this);
//   },
// };
// user.getCourseCount();

// o/p => Line 13 {
//     firstName: 'Deepak',
//     courseCount: 4,
//     getCourseCount: [Function: getCourseCount]
//   }

//# this make 100% sense that if we call """this""" keyword inside an object it retuns the object....because tabhi hum kuch aise function use kr paye the phle vale code me........same thing happen if i run the code in browser it will give the full object....
// getCourseCount: function () {
//     return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
// }

//!========================most important point================================
//# user.getCourseCount(); remember this this is not a regular function call...this is a function call through an object.....
//? what is regular function call?
// function sayHello() {
//     console.log("hello");
// }
//! sayHello(); this is the normal function call....because it is direct not through the object....

//? why i am saying this????
//#for all  """"regular function"""" call ..........this keyword points towards the global object,,,,,,,,,, which is window in chrome and scope ( {} ) in node..........basically global object..

//todo===================let me show you something=========================

var user = {
  firstName: "Deepak",
  courseCount: 4,
  getCourseCount: function () {
    console.log("Line 48", this); // here the ""this"" keyword will not point towards the global object
    function sayHello() {
      console.log("hello");
      console.log("Line 51", this); //here the ""this"" keyword will point towards the global object.........paste this object in console
    }
    sayHello();
  },
};
user.getCourseCount();

//# if we check this is console then we can clealy see that line no. 48 this is pointing towards the object........weather line no. 51 this is pointing towards the global object....because sayHello(); is a regullar function call......
//? conclusion: so we can access the global contect if the function call is regular function call.....or nhi to tum object ke key value pair ko hi use kr skte ho......
//!====================most imp point when we use this type of thing in real life==================
// every where...most imp to understand it is used every where in recat and all types of framework.....

