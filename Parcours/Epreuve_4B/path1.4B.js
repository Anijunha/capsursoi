document.addEventListener("DOMContentLoaded", () => { 
    const slides = document.querySelectorAll(".slide");
    const nextArrow = document.getElementById("nextArrow");
    const prevArrow = document.getElementById("prevArrow");
    let currentIndex = 0;

    // Fonction pour afficher la slide active et gérer les flèches
    function updateSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");

        // Affichage conditionnel des flèches
        prevArrow.style.display = index === 0 ? "none" : "block";
        nextArrow.style.display = index === slides.length - 1 ? "none" : "block";
    }

    // Initialiser la première slide
    updateSlide(currentIndex);

    // Flèche suivante
    nextArrow.addEventListener("click", () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlide(currentIndex);
        } else {
            window.location.href = "end.html";
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
