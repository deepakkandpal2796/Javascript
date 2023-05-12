//just like we inherit something from our parents....classes can inherit properties from their parents and to inherit properties from parent classes have to bacome child...

//for example we have a class here and i want to use properties of this class, so i make a child class and inherit the properties of the parent class to it

//===========================================================

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   #courseList = [];

//   getInfo() {
//     return { name: this.name, email: this.email };
//   }
//   enrollCourse(name) {
//     this.#courseList.push(name);
//   }
//   getCourseList() {
//     return this.#courseList;
//   }
//   login() {
//     //this is the new method we add this time to give an example
//     return `You are logged in`;
//   }
// }
// module.exports = User;

// //# syntax to make a child class => """class childName extends parentName{}"""
// //now all the properties methods functions that defined in the User class Subadmin can also acess them

// class Subadmin extends User {
//   getAdminInfo() {
//     return `I am sub-admin`;
//   }
// }

// //# how to access the child class =>

// const tom = new Subadmin();
// console.log(tom.getAdminInfo()); // this method is defined in the Subadmin  o/p:- I am sub-admin

// console.log(tom.login());// this is define in the User and not in the Subadmin o/p:- You are logged in
// console.log(tom.getInfo()); // this is define in the User and not in the Subadmin o/p:- { name: undefined, email: undefined }
// this is undefine because we have to provide info to the getInfo method to use that so lets provide info

//===========================================================

//#==========HOW TO USE SAME CONSTRUCTOR IN CHILD CLASS=====================

//(1)st method first is you can copy the constructor and paste in the child and then use it but imagin if you have to add some more values to the constructor it become very messy
// (2)nd method is to use the super keyword which is a method
// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   #courseList = [];

//   getInfo() {
//     return { name: this.name, email: this.email };
//   }
//   enrollCourse(name) {
//     this.#courseList.push(name);
//   }
//   getCourseList() {
//     return this.#courseList;
//   }
//   login() {
//     return `You are logged in`;
//   }
// }
// module.exports = User;

// class Subadmin extends User {
//   constructor(name, email) { //?make a constructor who is taking name and email for the child class
//     super(name, email); //? you can simply pass the name and email that you are getting for the child class to the super, it will take the name and email from the child class to the parent class and use it over there...
//     //# if you are thinking it is a normal method, so look at this as a new perspective.... the above class is a library ....it makes so easy to control a library from your way....super is super useful
//   }
//   getAdminInfo() {
//     return `I am sub-admin`;
//   }
// }

// const tom = new Subadmin("Tom", "tom@jerry.com"); //?
// console.log(tom.getAdminInfo()); // o/p:- I am sub-admin

// console.log(tom.login()); // o/p:- You are logged in
// console.log(tom.getInfo()); //? o/p:- { name: 'Tom', email: 'tom@jerry.com' }

//===========================================================

//#==========HOW TO MAKE PROPERTIES OF THE PARENT CLASS PRIVATE  (static keyword)=====================

//# FOR EXAMPLE I DONT WANT TO SHARE THE LOGIN METHOD TO ANY CHILD
//? simple use the static keyword in front of the method which you dont want to share....

// class User {
//   constructor(name, email) {
//     this.name = name;
//     this.email = email;
//   }
//   #courseList = [];

//   getInfo() {
//     return { name: this.name, email: this.email };
//   }
//   enrollCourse(name) {
//     this.#courseList.push(name);
//   }
//   getCourseList() {
//     return this.#courseList;
//   }
//   static login() {  //# i dont want to share this method
//     return `You are logged in`;
//   }
// }
// module.exports = User;

// class Subadmin extends User {
//   constructor(name, email) {
//     super(name, email);
//   }
//   getAdminInfo() {
//     return `I am sub-admin`;
//   }
// }

// const tom = new Subadmin("Tom", "tom@jerry.com");
// console.log(tom.getAdminInfo()); // o/p:- I am sub-admin

// console.log(tom.login()); //# o/p:- TypeError: tom.login is not a function
// console.log(tom.getInfo()); // o/p:- { name: 'Tom', email: 'tom@jerry.com' }

//===========================================================

//#==========PREFRENCE OF THE METHOD IF THE METHODS IN CHILD AND PARENT CLASS ARE SAME============

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  #courseList = [];

  getInfo() {
    return { name: this.name, email: this.email };
  }
  enrollCourse(name) {
    this.#courseList.push(name);
  }
  getCourseList() {
    return this.#courseList;
  }
  login() {
    //# i want the same method in the child class to check which will got executed
    return `You are loggedIn as a Admin`;
  }
}
module.exports = User;

class Subadmin extends User {
  constructor(name, email) {
    super(name, email);
  }
  getAdminInfo() {
    return `I am sub-admin`;
  }
  login() {
    //# this method will get executed not the one in the parent class
    return `You are loggedIn as a Sub-Admin`;
  }
}

const tom = new Subadmin("Tom", "tom@jerry.com");
console.log(tom.getAdminInfo()); // o/p:- I am sub-admin

console.log(tom.login()); // o/p:- You are loggedIn as a Sub-Admin
console.log(tom.getInfo()); // o/p:- { name: 'Tom', email: 'tom@jerry.com' }

//? JavaScript will overwrite the method and use the method which is in the child class


