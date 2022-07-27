var throttle = require('lodash.throttle');


const btn = document.querySelector('button')
const form = document.querySelector("form");
const LOCALSTORAGE_KEY = "feedback-form-state";
const output = {};

updateFeedback();
form.addEventListener("submit", saveMessage);
form.addEventListener("input", throttle(saveMessage, 1000));
function saveMessage(evt) {
    evt.preventDefault();
    output.email = form.elements.email.value
    output.message = form.elements.message.value
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(output));
    // console.log(output.message)
    updateFeedback();
    // form.reset();
  }
  
  function updateFeedback() {
    output.textcontent = localStorage.getItem(LOCALSTORAGE_KEY) || "";
  }


  // console.log(LOCALSTORAGE_KEY)
  function upd() {
    if (output.message !== "" || output.email !== "") {
      const outputUpd = JSON.parse(output.textcontent)
      form.elements.message.value = outputUpd.message
      form.elements.email.value = outputUpd.email
      // console.log(outputUpd.message)
    }
    return
    
  }
  form.reset();
  //  localStorage.removeItem(LOCALSTORAGE_KEY);
  upd(updateFeedback)

 
 