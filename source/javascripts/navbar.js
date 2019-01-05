// function initUpdateNavbarOnScroll() {
//   const navbar = document.querySelector('.index .navbar-default');

//   if (navbar) {
//     window.addEventListener('scroll', function() {
//       if (window.scrollY >= 120) {
//         navbar.classList.add('navbar-white');
//       } else {
//         navbar.classList.remove('navbar-white');
//       }
//     });
//   }
// }

document.addEventListener('DOMContentLoaded', function() {
  initUpdateNavbarOnScroll();
});



function initUpdateNavbarOnScroll() {
const navbar = document.querySelector('.index .navbar-default');

  if (navbar) {
    if (window.matchMedia("(min-width: 800px)").matches) {
          window.addEventListener('scroll', function() {
            if (window.scrollY >= 120) {
              navbar.classList.add('navbar-white');
            } else {
              navbar.classList.remove('navbar-white');
            }
          });
    } else {
      console.log("je suis dans le else");
      const navbar = document.querySelector('.index .navbar-default');
      console.log("je suis dans eaprès la constante");
      navbar.classList.add('navbar-white');
    }
  }
}







