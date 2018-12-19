function initUpdateNavbarOnScroll() {
  const navbar = document.querySelector('.index .navbar-default');

  if (navbar) {
    window.addEventListener('scroll', function() {
      if (window.scrollY >= 120) {
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



window.addEventListener('resize', function() {
  if (window.matchMedia("(max-width: 700px)").matches) {
    navbar.classList.add('navbar-white');
  } else {
    navbar.classList.remove('navbar-white');
  }
});


// function initUpdateNavbarOnScroll() {
//   const navbar = document.querySelector('.index .navbar-default');

//   window.addEventListener('resize', function() {
//     if (window.matchMedia("(min-width: 700px)").matches) {

//       if (navbar) {
//         window.addEventListener('scroll', function() {
//           if (window.scrollY >= 120) {
//             navbar.classList.add('navbar-white');
//           } else {
//             navbar.classList.remove('navbar-white');
//           }
//         });
//       }
//     } else {
//       navbar.classList.add('navbar-white');
//     }
//   });
// }

// document.addEventListener('DOMContentLoaded', function() {
//   initUpdateNavbarOnScroll();
// });










