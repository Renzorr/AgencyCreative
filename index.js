const menu = document.querySelector(".menu");
const nav = document.querySelector(".nav-link-section ");

menu.addEventListener("click", () => {
  nav.classList.toggle("active");
  menu.classList.toggle("active");
});
