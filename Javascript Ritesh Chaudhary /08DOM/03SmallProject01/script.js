//# there are two function we are using fot this (1) setTimeout and  (2) setIntervel

//# SetTimeout(function, millisecond);
// this is same as time out in cricket ...it is the time bracket in which no body does any thing and after that period of time game resume again...
//? simillarly we define artributes here as SetTimeout(function, millisecond);  millisecond is used for the time we want to do nothing and then function is executed once the timeout is over...

//#setIntervel(function, millisecond)
//? here millisecond is defining the inerval in which this whole function work and function is what code have to do in this whole millisecond time...."""basically us interval me vo function kya krega ye hum setInterval se set krenge"""....... {we use setInerval to change the number till we reach 3000}...

var counter = document.querySelector(".counter");
var followers = document.querySelector(".followers");

let count = 1;

setInterval(() => {
  if (count < 1000) {
    count++;
    counter.innerText = count;
  }
}, 1);
setTimeout(() => {
    followers.innerText = "Follower's on LinkedIn" 
}, 4500);
