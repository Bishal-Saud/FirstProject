const hamburgerButton = document.querySelector('.hamburger-button');
const hamburgerNav = document.querySelector('.hamburger-nav');


hamburgerButton.addEventListener('click', () => {
  hamburgerNav.classList.toggle('open');
});
