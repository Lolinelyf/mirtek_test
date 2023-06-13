import "./wave";
import "./barChart";
import "./line";
import "./circle-people";
import "./grid"

const selectDate = document.querySelector(".date");
const selectDate_title = selectDate.querySelector(".date__title");
const selectDate_labels = selectDate.querySelectorAll(".date__label");

selectDate_title.addEventListener("click", () => {
  if ("active" === selectDate.getAttribute("data-state")) {
    selectDate.setAttribute("data-state", "");
  } else {
    selectDate.setAttribute("data-state", "active");
  }
});

for (let i = 0; i < selectDate_labels.length; i++) {
  selectDate_labels[i].addEventListener("click", (evt) => {
    selectDate_title.textContent = evt.target.textContent;
    selectDate.setAttribute("data-state", "");
  });
}

const selectTl = document.querySelector(".timeline");
const selectTl_title = selectTl.querySelector(".timeline__title");
const selectTl_labels = selectTl.querySelectorAll(".timeline__label");

selectTl_title.addEventListener("click", () => {
  if ("active" === selectTl.getAttribute("data-state")) {
    selectTl.setAttribute("data-state", "");
  } else {
    selectTl.setAttribute("data-state", "active");
  }
});

for (let i = 0; i < selectTl_labels.length; i++) {
  selectTl_labels[i].addEventListener("click", (evt) => {
    selectTl_title.textContent = evt.target.textContent;
    selectTl.setAttribute("data-state", "");
  });
}

const menuConteiner = document.querySelector(".menu");
const menuBtn = document.querySelector(".menu__btn");
const menu = document.querySelector(".navigation");

menuConteiner.addEventListener("click", () => {
  menu.classList.toggle("view");
  menuBtn.classList.toggle("rotate");
});
