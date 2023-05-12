//we will select element and change their property.
//#================HOW TO FIND ELEMENT============================
//there are 2 ways for hunting the element (1) querySelector   (2) getElementBy
//every element is a document so every thing is started with "document." 
//#as soon as i put the dot after document a lot of methods will apper...we study 1st getElemnent then queryselector.
//? query selector is a jquery style of selection where we mention classes and ids in just one selector..
//? getElement => as soon as i put "getElement." a lot of method apper in front of me....getElementBy id, class, tagname and all that they are kind of simillar to each other..

//#BY TAGNAME
var title = document.getElementsByTagName("h1");
console.log(title);
// This will give us an array of html collection which have one element that is h1.title and there are so many properties of h1.title we can access.....as we can see innerHtml and innerText are same.
//lets say we want to use innerHTML of the tag which is Dr.Dev.
var title = document.getElementsByTagName("h1")[0].innerHTML;
console.log(title); 
//o/p  in console => Dr.Dev


//#BY CLASS

var titleTwo = document.getElementsByClassName("title");
console.log(titleTwo);
// again we will see the same thing the array having h1.title at 0 index in which there are so many properties we can grab..its hapenning because it is the same object we are accessung

var titleTwo = document.getElementsByClassName("title")[0].innerText;
console.log(titleTwo);


//basically there are so many things to select an element there are no such rule to use some specific.

//#QUERY SELECTOR


//The query selector is more like we are selecting an element through jquery which we use to do it in earlier days....the process is same you can use "class", "id" or "tagName" inside the double quotes to select ....
//#but people use this very often and they also like this alot...why? => let me show you

var titleThree = document.querySelector(".title");
console.log(titleThree);
//o/p  in console => <h1 class="title">Dr.Dev</h1>  
//# it just save the whole HTML tag here, so this is much easier than digging up things from an array
console.log(titleThree.innerText); 
//o/p  in console => Dr.Dev
titleThree.innerText = "Deepak";
console.log(titleThree.innerText);
//# inner text change...not in html-code just for the titleThree variable and ofcourse the main page dr.Dev is noe Deepak..... 

