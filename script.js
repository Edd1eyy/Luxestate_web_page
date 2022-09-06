const forms = document.querySelectorAll("form");
const searchFields = document.querySelectorAll(".field");
const btns = document.querySelectorAll(".btn");
// prevent form submitting
btns.forEach((btn) => {
  btn.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});
forms.forEach((form) => {
  form.addEventListener("submit", (e) => {
    e.preventDefault();
  });
});
// nav bar scrolling
let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  let currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-70px";
  }
  prevScrollpos = currentScrollPos;
};
