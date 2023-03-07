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

// Show "arrow up button Scroll "
const arrowUp = document.querySelector(".arrow_up");
document.addEventListener("scroll", () => {
  if (window.scrollY > homeHeight / 2) {
    arrowUp.classList.add("visible");
  } else {
    arrowUp.classList.remove("visible");
  }
});

// Handle click arrow up
arrowUp.addEventListener("click", () => {
  scrollIntoView("#home");
});

// projects (my work) 클릭시 코드

const workbtnContainer = document.querySelector(".work__categories");
const projectsContainer = document.querySelector(".work__projects");
const projects = document.querySelectorAll(".project");

workbtnContainer.addEventListener("click", (e) => {
  const filter = e.target.dataset.filter || e.target.parentNode.dataset.filter;
  if (filter == null) {
    return;
  }
  projectsContainer.classList.add("anim-out");

  setTimeout(() => {
    projects.forEach((project) => {
      if (filter === "*" || filter === project.dataset.type) {
        project.classList.remove("invisible");
      } else {
        project.classList.add("invisible");
      }
    });
    // 버튼 클릭시 애니메이션이 다시 돌아오는 것
    projectsContainer.classList.remove("anim-out");
  }, 300);
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
