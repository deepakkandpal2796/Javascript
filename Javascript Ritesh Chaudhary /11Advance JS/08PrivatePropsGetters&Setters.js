// in this we will be studying about ""PRIVATE VARIABLE"" and we will see that what are "getters" snd "setters" and how are they closely related to private variable...



class User {   //calss name noramlly starts with capital letter
    constructor(name, email) {  
      this.name = name;
      this.email = email;
    }
    courseList = [];
  
    getInfo() {
      return { name: this.name, email: this.email };
    }
    enrollCourse(name) {
      this.courseList.push(name);
    }
    getCourseList() {
      return this.courseList;
    }
  
  }
  
  
//   module.exports = User; ==========>>>> for class export
  
  const rock = new User("rock", "rock@rock.com");
  console.log(rock.getInfo()); // o/p:- { name: 'rock', email: 'rock@rock.com' }
  rock.enrollCourse("Angular Bootcamp"); //lets add course in rocks list and access it
  console.log(rock.getCourseList()); // o/p:- [ 'Angular Bootcamp' ]
  console.log(rock.courseList);  // o/p:- [ 'Angular Bootcamp' ]
  
  //# got to question 1 below.


  //! question 1:- we are having the course list but still we are using method getCourseList() to access the course list ...but why......why dont we direct say rock.courseList...why we are doing the extra work???

  // this method getCourseList() is the getter but it is not because of the word get in the name it because it getting out the value from the private which in this case is not private....
  // simillarly enrollCourse(name) is a setter as it is setting the values inside the private variable which in this case is not private...
  // now this is a not compulsary but software industry use get and set words in the name of getter and setter function name so it will be easy to identify....

  //! DEFINATION:- GETTERS:- These are the the methods which we used to get the data from the private variable....the whole idea behind the getter is everybody cant acess the private variable directly
// usually in getters we dont need any parameters just we have to retun the value
  //! SETTERs:- These are the method through which you can manupulate the data of the private variable..the idea behind this is same as the getters...
// and in setters we have to pass the value which goes and added to the list


//# ====HOW TO CREATE PRIVATE VARIABLE====
//some framework will not allow this method to create a private variable but if you add # in front of the variable then that variable become a private variable and you cant access it directly

//!===EXAMPLE===

// class User {   //calss name noramlly starts with capital letter
//     constructor(name, email) {  
//       this.name = name;
//       this.email = email;
//     }
//     #courseList = [];
  
//     getInfo() {
//       return { name: this.name, email: this.email };
//     }
//     enrollCourse(name) {
//       this.#courseList.push(name);
//     }
//     getCourseList() {
//       return this.#courseList;
//     }
  
//   }
  
  
// //   module.exports = User; ==========>>>> for class export
  
//   const rock = new User("rock", "rock@rock.com");
//   console.log(rock.getInfo()); // o/p:- { name: 'rock', email: 'rock@rock.com' }
//   rock.enrollCourse("Angular Bootcamp"); //lets add course in rocks list and access it
//   console.log(rock.getCourseList()); // o/p:- [ 'Angular Bootcamp' ]
//   console.log(rock.courseList);  // o/p:- undefine
//   console.log(rock.#courseList);  // o/p:- error
  