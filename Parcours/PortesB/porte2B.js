// Créer un objet Audio pour le son
const doorSound = new Audio('../../assets/sounds/door.wav');

// Fonction pour jouer le son au survol
function playSound() {
    // Rewind le son à chaque survol pour qu'il puisse se superposer sans restrictions
    doorSound.currentTime = 0;
    doorSound.play();
}

// Ajouter un event listener à chaque porte pour jouer le son au survol
const portes = document.querySelectorAll('.porte');

portes.forEach(porte => {
    porte.addEventListener('mouseover', playSound);
});
