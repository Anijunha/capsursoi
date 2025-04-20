window.addEventListener("DOMContentLoaded", () => {
    const introContent = document.querySelector(".intro-content");
    setTimeout(() => {
        introContent.classList.add("visible");
    }, 1000); 

    const overlay = document.getElementById("intro-overlay");
    document.getElementById("enter-btn").addEventListener("click", () => {
        overlay.classList.add("fade-out");
    });
});
