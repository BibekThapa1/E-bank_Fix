"strict mode";

const nav_logo = document.querySelector(".nav-logo");
const hambuger_dot = document.querySelector(".hamburger");
const ham_wrapper = document.querySelector(".ham-wrapper");

hambuger_dot.addEventListener("click", function () {
  console.log("clicked");
  hambuger_dot.classList.toggle("active");
  ham_wrapper.classList.toggle("active");
});

nav_logo.addEventListener("click", function () {
  window.location.href = "/";
});
