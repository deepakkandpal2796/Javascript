//! 1st revise script.js then come here 

// DOM - Document object model 
// Everything on the html page js treats like an object so with dom we can manipulate these things.
// DOM stands for Document Object Model. It is a programming interface for web documents. When a web page is loaded, the browser creates a Document Object Model of the page. The DOM provides a way for programs to interact with the page. With the DOM, JavaScript can access and change all the elements of an HTML document, including their content and attributes.

// The object which allow us to interact with the HTML page is -> Document.
// Document is the top-level object of the DOM. Everything in the DOM is contained within the Document object.

console.log("---------QUERY SELECTOR------------") 


// 1st method to select any object is by query selector (it will select the first tag only)
let heading1 = document.querySelector('h1')
heading1.style.color = 'red';
// if you want to select class 
const heading = document.querySelector('.heading')
heading.style.color = 'blue';
// if you want to select id 
const title = document.querySelector('#title')
title.innerHTML = 'Hi I am learning JS';


console.log("---------QUERY SELECTOR ALL------------") 

//Query selector all give you the nodelist (which is almost same as array)
// You can use this like css ul li {} it will target all of them same with this case 
// Can use this on the place where we have to select all the objects having the same class or html tag
const allListItem = document.querySelectorAll('ul li')
// o/p :- NodeList(3) [li, li, li]
for(let i = 0; i < allListItem.length; i++){
    const ListItem = allListItem[i];
    ListItem.innerText = `I am the ${i} list item`
}


console.log("---------EVENT LISTENERS------------") 
// this code is commented because we are modifiying this below 

// let counter = 0;
// const counterEl = document.querySelector('#counter'); // selecting the number
// const incrementBtn = document.querySelector('.incrementBtn'); // selecting button
// const decrementBtn = document.querySelector('.decrementBtn');// selecting button

// function incrementCounter (){
//     counter++;
//     counterEl.innerHTML = counter;
// }

// function decrementCounter (){
//     counter--;
//     counterEl.innerText = counter;
// }

// incrementBtn.addEventListener('click', incrementCounter)
// decrementBtn.addEventListener('click', decrementCounter)

// difference between innerText vs innerHTML ?

console.log("---------GET ELEMENT BY ID------------") 

//we can also access the id using
const counters = document.getElementById('counter')
console.log(counters)
//# This is better than the quer selector create a hasmap of all the ids on the page with corresponding refrences 
const headings = document.getElementsByClassName('heading')
const heading2 = document.getElementsByClassName('heading')[1]

console.log(headings);
//# This will return the list of HTMLCollection Nodeslist just like the query selector all
// o/p:- HTMLCollection(3) [h1#title.heading, h1#title.heading, h1#title.heading, title: h1#title.heading]
// nodelist is just like array 
console.log(headings[0]);
console.log(headings[1]);
console.log(headings[2]);

//query selctor treat element like tree and we can select the child element also 
const ulElements = document.querySelector('ul')
const list = ulElements.querySelectorAll('li')
const list1 = ulElements.querySelectorAll('li')[1]

console.log(list[0].innerHTML);
console.log(list[1]);
console.log(list[2]);

//# but you cann't access the child elemtent in getelement by id as it dosent return any node 

console.log("---------WORKING ON NODES------------")


// Whenever we click on increment, we are going to constructing an element in HTML(in ul) page using javascript 
// In javascript everthing can be an object 
// In DOM everthing can be a node so we can access its child elements using dot notations is there are any child
// We are creating a node adding a string to it sentence 1 and in that also we are bolding the sentence 
// We are appendig/adding this node when we click increment also adding some css style with it like background colour on clicking the button 
// We are doing css manupulations using setstyle and remove and adding the classes to the node.
// We are also removing the even node only when click on to the decrease button 


let counter = 0;
const counterEl = document.querySelector('#counter'); // selecting the number
const incrementBtn = document.querySelector('.incrementBtn'); // selecting button
const decrementBtn = document.querySelector('.decrementBtn');// selecting button
const ulElement = document.querySelector('#list-item')

function incrementCounter (){
    counter++;
    counterEl.innerHTML = counter;

    //creating the list element 
    const li = document.createElement('li') 
    // setting dynamic attribute to each list item
    li.setAttribute('data-counter', counter)
    // setting up new classes 
    if(counter % 2 === 0 ){
        li.setAttribute('class', 'blue') // we defined classes in css 
        li.style.border = '2px solid #000';// set style property to set any css style 
        li.style.padding = '5px'
    }else{
        li.setAttribute('class', 'pink')
    }
    // console.log(li)
    const b = document.createElement('b')
    //inside the li node we have to append the text 
    //create text node 
    const textNode = document.createTextNode(`Sentence`)
    const textNode2 = document.createTextNode(counter)
    //append/add text node to li 
    b.appendChild(textNode)
    li.appendChild(b)

    li.appendChild(textNode2)

    //append/add the element
    //inside the ul node we have to append the li 
    ulElement.appendChild(li)

    // there is another way or simple way of doing this things using innerHtml 
    // ulElement.appendChild(li)
    // li.innerHTML = `<b>Sentence</b> ${counter}`
    //# this is telling the html directly to add element but the lets say you have to add an eventlistner to the b tag then there is no option left for you make the element append it and add event listner to the inside element 
}

function decrementCounter (){
    const li = ulElement.querySelector('[data-counter = "'+counter+'"]');
    //we can also get the attribute just like we are setting teh arrtibute to a node 
    // but this comes as a string to make sure this is a number lets just parse this 
    const number = parseInt(li.getAttribute('data-counter'), 10)// this 10 means we want this number in base 10
    if(number % 2 === 0){
        li.remove(); // if attribute is even then remove this number .remove use to remove the node
    }
    counter--;
    counterEl.innerText = counter;

}

incrementBtn.addEventListener('click', incrementCounter)
decrementBtn.addEventListener('click', decrementCounter)