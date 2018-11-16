function initUpdateNavbarOnScroll() {
  const navbar = document.querySelector('.index .navbar-default');

  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY >= window.innerHeight) {
        navbar.classList.add('navbar-white');
      } else {
        navbar.classList.remove('navbar-white');
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', function() {
  initUpdateNavbarOnScroll();
});
