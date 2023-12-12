document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.querySelector(".navbar-toggler");
  const navbarMenu = document.querySelector(".navbar-collapse");
  const contactButton = document.querySelector(
    '.btn-primary[href="contact.html"]'
  );

  navbarToggle.addEventListener("click", function () {
    navbarMenu.classList.toggle("show");
  });

  contactButton.addEventListener("click", function (event) {
    event.preventDefault(); // Empêcher le comportement par défaut du lien
    // Redirection vers la page de contact
    window.location.href = "contact.html";
  });
});
