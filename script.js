'use strict';
//Intro
//Select an HTML element is DOM manipulation
//querySelector() is a method that is available on the document object
//in the () we need to pass a selector which is the same that we would use in CSS
// the .textContent allows us to access the textContent property if the selected element, in this case message
console.log(document.querySelector('.message').textContent);

//DOM Manipulation
//Document Object Model, it is a structured representation of HTML documents
//The DOM is not part of JS, the DOM and its methods are part of the web APIs
//and we can access those APIs thank to our JS code
//DOM Manipulation si making JS interact with a webpage
//It uses JS to manipulate HTML elements, it can also be seen as the connection between JS and HTML
//The DOM is automatically created when we load the pages in the browser
//and is stored in a tree structure in which each HTML element is one obj
//The DOM always starts with the document obj at the very top, it the entry point into the DOM
//In the DOM body and head are adjacent element/siblings they have priority over the other one.

//Selection and Manipulating Elements
//Change the text of an element through DOM manipulation
document.querySelector('.message').textContent = 'Correct Number';

//is the element has a number but also some text then use textContent
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//to retrieve an input field here "guess" we use the value property
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
