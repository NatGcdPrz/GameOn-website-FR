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