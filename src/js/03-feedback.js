var throttle = require('lodash.throttle');

const input = document.querySelector('input')
const textarea = document.querySelector('textarea')
const btn = document.querySelector('button')
const form = document.querySelector("form");
const LOCALSTORAGE_KEY = "feedback-form-state";
const output = {};

updateFeedback();
form.addEventListener("submit", saveMessage);

function saveMessage(evt) {
    evt.preventDefault();
    output.email = evt.target.email.value
    output.message = evt.target.message.value
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(output));
 
    updateFeedback();
    form.reset();
  }
  
  function updateFeedback() {
    output.textContent = localStorage.getItem(LOCALSTORAGE_KEY) || "";
  }
  console.log(output)