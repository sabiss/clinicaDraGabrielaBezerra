//abre e fecha menu hamburguer
function abrirMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.toggle("hidden");
}

function fecharMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  mobileMenu.classList.add("hidden");
}

document.addEventListener("DOMContentLoaded", function () {
  const mobileMenuButton = document.getElementById("mobileMenuButton");
  const fecharMobileMenuButton = document.getElementById("fecharMobileMenu");

  mobileMenuButton.addEventListener("click", abrirMobileMenu);
  fecharMobileMenuButton.addEventListener("click", fecharMobileMenu);
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
