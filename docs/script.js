
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.mobile-menu');
if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => {
    menu.classList.toggle('open');
    menu.setAttribute('aria-hidden', menu.classList.contains('open') ? 'false' : 'true');
  });
}
