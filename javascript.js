window.onload = function() {
    const introScreen = document.getElementById('intro-screen');
    const welcomeText = document.getElementById('welcome-text');
    const exploreBtn = document.getElementById('explore-btn');
    const startImage = document.getElementById('start-image');
    const attentionText = document.getElementById('attention-text'); 

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

    setTimeout(() => {
        attentionText.style.opacity = '1';
    }, 2000);

    exploreBtn.addEventListener('click', function() {
        introScreen.style.transition = "opacity 1s ease-out"; 
        introScreen.style.opacity = '0'; 

        welcomeText.style.opacity = '0';
        exploreBtn.style.opacity = '0';

        attentionText.style.opacity = '1';  

        setTimeout(() => {
            introScreen.style.pointerEvents = 'none';  
        }, 1500);  
    });

    startImage.addEventListener('mouseenter', function() {
        startImage.src = "assets/img/bouton_index2.png";
    });

    startImage.addEventListener('mouseleave', function() {
        startImage.src = "assets/img/bouton_index1.png";
    });

    startImage.addEventListener('click', function() {
        window.location.href = "Entree_dans_l_histoire/entree.html"; 
    });
};
