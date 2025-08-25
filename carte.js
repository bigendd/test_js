const descriptions = [
  "Lyon",
  "Paris",
  "Marseille",
];

let avatarChoisi = null;

const descriptionEl = document.getElementById("description");
const btnDescription = document.getElementById("btn-description");
const pseudoInput = document.getElementById("pseudo");
const erreurPseudo = document.getElementById("erreur-pseudo");
const avatars = document.querySelectorAll(".avatar");
const btnSuivant = document.getElementById("btn-suivant");
const form = document.getElementById("formulaire");
const carte = document.getElementById("carte");
const carteAvatar = document.getElementById("carte-avatar");
const cartePseudo = document.getElementById("carte-pseudo");
const carteDescription = document.getElementById("carte-description");
const btnReset = document.getElementById("btn-reset");
const themeToggle = document.getElementById("theme-toggle");

function changerDescription() {
  const index = Math.floor(Math.random() * descriptions.length);
  descriptionEl.textContent = descriptions[index];
}

function majBouton() {
  if (pseudoInput.value.length >= 3 && avatarChoisi) {
    erreurPseudo.textContent = "";
    btnSuivant.disabled = false;
  } else {
    if (pseudoInput.value.length < 3 &  pseudoInput.value.length > 0) {
      erreurPseudo.textContent = "Pseudo trop court.";
    }if (pseudoInput.value.length === 0) {
      erreurPseudo.textContent = "Faut saisir un pseudo.";
    }
    btnSuivant.disabled = true;
  }
}

avatars.forEach(a => {
  a.addEventListener("click", () => {
    avatars.forEach(x => x.classList.remove("selected"));
    a.classList.add("selected");
    avatarChoisi = a.src;
    majBouton();
  });
});

btnSuivant.addEventListener("click", () => {
  form.classList.add("hidden");
  carte.classList.remove("hidden");
  carteAvatar.src = avatarChoisi;
  cartePseudo.textContent = pseudoInput.value;
  carteDescription.textContent = descriptionEl.textContent;
});

btnReset.addEventListener("click", () => {
  carte.classList.add("hidden");
  form.classList.remove("hidden");
  pseudoInput.value = "";
  avatarChoisi = null;
  avatars.forEach(x => x.classList.remove("selected"));
  btnSuivant.disabled = true;
  changerDescription();
});


btnDescription.addEventListener("click", changerDescription);
pseudoInput.addEventListener("input", majBouton);
themeToggle.addEventListener("click", () => document.body.classList.toggle("dark"));

changerDescription();
