var user = {
    firstName: "Deepak", //key = value
    lastName: "kandpal",
    role: "admin",
    loginCount: 34,
    facebookSignedIn: false,
    courseList: [],  //user log in to the website and dosent have any courses.
    //buyCourse it not the number or the name it is going to be a method, lets learn how to add method or we can say function as a key value pair. we want the name of the buy course is just added to the course list. 
    buyCourse: function (courseName) {    
        this.courseList.push(courseName)  //push add value to the array.
    },    
    // this syntax is same as the normal fuction syntax just the name shifted in front of the function  function name(){}   ==>   name : function() {}.....
    // we can't use user. because we are already in the user so instead of the user we use this keyword ==> this simply mean that access the current object you are in....we cant directly use courseList because in the further code may be we use courseList variable as boolean so it will take that one..hence we use this keyword to access the same object we are in....
    getCourseCount: function () {
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    }
  };

console.log(user.getCourseCount());
user.buyCourse("JavaScript", "MERN");
console.log(user.getCourseCount());
console.log(user.courseList);
user.buyCourse("MERN");
console.log(user.getCourseCount());
console.log(user.courseList);

  var courseList = false;


// practically tum smjhe kaise hota hai hisab...tumne kisi course buy pe click kiya to vo course kasie tumhare personal account me log hota hai
//# abhi ke liye isme bhaut sari cheezen imperfect hai like koi empty string nhi pass kr skta vala option nhi hai...ek course bar bar nhi khreed skta koi bhi.....
