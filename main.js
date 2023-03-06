"use strict";

const navbar = document.querySelector("#navbar");

const navbarHeight = navbar.getBoundingClientRect().height;
// Make navbar transparent when it is on the top
// navbar 를 scroll로 내릴 시 색깔 변화
document.addEventListener("scroll", () => {
  if (window.scrollY > navbarHeight) {
    navbar.classList.add("navbar--dark");
  } else {
    navbar.classList.remove("navbar--dark");
  }
});

// navbark 에 있는 about 을 누를 시 이동하는
const navbarMenu = document.querySelector(".navbar_menu");
navbarMenu.addEventListener("click", (event) => {
  console.log(event.target.dataset.link);
  const target = event.target;
  const link = target.dataset.link;
  if (link === null) {
    return;
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
});
