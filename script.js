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

/*
//Selection and Manipulating Elements
//Change the text of an element through DOM manipulation
document.querySelector('.message').textContent = 'Correct Number';

//is the element has a number but also some text then use textContent
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

//to retrieve an input field here "guess" we use the value property
console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

//Handling Click Events
//an Event is something that happens on the page like a mouse click
//an Event Listener waits for a certain event to happen and react to it
//1) select the element where the event should happen here the check button
//2) wait, listen for a change with addEventListener()
//the first parameter is the type of the event here a click
//the second parameter is telling what to do here a function value "funciton() {}"
//containing to code to execute when there is a click
//rememeber a funciton is just a value
//because string a is a string we first must convert it to a number with Number
//here we retrieve the input value and send it to the console log

//define a random number to guess
let secretNumber = Math.trunc(Math.random() * 20) + 1;
//this a state var because it is part of the application state
//the application state contains all the data that is relevant to the application
let score = 20;
let highScore = 0;

const displayMessage = function (element, message) {
  document.querySelector(element).textContent = message;
};

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   document.querySelector('.message').textContent = 'Start Guessing...';
  displayMessage('.message', 'Start guessing...');
  displayMessage('.score', '20');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  displayMessage('.number', '?');
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //check if there is a value for guess and print a message on screen if none
  if (!guess) {
    displayMessage('.message', 'No Number');
  } else if (guess === secretNumber) {
    displayMessage('.message', 'Correct Number'); //change the style of body
    //we must use camel casing for styles attribute when in JS
    //when manipulating a style we must always use a string
    //these are inline styles so we are not really changing the CSS
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    displayMessage('.number', secretNumber);
    if (score > highScore) {
      highScore = score;
      displayMessage('.highscore', highScore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage('.message', guess > secretNumber ? 'Too High' : 'Too Low');
      score--;
      displayMessage('.score', score);
    } else {
      displayMessage('.score', 0);
      displayMessage('.message', 'Game Over');
    }
  }
  //   else if (guess < secretNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too Low';
  //       score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.score').textContent = 0;
  //       document.querySelector('.message').textContent = 'Game Over';
  //     }
  //   }
});
