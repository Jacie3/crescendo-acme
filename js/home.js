////**** mobile navigation ****////
const menuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.main-nav-container');
const closeIcon = document.querySelector('.close-icon');
const menuOverlay = document.querySelector('.overlay');

//Mobile Menu showing
menuButton.addEventListener('click', e => {
    mobileMenu.style.transform = 'translateY(0)';
    menuButton.style.display = 'none';
    closeIcon.style.display = 'flex';
    menuOverlay.style.opacity = '.6';
})
//Menu closed
closeIcon.addEventListener('click', () => {
    mobileMenu.style.transform = 'translateY(-120%)';
    menuButton.style.display = 'flex';
    closeIcon.style.display = 'none';
    menuOverlay.style.opacity = '0';
})

////**** insights carousel ****////
const insightsTrack = document.querySelector('.insights-track');
const insightsCards = Array.from(insightsTrack.children);
const insightsNav = document.querySelector('.insights-nav');
const insightsIndicator = Array.from(insightsNav.children);
const insightsCardWidth = document.querySelector('.insights-card').getBoundingClientRect().width;


//Move cards when navigator button is clicked
insightsNav.addEventListener('click', e => {
    const targetButton = e.target.closest('button');

    if (!targetButton) return;

    const currentButton = insightsNav.querySelector('.insights-nav__current');
    const targetIndex = insightsIndicator.findIndex(button => button == targetButton);
    const targetCard = insightsCards[targetIndex];

    insightsTrack.style.transform = 'translateX(-' + insightsCardWidth * targetIndex + 'px)';

    //change color of nav indicator
    currentButton.classList.remove('insights-nav__current');
    targetButton.classList.add('insights-nav__current');
})
