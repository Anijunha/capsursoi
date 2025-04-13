// Récupérer les éléments nécessaires
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prevArrow');
const nextButton = document.getElementById('nextArrow');
const pauseButton = document.getElementById('pauseButton');
const musicButton = document.getElementById('musicButton');
const pauseIcon = document.getElementById('pauseIcon');
const musicIcon = document.getElementById('musicIcon');

// Crée une variable pour gérer l'audio
const audio = new Audio("../assets/sounds/Explications.wav");
audio.loop = false;  // Désactive la boucle de l'audio
let isPaused = false; // Pour savoir si l'audio est en pause
let isMuted = false; // Pour savoir si le son est coupé

// Initialiser un index de la diapositive active
let activeIndex = 0;

// Fonction pour afficher la diapositive active
function showSlide(index) {
    // Masquer toutes les diapositives
    slides.forEach(slide => slide.classList.remove('active'));

    // Afficher la diapositive active
    slides[index].classList.add('active');

    // Vérification de l'image de fond pour jouer l'audio
    const backgroundImage = slides[index].style.backgroundImage;

    // Lancer un audio spécifique si l'image correspond et si l'audio n'est pas encore joué
    if (backgroundImage && backgroundImage.includes("7.jpg") && !audio.playing) {
        audio.play();
    }
}

// Fonction pour mettre en pause ou reprendre l'audio et la musique
pauseButton.addEventListener('click', () => {
    isPaused = !isPaused;
    pauseIcon.src = isPaused ? "../assets/svg/pauseB2.svg" : "../assets/svg/pauseB.svg";

    if (isPaused) {
        audio.pause();  // Mettre l'audio en pause
    } else {
        audio.play();   // Reprendre la lecture
    }
});

// Fonction pour couper ou réactiver le son du site
musicButton.addEventListener('click', () => {
    isMuted = !isMuted;
    musicIcon.src = isMuted ? "../assets/svg/musicNX.svg" : "../assets/svg/musicB.svg";

    audio.muted = isMuted; // Mute ou non l'audio
});

// Afficher la première diapositive au départ
showSlide(activeIndex);

// Ajouter des événements pour les boutons
nextButton.addEventListener('click', () => {
    // Vérifier si c'est la dernière diapositive (index 5)
    if (activeIndex === slides.length - 1) {
        window.location.href = '../Portes/porte1.html'; // Rediriger vers la page spécifiée
    } else {
        activeIndex = (activeIndex + 1) % slides.length; // Passer à la diapositive suivante
        showSlide(activeIndex);
    }
});

prevButton.addEventListener('click', () => {
    activeIndex = (activeIndex - 1 + slides.length) % slides.length; // Passer à la diapositive précédente
    showSlide(activeIndex);
});
