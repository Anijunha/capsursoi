console.log("Page d'accueil de Louis Chaussignant chargée.");
const modal = document.getElementById("contactModal");
const btn = document.getElementById("openModal");
const closeBtn = document.querySelector(".modal .close");

// Ouvrir la modal au clic
btn.onclick = () => {
  modal.classList.add("show");
}

// Fermer avec la croix
closeBtn.onclick = () => {
  modal.classList.remove("show");
}

// Fermer en cliquant en dehors
window.onclick = (e) => {
  if (e.target === modal) {
    modal.classList.remove("show");
  }
}