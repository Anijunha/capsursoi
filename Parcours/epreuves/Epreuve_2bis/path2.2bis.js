document.addEventListener("DOMContentLoaded", () => { 
    const slides = document.querySelectorAll(".slide");
    const nextArrow = document.getElementById("nextArrow");
    const prevArrow = document.getElementById("prevArrow");
    let currentIndex = 0;

    // Fonction pour afficher la slide active et gérer la flèche gauche
    function updateSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");

        // Masquer la flèche gauche uniquement si on est sur la première slide
        prevArrow.style.display = index === 0 ? "none" : "block";

        // Toujours afficher la flèche droite
        nextArrow.style.display = "block";
    }

    // Initialiser la première slide
    updateSlide(currentIndex);

    // Flèche suivante
    nextArrow.addEventListener("click", () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlide(currentIndex);
        } else {
            // Si on est à la fin, rediriger
            window.location.href = "../../4/explications_4.html";
        }
    });

    // Flèche précédente
    prevArrow.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlide(currentIndex);
        }
    });
});
