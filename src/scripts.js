const $switchThemeBtn = document.querySelector(".todo-header__btn");
const $switchBtnIcon = document.querySelector(".todo-header__btn__icon");
const $root = document.documentElement;

$switchThemeBtn.addEventListener("click", () => {
  if ($root.classList.contains("light-theme")) {
    $root.classList.replace("light-theme", "dark-theme");
    $switchBtnIcon.src = "images/icon-sun.svg";
  } else {
    $root.classList.replace("dark-theme", "light-theme");
    $switchBtnIcon.src = "images/icon-moon.svg";
  }
});
