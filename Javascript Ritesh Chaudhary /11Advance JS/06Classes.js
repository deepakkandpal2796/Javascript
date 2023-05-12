//?  ===INTRO===

// we are studying this now but until you make apps and website in javascript you are not able to get the real feel of the javascript

// until now we havent seen objects more and classes less..so we have to make the projects to understand completely but in react we are using classes more frequently..

//? intresting thing about classes that the classes alone dosent work they need object to work with...and classes also comes with constructor ..if you dont create a constructor the class automatically create an constructor which does nothing..therefore Always add a method named constructor().

//A JavaScript class is not an object....It is a template for JavaScript objects.

//#classes are just like the blueprint where you define how things should look like...and then we can just use it and create objects from them:-

//! But what is constructor??
//The constructor method is a special method of a class for creating and initializing an object of that class.
//A constructor enables you to provide any custom initialization that must be done before any other methods can be called on an instantiated object.
//If your class is a derived class, the default constructor calls the parent constructor, passing along any arguments that were provided.

//# The constructor method is a special method:-
// It has to have the exact name "constructor"
// It is executed automatically when a new object is created
// It is used to initialize object properties
// If you do not define a constructor method, JavaScript will add an empty constructor method.
// You can use the super() method to call the constructor of a parent class

//# LETS FIND OUT HOW TO DO IT

//# import class User{}   use this to use import User from "./06Classes";

class User {
  //genrally class name should be in capital letter

  //? intresting thing about classes that the classes alone dosent work they need object to work with...and classes also comes with constructor ..if you dont create a constructor the class automatically create an constructor which does nothing..therefore Always add a method named constructor().

  constructor(name, email) {
    //# for example whenever the new object would be created i will expect that you will pass me a name and email in the constructor.

    //i will create two properties here...

    this.name = name; //this.name is the properties of the user and name is the value is being passed on to me in the constructor.
    this.email = email;

    //? where we have declared this name and email....yes you can do that declare var name , email..... but most of the time when you came across constructor then you will see most of the people dont want to declare that they want to use this in this way...
  }
  //! inside the class you dont have to declare the thing like array and function

  courselist = []; //empty array

  getInfo() {
    return { name: this.name, eamil: this.email };
    //this method or function retuning the object who is taking value from the constructor..
  }
  enrollCourse(name) { 
    this.courselist.push(name); //this is a method or function that will push the name in the course list array 
  }
  getCourseList(){
    return this.courselist; //this method will give you the idea that in how many courses you are enrolled
  }
}

//here my class having some methods finshied now lets execute it....

// let deepak = User("Deepak", "deepakkandpal2796@gmail.com")
//# dont do this in the same file
//lets see how to makes your classes in some seprate file and use them in other file 

//! go to file classes02.js

module.exports = User;