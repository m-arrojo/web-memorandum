$(document).ready(function () {
  $("#navbarTogglerBtn").click(function () {
    $("#toggleArrow").toggleClass("rotate-animation");
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var triggers = document.querySelectorAll('[data-bs-toggle="collapse"]');

  triggers.forEach(function(trigger) {
    trigger.addEventListener('click', function(event) {
      var target = document.querySelector(trigger.getAttribute('href'));
      
      // Verifica si el target ya está abierto.
      if (target.classList.contains('show')) {
        event.preventDefault(); // Previene la acción por defecto para evitar que se cierre.
        return; // Sale de la función.
      }

      // Colapsa todos los artículos excepto el activo.
      var articles = document.querySelectorAll('.article');
      articles.forEach(function(article) {
        if (article.id !== target.id) {
          var bsCollapse = new bootstrap.Collapse(article, {
            toggle: false
          });
          bsCollapse.hide();
        }
      });
    });
  });
});