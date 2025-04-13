window.addEventListener("DOMContentLoaded", () => {
    // Apparition du texte avec effet fondu
    const introContent = document.querySelector(".intro-content");
    setTimeout(() => {
        introContent.classList.add("visible");
    }, 500); // petit délai pour déclencher la transition

    // Clic sur le bouton pour faire disparaître l'écran blanc
    const overlay = document.getElementById("intro-overlay");
    document.getElementById("enter-btn").addEventListener("click", () => {
        overlay.classList.add("fade-out");
    });
});
