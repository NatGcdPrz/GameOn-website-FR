// Pas de modif mais var n'est plus utilisé - x c'est quoi ?
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// Close modal btn
closeBtn.addEventListener("click", () => {
  modalbg.style.display = "none";
})

/* Exemple à ne pas faire (vieille méthode) 
ajoute un listener à toute la page alors qu'on a besoin que du bouton (quand je clique partout sur la page la console renvoie l'info)
window.onclick = function (event) {
  if (event.target == closeBtn) {
    modalbg.style.display = "none";
  }
} */
