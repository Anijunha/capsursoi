document.addEventListener("DOMContentLoaded", () => { 
    const slides = document.querySelectorAll(".slide");
    const nextArrow = document.getElementById("nextArrow");
    const prevArrow = document.getElementById("prevArrow");
    const finalText = document.getElementById("final-text"); // Le texte sur la dernière slide
    let currentIndex = 0;

    function updateSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");

        prevArrow.style.display = index === 0 ? "none" : "block";

        nextArrow.style.display = "block";

        if (index === slides.length - 1) {
            finalText.classList.add("visible");
        } else {
            finalText.classList.remove("visible"); 
        }
    }

    updateSlide(currentIndex);

    nextArrow.addEventListener("click", () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlide(currentIndex);
        } else {
            window.location.href = "../Portes/porte1.html";
        }
    });

    prevArrow.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlide(currentIndex);
        }
    });
});
