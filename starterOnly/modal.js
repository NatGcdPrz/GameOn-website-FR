// Main function 
// Create variable of what i need, add a click event and call the function formValidate() 
function main() {
    const modalBtn = document.querySelectorAll(".modal-btn");
    const closeBtn = document.querySelectorAll(".close");

    modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
    closeBtn.forEach((btn) => btn.addEventListener("click", closeModal));

    FormValidate();
}

main();

// Function for validate or not the form
function FormValidate() {
    const submitBtn = document.getElementById('submit');

    submitBtn.addEventListener('click', function (event) {
        const formData = document.querySelectorAll(".formData");
        event.preventDefault();
        if (validate(formData)) {
            showValidation();
        } else {
            alert("Il y a un problème")
        }
    })

}

// Function for validation
function validate(formData) {

    // All Regex
    const stringRegex = /^[a-zA-Z-]+$/;
    const regexEmail = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    const regexBirthDate = new RegExp(/^\d{4}[-](0[1-9]|1[0-2])[-](0?[12][0-9]|3[01])$/);

    let isFormValid = true;

    // First name
    if (!formData[0].children[2].value.match(stringRegex) || formData[0].children[2].value.length < 2) {
        isFormValid = false;
        displayErrorMsg(formData[0], "Le prénom doit comporter au moins 2 caractères");
    } else {
        removeErrorMsg(formData[0]);
    }

    ///Last name
    if (!formData[1].children[2].value.match(stringRegex) || formData[1].children[2].value.length < 2) {
        isFormValid = false;

        displayErrorMsg(formData[1], "Le prénom doit comporter au moins 2 caractères");
    } else {
        removeErrorMsg(formData[1]);
    }

    // Check email is valid
    if (!formData[2].children[2].value.match(regexEmail)) {
        isFormValid = false;

        displayErrorMsg(formData[2], "Veuillez entrer un email valide");
    } else {
        removeErrorMsg(formData[2]);
    }

    // Check the birthdate
    if (!formData[3].children[2].value.match(regexBirthDate)) {
        isFormValid = false;
        displayErrorMsg(formData[3], "La date de naissance entrée est invalide");
    } else {
        removeErrorMsg(formData[3]);
    }

    // Check number is valid
    // Need a number not a string
    if (formData[4].children[2].value === "") {
        isFormValid = false;
        displayErrorMsg(formData[4], "Veuillez entrer une valeur numérique ");
    } else {
        removeErrorMsg(formData[4]);
    }

    // Check radio btn
    // Need a city for validate form
    const radio = document.getElementsByName('location');
    let citySelectionned = false;

    for (input of radio) {
        if (input.checked) citySelectionned = true;
    }

    if (!citySelectionned) {
        isFormValid = false;
        displayErrorMsg(formData[5], "Veuillez choisir une ville");
    } else {
        removeErrorMsg(formData[5]);
    }

    // Check cgu
    // Need to checked the cgu
    if (!(document.querySelector("#checkbox1").checked)) {
        isFormValid = false;
        displayErrorMsg(formData[6], "Acceptez les conditions d'utilisation avant de poursuivre");
    } else {
        removeErrorMsg(formData[6]);
    }

    // Check previous error
    if (isFormValid) {
        return true;
    } else {
        return false;
    }
}

// ----------------- ERRORS FUNCTIONS ----------------- // 
// Function for error messages
const displayErrorMsg = (element, message) => {
    const formData = element
    formData.setAttribute("data-error", message)
    formData.setAttribute("data-error-visible", true)
}

// Function for remove one error msg
const removeErrorMsg = (element) => {
    const formData = element
    formData.removeAttribute('data-error')
    formData.removeAttribute('data-error-visible')
}

// ----------------- MODAL FUNCTIONS & EVENTS ----------------- // 
// Functions for modal
function launchModal() {
    const modalbg = document.querySelector(".bground");
    modalbg.style.display = "block";

}

// Function for close modal
function closeModal() {
    const modalbg = document.querySelector(".bground");
    modalbg.style.display = "none";
}

// Close validation event
const closeBtn = document.querySelector("span.close");
const closeValidation = document.querySelector("button.btn-close");

closeBtn.addEventListener("click", closeModal);
closeValidation.addEventListener("click", closeModal);


// ----------------- NAV FUNCTION ----------------- // 
// Function edit nav for responsive
function editNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}