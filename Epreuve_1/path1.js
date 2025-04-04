document.addEventListener("DOMContentLoaded", () => { 
    const slides = document.querySelectorAll(".slide");
    const nextArrow = document.getElementById("nextArrow");
    let currentIndex = 0;

    slides[currentIndex].classList.add("active");

    nextArrow.addEventListener("click", () => {
        // Masquer l'image actuelle
        slides[currentIndex].classList.remove("active");

        currentIndex++;

        if (currentIndex < slides.length) {
            slides[currentIndex].classList.add("active");
        } 

        // Vérifier si on est sur la dernière slide
        if (currentIndex === slides.length) {
            window.location.href = "../Portes/porte2.html"; // Redirige vers la nouvelle page
        }
    });
});
