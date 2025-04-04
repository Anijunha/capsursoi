document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    let currentIndex = 0;

    // Crée une variable pour gérer l'audio
    const audio = new Audio("../assets/sounds/Explications.wav");
    audio.loop = false;  // Désactive la boucle de l'audio

    // Active la première slide
    slides[currentIndex].classList.add("active");

    const nextArrow = document.getElementById("nextArrow");
    nextArrow.addEventListener("click", () => {
        // Si on est sur la dernière slide, on redirige avant de changer la slide
        if (currentIndex === slides.length - 1) {
            window.location.href = "../Portes/porte1.html"; // Redirige vers début3.html si c'est la dernière slide
            return; // Empêche le code suivant d'être exécuté
        }

        // Masquer l'image actuelle
        slides[currentIndex].classList.remove("active");

        currentIndex++;

        // Vérifier si l'image de fond de la slide correspond à '7.jpg'
        const currentSlide = slides[currentIndex];
        const backgroundImage = currentSlide.style.backgroundImage;

        // Si l'image de fond est 7.jpg, démarre l'audio
        if (backgroundImage.includes("7.jpg")) {
            console.log("Lancement de l'audio...");
            audio.play().catch(err => console.log("Erreur lors de la lecture de l'audio : ", err));
        }

        // Afficher la slide suivante
        slides[currentIndex].classList.add("active");
    });

    audio.addEventListener("ended", () => {
        // Quand l'audio se termine, on passe à la prochaine slide sans la couper
        slides[currentIndex].classList.remove("active");
        currentIndex++;
        if (currentIndex < slides.length) {
            slides[currentIndex].classList.add("active");
        }
    });
});
