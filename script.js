//abre e fecha menu hamburguer
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

//rola a tela caso cliquem em um lin do nav bar
function rolar(div) {
  const divParaRolarAte = document.getElementById(div);

  const divParaRolarAteTop = divParaRolarAte.offsetTop;

  window.scrollTo({
    top: divParaRolarAteTop,
    behavior: "smooth",
  });
}
