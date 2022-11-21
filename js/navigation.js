import initHamburger from './hamburger.js';

export default function () {
  const navLink = document.querySelector(".dropdown-click");
  const menu = document.querySelector("#dropdown-menu");
  const navLinks = document.querySelector(".nav-links");
  const hamburgerBtn = document.querySelector("#hamburger-button");

  navLink.addEventListener("click", (e) => {
    if (e.target === navLink) menu.classList.toggle("menu-open");
  });

  window.addEventListener('click', (e) => {
    if (!navLink.contains(e.target)) menu.classList.remove('menu-open');
  })

  initHamburger({
    element: hamburgerBtn,
    onClick: (e) => {
      if ([hamburgerBtn, navLinks].some(el => el.contains(e.target)))
        navLinks.classList.add("nav-links--visible");
      else
        navLinks.classList.remove("nav-links--visible");
      navLink.classList.toggle("dropdown-mobile");
    }
  });
}