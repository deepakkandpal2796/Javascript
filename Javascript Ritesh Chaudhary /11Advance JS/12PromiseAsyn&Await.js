// topics we cover in this file Promise,  resolve, reject,  async & await

//todo last time the problem we are facing is that i dont want to execute the code furture before my setTimeout is not being completely executed...

// const uno = () => {
//   console.log("I am one");
// };

// const dos = () => {
//   setTimeout(() => {
//     console.log("woohoooo");
//   }, 3000);
//   console.log("I am two");
// };

// const tres = () => {
//   console.log("I am three");
// };

// uno();
// dos();
// tres();

//# lets code this in the better way => in production world we dont use log and all we use return array pbject more frequently

// const uno = () => {
//   return "I am one";
// };

// const dos = () => {
//   setTimeout(() => {
//     return "I am two";
//   }, 3000);
// };

// const tres = () => {
//   return "I am three";
// };

// const callMe = () => {
//   let valOne = uno();
//   console.log(valOne);

//   let valTwo = dos();
//   console.log(valTwo);

//   let valThree = tres();
//   console.log(valThree);
// };

// callMe();

// o/p:- 
// I am one
// undefined  
//yeah undefine this is the thing happen when you work proffesionally not it loads after some time
// I am three


//=============async and promise=========

// const uno = () => {
//   return "I am one";
// };

//if i write a keyword here async

// const dos = () => { //this is not the perfect way only for understanding
//   setTimeout(() => {
//     return "I am two";
//   }, 3000);
// };

// const tres = () => {
//   return "I am three";
// };

// const callMe = () => {
//   let valOne = uno();
//   console.log(valOne);

//   let valTwo = dos();
//   console.log(valTwo);

//   let valThree = tres();
//   console.log(valThree);
// };

// callMe();

// o/p:-
// I am one
// Promise { undefined } there is a promise keyword in the output which is not being full filled 
// I am three


//# what is Promise & why async is used ????

//in this process there are three thing which are involved 1st - promise, 2nd - async, 3rd - await
//? many times we are going to make web/api/database request, we think that the database request we made shoud be fill like instant but even when the databases are on the same network of aws or any hosting they take probably a mili second or more to get the connection and getting the data back.......... so if you are call or treat web/api/database request like a local variable you are always get in a trouble...

//# anything which is a resourse/data maybe if you are taking the local storage or whatever it is always a good idea to write it in a asynchronous manner...

// It’s easier to understand async if you first understand what “synchronous”, the opposite, means.
//In programming, we can simplify the definition of synchronous code as “a bunch of statements in sequence”, This means each statement has to wait for the previous one to finish executing. hence The statements above will execute in order.
//Asynchronous code takes statements outside of the main program flow, allowing the code after the asynchronous call to be executed immediately without waiting.


//so that why it has said //# anything which is a resourse/data maybe if you are taking the local storage or whatever it is always a good idea to write it in a asynchronous manner...


//now we have to study promises :- a promise has only two state whether it is gonna be full-filled or its not gonna be full filled...its is litrally saying you that i promise you i git this thing from web to you, or it says sorry i got failed...

//? so we can create events which tentatively (may be) might be full filling up in the future or might be not but it is gonna gove you the response that i didnt got completed..

//# just like we can create object , arrays or objects from classes we can create simillar thing with promises..lets see


const uno = () => {
  return "I am one";
};


const dos = () => { 
  return new Promise((resolve, reject) => {    
    //we have to pass parameters you either resolve your promise or reject your promise, resolve is everything going good what you want from web you got, reject is like something got bad and i am not able to connect to the web
    //# both "resolve" and "reject" are methods..so lets check these in setTime out that they are able to get I am two or not
    
    setTimeout(() => {
          resolve ("I am two");  //you can pass anything in here object array string
        }, 3000);
  })
};

const tres = () => {
  return "I am three";
};

//the resolve and reject part we figgerd out but how we are going to fix this method call here
//whenever we are making these type of call(which takes time) we have to make the method Asynchronous so lets make async this method...but it do nothing...but all the values for which you are making this Asynchronous call and you are waiting for that value to come...there we can use another keyword await

//in a Asynchronous method we can make as mush as await call as we want
const callMe = async () => {
  let valOne = uno();
  console.log(valOne);

  let valTwo = await dos();
  console.log(valTwo);
//await just wait for the dos method to complete...and whatever it gets resolve or reject then ot moves forword
  

  let valThree = tres();
  console.log(valThree);
};

callMe();

// output:-
// I am one
// I am two
// I am three



//===lets see what happen if it rejects===

//# ==> reject means i am reasing an error , either handle it nicely or i am going to break the program

// const uno = () => {
//   return "I am one";
// };


// const dos = () => { 
//   return new Promise((resolve, reject) => {    
//       setTimeout(() => {
//           reject ("I am two");  
//         }, 3000);
//   })
// };

// const tres = () => {
//   return "I am three";
// };

// const callMe = async () => {
//   let valOne = uno();
//   console.log(valOne);

//   let valTwo = await dos();
//   console.log(valTwo);
  

//   let valThree = tres();
//   console.log(valThree);
// };

// callMe();

// output:-
// I am one
//(node:897) UnhandledPromiseRejectionWarning: I am two 
// it shows error and it will not be execute further




//! in api video we are going to talk more about promises