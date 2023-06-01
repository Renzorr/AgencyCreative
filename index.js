const menu = document.querySelector(".menu");
const nav = document.querySelector(".link-section");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
  menu.classList.toggle("active");
});
