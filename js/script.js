const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu_item');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('menu_active');
  hamburger.classList.toggle('hamburger_active');

  menuItems.forEach(el => el.addEventListener('click', () => {
    menu.classList.remove('menu_active');
    hamburger.classList.remove('hamburger_active');
  }))
});

