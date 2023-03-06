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
  scrollIntoView(link);
});

// Contant Me 를 누를시 이동하기

const Contant = document.querySelector(".home__contact");
Contant.addEventListener("click", () => {
  scrollIntoView("#contact");
});

//  scroll 을 할시 home window 투명 해지는

const homescroll = document.querySelector(".home__container");
const homeHeight = homescroll.getBoundingClientRect().height;
document.addEventListener("scroll", () => {
  homescroll.style.opacity = 1 - window.scrollY / homeHeight;
});

// 유틸리티 함수 (Contant me / about )
function scrollIntoView(selector) {
  const clickTo = document.querySelector(selector);
  clickTo.scrollIntoView({
    behavior: "smooth",
    block: "start",
    inline: "nearest",
  });
}
