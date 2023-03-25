const _ = require("lodash.throttle");

const form = document.querySelector("form");
const CURRENT_FORM_TEXT = "feedback-form-state"

const throttledFromSubmit = _(formSubmit, 500)

form.addEventListener('submit', throttledFromSubmit);


function formSubmit(evt) {
    evt.preventDefault();

    
    if (form.email.value === " " || form.message.value === " ") {
        return console.log("Please fill in all the fields!");
    }

    const feedbackFormState = {
        email: form.email.value,
        message: form.message.value,
    }
    localStorage.setItem(CURRENT_FORM_TEXT, JSON.stringify(feedbackFormState));

    evt.currentTarget.reset();
};

if (localStorage.getItem(CURRENT_FORM_TEXT)) {
    FormData = JSON.parse(localStorage.getItem(CURRENT_FORM_TEXT));
    
    for (let key in FormData) {
        form.elements[key].value = FormData[key];
    }
};