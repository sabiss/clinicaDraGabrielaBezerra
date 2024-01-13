document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMobileMenuButton = document.getElementById("closeMobileMenu");

  mobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
  });

  closeMobileMenuButton.addEventListener("click", function () {
    mobileMenu.classList.add("hidden");
  });
});
