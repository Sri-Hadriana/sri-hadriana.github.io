const icon = document.querySelector('.icon input');
const nav = document.querySelector('.nav-wrapper .menu-wrapper .menu');

icon.addEventListener('click', function () {
  nav.classList.toggle('slide');
});