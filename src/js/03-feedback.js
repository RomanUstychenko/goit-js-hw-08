import throttle from 'lodash.throttle';

const form = document.querySelector("form");
const LOCALSTORAGE_KEY = "feedback-form-state";
const output = {};

form.addEventListener("submit", submit);
form.addEventListener("input", throttle(input, 1000));
upd ()
function input() {

    output.email = form.elements.email.value
    output.message = form.elements.message.value
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(output));

  }
 
  function submit(evt) {
    evt.preventDefault();
    output.email = form.elements.email.value
    output.message = form.elements.message.value
      localStorage.removeItem(LOCALSTORAGE_KEY);
 
    form.reset();
  }

  function upd() {
    output.textcontent = localStorage.getItem(LOCALSTORAGE_KEY);
    const outputUpd = JSON.parse(output.textcontent)
    try {
      if (outputUpd.email !== "" ) {
        form.elements.email.value = outputUpd.email;
        console.log("Email:", outputUpd.email);
      }
    } catch (error) {
    }
    try {
      if (outputUpd.message !== "" ) {
        form.elements.message.value = outputUpd.message;
        console.log("Message:", outputUpd.message)
      }
    } catch (error) {
    }
  }