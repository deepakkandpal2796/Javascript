sayhello();

function sayhello() {
  console.log("Hello");
}

//  How this is running as we are calling function on the top of the function.
//! How javascripts work exactly?

//* We study these all the thing in browser because we have to execute our file there only.
// (aisa nhi hai ki yha nhi kr skte baat ye hai ki global context of browser and global context of node alg alg hota hai to hm browser me hi padh lete hai because browser me hi hme kaam karna hai.... )

var myName = "Deepak";
if (myName === myName) {
  console.log("This is a true statement");
}

//  it works fine again
//* Now go to console in browser and write the following code

// var myName = "Deepak"
// if (myName === window.myName) {
//     console.log("This is a true statement");
// }

//!  this will run in browser but not in vs code terminal in vs code or we can say node.js we se a error that window is not define. Hence we can say that global context of both browser and node are different.

//todo so the question is why is this happpening and what is window and why this is not working here.

// window is the global context of the browser...global context kya hai?

//* global is like a file in which all the thing are registered inside that...
// sayhello();

// function sayhello (){
//     console.log("Hello");
// }

//todo=>  lets talk about this above function code...... when this main function code is written then this is registered in the global context.....and if i call the function before declaration there is no problem because here code dosent work line by line it uses the function code from the global context...so when the code exicutes its aware of those functions and hence it dosent gives an error.

//# now we call the global context different in different engines in node.js we not call is at windows but in browser it is known as window.....that's why the code didnt work here in vs code.....

//! window is global context for the browser it is act as an object and all the components we define acts like its element thats why we use window.myName to access the element......
