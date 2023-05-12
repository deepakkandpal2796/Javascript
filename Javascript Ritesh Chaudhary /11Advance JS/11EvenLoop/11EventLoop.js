// javascript execute the code as much as it can right now and deal with the asynchronous code/or code which is not running afterwards..

//# https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop  if you have any doubt go to this page and study

// look at the image1 it is the run time concept of the javascript engins

//? their is a message queue at the bottom where you keep getting messages an by the messages it mean code variable declarations method calls...how to execute them is dependent on the queue .....either the queue will send the code in stack memory or to the Heap memory (there they create object or just execute the code...)

//! the important thing is who is responsible for keeping things in the queue or passing them => Event loop

//event loop => its a loop which is look for the event...

// while (queue.waitForMessage()) {
//     queue.processNextMessage()
//   }

//? it is while loop which wait for message as soon as the message came to queue it gave true signal and execute it and send it to heap or stack and then process the next message and this process happens in a loop...

//! ===synchronous and asynchronous ===

//  function uno (){
//      console.log("I am one");  old method lets use es6 arrow function
//  }

// const uno = () => {
//   console.log("I am one");
// };

// const dos = () => {
//   console.log("I am two");
// };

// const tres = () => {
//   console.log("I am three");
// };

//todo 1st test
// uno();
// tres();
// dos();

//o/p:- I am one
//      I am three
//      I am two

//todo 2nd test
const uno = () => {
  console.log("I am one");
};

const dos = () => {
  setTimeout(() => {
    console.log("woohoooo");
  }, 3000);
  console.log("I am two");
};

const tres = () => {
  console.log("I am three");
};


// uno();
// tres();
// dos();

//output:-
// I am one
// I am three
// I am two
// woohoooo (after 3 sec)

//# what happen here?? when this dos function is running it first execute "i am two" and then after 3 sec execute "woohooo", but the call order is opposite but then why it is executed first??

// const dos = () => {
//   setTimeout(() => {
//     console.log("woohoooo");
//   }, 3000);
//   console.log("I am two");
// };

//? this is how event loop works it says that  unit the setTimeout is loading in the mean time is there anybody else here who i can call .....and the console.log("I am two") cam that yeah i am waiting and hence it is executed first then woohoo is executed...


uno();
dos();  //now lets make the dos 2nd one to execute 
tres();

// output:- 
// I am one
// I am two
// I am three
// woohoooo

//? here it also work the same ...it first executed "I am one" then it has to executed "woohoooo" but it take long time so the event loop asked that is there any one want to execute in the mean time so "I am two" came and after that time "I am three" and now there is no one to execute so the event wait to complete and run the "woohoooo" hence it executed at the last

//but in backend we can control this timing as we want synchronous and asynchronous 
//for example lets say this code is the data from the data base 
// setTimeout(() => {
//      console.log("woohoooo");
//   }, 3000);

//! hence i dont want the rest of the data to be loaded before this, so this is the loophole in the javascript because javascript is made to be for the front end work but now it is also interacting with the database, apihence we have to add some new function which are synchronous and asynchronous

//todo => we need to learn the way that rest of the code will note execute before some code loads (for some backend and frontend also)
