window.onload = function() {
    const introScreen = document.getElementById('intro-screen');
    const welcomeText = document.getElementById('welcome-text');
    const exploreBtn = document.getElementById('explore-btn');
    const startImage = document.getElementById('start-image');

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

    // Gestion du clic pour disparaître progressivement
    exploreBtn.addEventListener('click', function() {
        introScreen.style.opacity = '0';
        welcomeText.style.opacity = '0';
        exploreBtn.style.opacity = '0';

        setTimeout(() => {
            introScreen.style.pointerEvents = 'none';  
        }, 1500);  
    });

    // Changement d'image au survol
    startImage.addEventListener('mouseenter', function() {
        startImage.src = "assets/img/bouton_index2.png";
    });

    startImage.addEventListener('mouseleave', function() {
        startImage.src = "assets/img/bouton_index1.png";
    });

    // Redirection au clic
    startImage.addEventListener('click', function() {
        window.location.href = "Entree_dans_l_histoire/entree.html";
    });
};
