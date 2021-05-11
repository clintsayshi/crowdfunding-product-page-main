const bookmark = document.querySelector("#bookmark-product");
const menu__links = document.querySelector("#nav__links");
const mobile__menu = document.querySelector("#mobile__menubtn");
const back__project = document.querySelector("#back__projectbtn");
const modal = document.querySelector("#modal");
const modal__overlay = document.querySelector(".overlay");
const close__modalbtn = document.querySelector("#close__modal");
const pledgeProduct = document.querySelectorAll(".pledge-product");
const complete__modalbtn = document.querySelector("#complete__modalbtn");

mobile__menu.addEventListener("click", () => {
  menu__links.classList.toggle("navlinks__on");
  console.log(mobile__menu);
});

back__project.addEventListener("click", () => {
  modal.classList.toggle("modal__on");
  modal__overlay.classList.toggle("modal__on");
});

close__modalbtn.addEventListener("click", () => {
  modal.classList.toggle("modal__on");
  modal__overlay.classList.toggle("modal__on");
});

pledgeProduct.forEach((item) => {
  item.children[1].addEventListener("click", (e) => {
    pledgeProduct.forEach((i) => {
      i.children[1].firstElementChild.classList.remove("check-radio");
      i.classList.remove("check-radio-label");
      if (i.children[3]) {
        i.children[3].classList.remove("pledge__actionon");
        i.children[2].classList.remove("pledge__actionon");
      }
    });

    item.children[1].firstElementChild.classList.toggle("check-radio");
    item.classList.toggle("check-radio-label");

    if (item.children[3]) {
      item.children[3].classList.toggle("pledge__actionon");
      item.children[2].classList.toggle("pledge__actionon");
    }
  });

  if (item.children[3]) {
    const pledgebtn = item.children[3].lastElementChild.lastElementChild;
    pledgebtn.addEventListener("click", () => {
      modal__overlay.classList.toggle("modal__on");
      modal__overlay.classList.toggle("completed__modaloverlay");
      document
        .querySelector(".completed__modal")
        .classList.toggle("completed__modalon");
    });
  }
});

complete__modalbtn.addEventListener("click", () => {
  document
    .querySelector(".completed__modal")
    .classList.toggle("completed__modalon");
  modal.classList.toggle("modal__on");
  modal__overlay.classList.toggle("completed__modaloverlay");
});
