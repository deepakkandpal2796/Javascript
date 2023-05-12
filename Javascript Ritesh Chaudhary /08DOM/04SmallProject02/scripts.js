const red = document.querySelector(".red");
const cyan = document.querySelector(".cyan");
const violet = document.querySelector(".violet");
const orange = document.querySelector(".orange");
const pink = document.querySelector(".pink");

const center = document.querySelector(".center");

//# now how to get a background color when we click it..we have new property..

//? we use window object and it has so many properties plz check this out when you stucked some where

// console.log(window.getComputedStyle(red)); // it will give us all the css of the selected element in object form....
// console.log(window.getComputedStyle(red).background); //all background properties
// console.log(window.getComputedStyle(red).backgroundColor); // background color

const getBgColor = (selectedElement) => {
  return window.getComputedStyle(selectedElement).backgroundColor;
};

//#===EVENT LISTNERS===
//anything you do can possible think happening to a website is an event....mouseclick is an event...user offline online is an event..
//# we use here mouse enter event...
//we can use event listner on any event using add event listner=====> syntax
//addEventListner('name of event', callback => {

// })

// style and getComputedStyle are different as style use to add style and getComputedStyle used to select a style property...we can also use style to select property but that is not recomended.

//# var orangeElementColor = getBgColor(orange);

//# orange.addEventListener('mouseenter', () => {
//#     center.style.background = orangeElementColor;
//# })
// as you hover on the the orange it will show you a orange color in the center div which is empty

//# var color = getBgColor(pink);

//# pink.addEventListener('click', () => {
//#     center.style.background = color;
//# })
// as you click on the the pink it will show you a pink color in the center div which is empty

//==lets make it more goodlooking method for this==

var magicColorChanger = (element, color) => {
  element.addEventListener("mouseenter", () => {
    center.style.background = color;
  });
};
//so hmne is method ko bola hum tujhe ek elemnt denge uspe tujhe event listner lagana hai and ek colour denge vo tujhe center me display krna hai...
//element hmne select kra html class se sapse upper and then hmne uska colour nikala getComputed style se and dono is method me dal diya...no colour is changing....

magicColorChanger(orange, getBgColor(orange));
magicColorChanger(cyan, getBgColor(cyan));
magicColorChanger(red, getBgColor(red));
magicColorChanger(violet, getBgColor(violet));
magicColorChanger(pink, getBgColor(pink));
