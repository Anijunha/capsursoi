document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide"); 
    const overlayText = document.getElementById("final-text"); 
    let currentIndex = 0; 

    function updateSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[index].classList.add("active");

        if (index === slides.length - 1) {
            overlayText.classList.add("visible"); 
        } else {
            overlayText.classList.remove("visible"); 
        }
    }

    updateSlide(currentIndex);

    setTimeout(() => {
        window.location.href = "../Portes/porte4.html"; 
    }, 4000); 
});
