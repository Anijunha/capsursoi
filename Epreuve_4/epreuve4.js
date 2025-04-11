document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const nextArrow = document.getElementById("nextArrow");
    const prevArrow = document.getElementById("prevArrow");
    let currentIndex = 0;

    // Fonction pour afficher la bonne slide et gérer la visibilité des flèches
    function updateSlide(index) {
        // Masquer toutes les slides
        slides.forEach(slide => slide.classList.remove("active"));

        // Afficher la slide actuelle
        slides[index].classList.add("active");

        // Gérer la visibilité des flèches
        prevArrow.style.display = index === 0 ? "none" : "block";
        nextArrow.style.display = index === slides.length - 1 ? "none" : "block";
    }

    // Afficher la première slide au chargement
    updateSlide(currentIndex);

    // Événement sur la flèche droite
    nextArrow.addEventListener("click", () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlide(currentIndex);
        }
    });

    // Événement sur la flèche gauche
    prevArrow.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlide(currentIndex);
        }
    });
});
