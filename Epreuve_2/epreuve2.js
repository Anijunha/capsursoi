document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const nextArrow = document.getElementById("nextArrow");
    const prevArrow = document.getElementById("prevArrow");
    let currentIndex = 0;

    function updateSlide(index) {
        slides.forEach(slide => slide.classList.remove("active"));

        slides[index].classList.add("active");

        prevArrow.style.display = index === 0 ? "none" : "block";
        nextArrow.style.display = index === slides.length - 1 ? "none" : "block";
    }

    updateSlide(currentIndex);

    nextArrow.addEventListener("click", () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
            updateSlide(currentIndex);
        }
    });

    prevArrow.addEventListener("click", () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateSlide(currentIndex);
        }
    });
});
