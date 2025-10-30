const openBtn = document.querySelector('.open-btn');
const closeBtn = document.querySelector('.close-btn');
const mobileNavbar = document.querySelector('.mobile-navbar');

openBtn.addEventListener('click', function () {
  mobileNavbar.classList.add('active');
});

closeBtn.addEventListener('click', function () {
  mobileNavbar.classList.remove('active');
});
