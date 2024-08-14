"strict mode";

const hambuger_dot = document.querySelector(".hamburger");
const ham_wrapper = document.querySelector(".ham-wrapper");

hambuger_dot.addEventListener("click", function () {
  console.log("clicked");
  hambuger_dot.classList.toggle("active");
  ham_wrapper.classList.toggle("active");
});
