document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const nextArrow = document.getElementById("nextArrow");
    let currentIndex = 0;

    // Création de l'overlay et du texte pour la dernière slide
    const overlay = document.createElement("div");
    overlay.classList.add("overlay");
    overlay.innerHTML = `
        <div class="overlay-text">Il faut essayer encore...</div>
    `;
    document.body.appendChild(overlay);
    overlay.style.display = "none"; // Caché par défaut

    // Création de l'audio
    const audio = new Audio("../assets/sounds/Try_again.wav");

    // Afficher la première slide
    slides[currentIndex].classList.add("active");

    nextArrow.addEventListener("click", () => {
        // Masquer l'image actuelle
        slides[currentIndex].classList.remove("active");

        currentIndex++;

        if (currentIndex < slides.length) {
            slides[currentIndex].classList.add("active");
        }

        // Vérifier si on est sur la dernière slide
        if (currentIndex === slides.length - 1) {
            nextArrow.style.display = "none"; // Cache le bouton flèche
            overlay.style.display = "flex"; // Affiche l'écran noir semi-transparent
            audio.play(); // Joue l'audio
        }
    });
});
