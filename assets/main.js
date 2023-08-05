const slider = document.querySelector('.testimonials__slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
const indicatorParents = document.querySelector('.controls ul');
let sectionIndex = 0;

function setIndex() {
  slider.style.transform = `translateX(${sectionIndex * -33}%)`;
  document.querySelector('.controls .active').classList.remove('active');
}

leftArrow.addEventListener('click', function() {
  sectionIndex = sectionIndex > 0 ? sectionIndex - 1 : 0;
  setIndex();
});

rightArrow.addEventListener('click', function() {
  sectionIndex = sectionIndex < 2 ? sectionIndex + 1 : 2;
  setIndex();
});

// Navigation
const menuBar = document.querySelector('.menu__bar');
const closeBar = document.querySelector('.close__bar');
const navbarLinks = document.querySelector('.nav__link');

menuBar.addEventListener('click', () => {
  navbarLinks.classList.add('active');
});

closeBar.addEventListener('click', () => {
  navbarLinks.classList.remove('active');
});