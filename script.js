const navBtn = document.querySelector('.menu');
const navMenu = document.querySelector('.navbar__list_items');

// const showMenu = () => {
//   navMenu.classList.remove('active');
// };

// const hideMenu = () => {
//   navMenu.classList.add('active');
// };


// navBtn.addEventListener('mouseenter', showMenu);
// navBtn.addEventListener('mouseleave', hideMenu);

const handleMenu = () => {
  navMenu.classList.toggle('active');
};

navBtn.addEventListener('click', handleMenu);
