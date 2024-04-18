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
