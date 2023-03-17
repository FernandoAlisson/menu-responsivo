const btnMobile = document.getElementById("btn-mobile");

function toggleMenu() {
  const nav = document.getElementById("nav");
  // toggle = adicione a classe "active" caso não tenha, remova caso tenha
  nav.classList.toggle("active");
}

btnMobile.addEventListener("click", toggleMenu);