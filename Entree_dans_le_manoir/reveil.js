// Récupérer les éléments nécessaires
const slides = document.querySelectorAll('.slide');
const prevButton = document.getElementById('prevArrow');
const nextButton = document.getElementById('nextArrow');
// Crée une variable pour gérer l'audio
const audio = new Audio("../assets/sounds/Explications.wav");
audio.loop = false;  // Désactive la boucle de l'audio

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

    // Lancer un audio spécifique si l'image correspond
    if (backgroundImage && backgroundImage.includes("7.jpg")) {
        const audio7 = new Audio('../assets/sounds/Explications.wav'); // Assurez-vous que le chemin de l'audio est correct
        audio7.play();
    }
        // Événement pour l'audio quand il se termine
        audio.addEventListener("ended", () => {
            // Quand l'audio se termine, on passe à la prochaine slide sans la couper
            slides[currentIndex].classList.remove("active");
            currentIndex++;
            if (currentIndex < slides.length) {
                slides[currentIndex].classList.add("active");
            }
        });
}

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
