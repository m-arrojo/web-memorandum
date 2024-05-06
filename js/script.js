$(document).ready(function () {
  $("#navbarTogglerBtn").click(function () {
    $("#toggleArrow").toggleClass("rotate-animation");
  });
});

// COLLAPSE IT360
document.addEventListener('DOMContentLoaded', function () {
  var triggers = document.querySelectorAll('[data-bs-toggle="collapse"]');

  triggers.forEach(function(trigger) {
    trigger.addEventListener('click', function(event) {
      var target = document.querySelector(trigger.getAttribute('href'));
      
      // Cierra todos los elementos abiertos
      var openCollapses = document.querySelectorAll('.collapse.show');
      openCollapses.forEach(function(collapse) {
        if (collapse !== target) {
          var bsCollapse = new bootstrap.Collapse(collapse);
          bsCollapse.hide();
        }
      });

      // Abre el collapse correspondiente
      var bsCollapse = new bootstrap.Collapse(target);
      bsCollapse.show();
    });
  });
});

// document.addEventListener('DOMContentLoaded', function() {
//   const preheaderToggler = document.querySelector('.preheader-toggler');
//   const navbarToggler = document.querySelector('.navbar-toggler');
//   const preheaderMenu = document.querySelector('.preheader-menu');
//   const navbarMenu = document.querySelector('.menu');

//   // Función para alternar el menú y el icono del toggler
//   function toggleMenu(toggler, menu) {
//       // Cerrar el otro menú si está abierto
//       if (menu === preheaderMenu && navbarMenu.style.display === 'flex') {
//           navbarMenu.style.display = 'none';
//           navbarToggler.innerHTML = '☰';
//       } else if (menu === navbarMenu && preheaderMenu.style.display === 'flex') {
//           preheaderMenu.style.display = 'none';
//           preheaderToggler.innerHTML = '☰';
//       }

//       // Alternar el menú actual
//       if (menu.style.display === 'flex') {
//           menu.style.display = 'none';
//           toggler.innerHTML = '☰'; // Cambiar a menú burger
//       } else {
//           menu.style.display = 'flex';
//           toggler.innerHTML = '✕'; // Cambiar a 'X' cuando esté abierto
//       }
//   }

//   // Evento para el toggler del preheader
//   preheaderToggler.addEventListener('click', function() {
//       toggleMenu(this, preheaderMenu);
//   });

//   // Evento para el toggler de la barra de navegación principal
//   navbarToggler.addEventListener('click', function() {
//       toggleMenu(this, navbarMenu);
//   });
// });

