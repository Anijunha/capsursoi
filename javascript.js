window.onload = function() {
    const introScreen = document.getElementById('intro-screen');
    const welcomeText = document.getElementById('welcome-text');
    const exploreBtn = document.getElementById('explore-btn');
    const startImage = document.getElementById('start-image');
    const attentionText = document.getElementById('attention-text'); // Récupérer le texte d'attention

    // Apparition progressive des éléments d'intro
    setTimeout(() => {
        introScreen.style.opacity = '1';
        introScreen.style.pointerEvents = 'auto';
    }, 100);

    setTimeout(() => {
        welcomeText.style.opacity = '1';
    }, 1250);

    setTimeout(() => {
        exploreBtn.style.opacity = '1';
    }, 2500);

    // Apparition du texte d'attention après 1 seconde
    setTimeout(() => {
        attentionText.style.opacity = '1';
    }, 2000);

    // Gestion du clic pour disparaître progressivement
    exploreBtn.addEventListener('click', function() {
        introScreen.style.transition = "opacity 1s ease-out"; // Animation de fade-out
        introScreen.style.opacity = '0'; // On commence le fade-out

        welcomeText.style.opacity = '0';
        exploreBtn.style.opacity = '0';

        // Garder le texte d'attention visible
        attentionText.style.opacity = '1';  // S'assurer qu'il reste visible

        setTimeout(() => {
            introScreen.style.pointerEvents = 'none';  // Désactive les interactions après le fade-out
        }, 1500);  
    });

    // Changement d'image au survol
    startImage.addEventListener('mouseenter', function() {
        startImage.src = "assets/img/bouton_index2.png";
    });

    startImage.addEventListener('mouseleave', function() {
        startImage.src = "assets/img/bouton_index1.png";
    });

    // Redirection au clic sur "Commence ton aventure !"
    startImage.addEventListener('click', function() {
        window.location.href = "Entree_dans_l_histoire/entree.html"; // Lien de redirection
    });
};
