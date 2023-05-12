//# we have to build a method known as flip to flip the card, method for succes and fail of flip, and a method for reseting the card, and at last the shuffling the card...

// const cards = document.querySelectorAll(".card");
// console.log(cards);

//# NodeList(16)......  this will give you anode list which is nothing but an array and we can loop through that

//=============================step 1=====================================

//# let just say for fun we want card flipped when we click on the card

//# if flip function is not an arrow function it is the normal function then it would be anywhere in the code it makes problem but if we add a arrow then we have to use this abouve of the for each because we are using this in for each...as we all know the global and execution context concept

// var flip = () => {
//   console.log("card flipped"); //?everytime you click card this statement apper
//   console.log(this);  //this arrow function will give you the window object
//   //? variable declaration are scanned and made undefined...arrow function is a variable declaration
//  };

// cards.forEach((card) => {
//   card.addEventListener("click", flip);
// });

//function flip() {
//  console.log("card flipped");
//  console.log(this); //this will give you the html of the card ...function declarations are scanned and made available
//  this.classList.add("flip");  //as we know that the this keyword is giving us the context of html and we want to add flip class to it...so when we click it just flipped...
// }

//===============================step 2===================================

//# but now i just want to make a track which one are flipped and which one is not flipped...and for that we just need some variable

//variable

var isFlipped = false; //? to kep track flipped or not
var firstCard; //we need these two variable to compare the first flipped card and the second flipped card
var secondCard;

const cards = document.querySelectorAll(".card");
console.log(cards);

cards.forEach((card) => {
  card.addEventListener("click", flip);
});

function flip() {
  this.classList.add("flip");
  if (!isFlipped) {
    isFlipped = true; // right now the flip is false and that's why we came inside this if .... now the card is flipped hence it turns into true...next step is to make track of flipped card
    firstCard = this; // we did this to track the card which is flipped...
  } else {
    secondCard = this;
    
  }
}

// var success = () => {};

// var fail = () => {};

// var reset = () => {};

// var shuffle = () => {};
