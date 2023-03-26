const _ = require("lodash.throttle");

const form = document.querySelector("form");
const CURRENT_FORM_TEXT = "feedback-form-state"

const throttledInputSaveData = _(inputSaveData, 500);


populateInputFields();

form.addEventListener('submit', formSubmit);
form.addEventListener('input', throttledInputSaveData)

function inputSaveData() {

    const feedbackValues = {
        email: form.email.value,
        message: form.message.value
    }

    localStorage.setItem(CURRENT_FORM_TEXT, JSON.stringify(feedbackValues));
}


function formSubmit(evt) {
    evt.preventDefault();

    
    if (form.email.value === "" || form.message.value === "") {
        return alert("Please fill in all the fields!");
    }

    console.log(`Email: ${form.email.value} Message: ${form.message.value}`)

    evt.currentTarget.reset();
    localStorage.removeItem(CURRENT_FORM_TEXT);
    
};

function populateInputFields() {

    if (localStorage.getItem(CURRENT_FORM_TEXT)) {
    FormData = JSON.parse(localStorage.getItem(CURRENT_FORM_TEXT));
    for (let key in FormData) {
        form.elements[key].value = FormData[key];
    }
};
};