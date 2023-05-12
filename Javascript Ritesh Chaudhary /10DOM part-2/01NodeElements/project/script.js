// AIM of the project we have to make a list of courses with there price but without adding anthing in HTML..so we have to add elements and them text node from javascript and make a list of the courses....

//# what we learn => creating elements, appending elements, creating text node and whloe lot of thing..

//first we will make a array of object in which key value pair is course name and its price
const courses = [
  {
    name: "Complete ReactJs Course",
    price: "2.3",
  },
  {
    name: "Complete Angular Course",
    price: "2.1",
  },
  {
    name: "Complete MERN Course",
    price: "2.7",
  },
  {
    name: "Complete C++ Course",
    price: "2.8",
  },
  {
    name: "Complete Danjgo Course",
    price: "2",
  },
];

//lets loop through the array , and at each step in loooping we have to write a code to add element and text node....

//we are using here for each loop, for each loop give access to each element one by one in the array....and using callback we can do something to the each element of the array..

/*  ul class="list-group">
        <li class="list-group-item">
          Javascript course<span class="float-right">$2.1</span>
        </li>
    </ul> */

//? we have to grab the unordered list  and then we have to construct list items and then somehow inject this list itmes to the unodered list....
//# steps to follow:-
//# (1):- First we have to construct the list item element.
//# (2):- Then we have to add a class to the element which is ""list-group-item"".
//# (3):- Then we have to add text node inside the list element.
//# (4):- Then we have to add another element which is span inside the list element and have to give ""float-right"" class to it.
//# (4):- And finally we have to add another node text inside the span element.

//!to agr hum dhayan se dekhen to 2-3 cheezen hi repeat ho rhi hai yha ==> 1st how to add element inside an element ul ke andr li and then li ke andr span..............then how to add class to the element......and how to add text node inside the element....

function generateLIST() {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";
  courses.forEach((course) => {
    const li = document.createElement("li"); //this will create <li></li> for us.

    //! then we will add class by using classList.add ...there are whole lot of properties to class list add remove and all

    li.classList.add("list-group-item"); //this will create <li class="list-group-item"></li> for us.

    const name = document.createTextNode(course.name); //this will suppose to create <li class="list-group-item"> Complete ReactJs Course </li> for us....but here we have just got a refrence of it we need to add this inside list element....course.name is we are using because of loop

    li.appendChild(name); //this will finally give us <li class="list-group-item"> Complete ReactJs Course </li>

    //!now we have to do same with span element and then text node inside it
    const span = document.createElement("span");
    span.classList.add("float-right"); //<span class = "float-right"></span>
    const price = document.createTextNode("$ " + course.price);
    span.appendChild(price); // <span class ="float-right">$ 2.1</span>
    li.appendChild(span); // <li class="list-group-item"> Complete ReactJs Course <span class ="float-right">$ 2.1</span></li>
    ul.appendChild(li);
    /*  ul class="list-group">
        <li class="list-group-item">
          Javascript course<span class="float-right">$2.1</span>
        </li>
    </ul> */
  });
}
// generateLIST();
// we want this code to work when this window loads
window.addEventListener("load", generateLIST);

//NOW WE HAVE TO MAKE THE SORT COURSES BUTTON WORK

/* <button
        type="button"
        class="btn btn-success btn-lg mt-4 mx-auto d-block sort-btn"
      >
        Sort courses
      </button> */

//# as soon as the button is clicked we want the array to sort and we have a sort method in array

//? sort is a pre defined method for arrays and in this we have to pass two comparable values which is a and b, now a and b here reffer to the element of the array and as we have to compare the thing with the price so we will do a.price and b.price.....it will take all the possibilities one by one and compare by doing subtraction it is an inbuit method.....

const button = document.querySelector(".sort-btn");
button.addEventListener("click", () => {
  courses.sort((a, b) => a.price - b.price);
  //after this the list is sorted in memory but there is nothing which regenerate the list in frontend so we have to re generate the list
  generateLIST();
  //but if i use this generateLIST(); the new list came down of my list which is sorted but the already existing list doesnt get sorted...and why this list is generating again?? ==> the simple reason is now our HTML is already having some values and as soon as i click on generate list it will generate the new list for me again regardless the previous list was there or not...
  //# 1st comment out the html list of javascript course because it dosent get sorted using this
  //# 2nd now i dont want to regenrate the new list i want to reset everything which is insode the unordered list...so we have to reset the element inside the unordered list we use ul.innerHTML = ""
});
