//in this we will learn how to pick the data....

//# the most common thinking is that destructuring can only happen in object which is not true..it can be done at a whole lot of places

//! the basic of destructuring is the dataType on the left hand side is same as the dataType at the right hand side and then ""probably"" you can do the destructring...remember i said probably

// const user = ["deepak", 3, "admin"];
// var role = user[2];
// var name = user[0];

// suppose there is an array of user information and here we want the information to be stored seprately so we can make variables and assign the array values to them

//# there is an easy way to do this whole thing which is to declare another array with element name and assign user values to it.

// var [name, courseCount, role] = user;

//? most of the times people do this with an object so lets see

const MyUser = {
  name: "hitesh",
  courseCount: 5,
  role: "admin",
};

console.log(MyUser.courseCount); 
//this is the basic way to access the values from object but this is such a long keyword and we cant be use this again and again 50 times in a code so we will do destructuring...

const { name, myCourseCount, role } = MyUser;  // this is how we copy object values to other object
console.log(myCourseCount); //o/p:- undefined
console.log(role); //o/p:- admin


//! 1st important point is that destructuring can also happen in arrays and a lot of other stuff and 
//! 2nd the name of the keys should be the same in object and the object in which you want to copy...similarly it goes with the maps the keys should be of same name otherwise it give you undefine...



