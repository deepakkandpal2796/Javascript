// import User from "./06Classes"; but in this case this dont work most of the time we use this but then we write import class in main file....not at the end module.exports

const User = require("./06Classes");
//this is the new way to imort any library from node module or any other class

const deepak = new User("deepak", "deepak@co.dev");

console.log(deepak.getInfo());
//o/p:-{ name: 'deepak', eamil: 'deepak@co.dev' } get info retun in object form

//we can aslo do console.log(deepak.getInfo().name); to acces name but to acces name directly is not the right way 1st store it in a variable and then access it

//# we can use ither methods also in the user class

deepak.enrollCourse("React Bootcamp");
deepak.enrollCourse("Angular Bootcamp");
console.log(deepak.getCourseList());
//o/p:- [ 'React Bootcamp', 'Angular Bootcamp' ] it return the output in an array courseList and that courseList is return by getCourseList() method...

//# majority of thing that you are reciving from database or classes will be in array and object format so we need to learn how to loop through them

let courses = deepak.getCourseList();

courses.forEach((c) => console.log(c));
console.log(courses.length); //to find lenght of data/array

// o/p:-   React Bootcamp
//         Angular Bootcamp
//now except of array we have these variable individually