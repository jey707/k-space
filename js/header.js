const body = document.querySelector("body");
const searchWrap = document.querySelector(".search-box");
const langBox = document.querySelector(".lang-box");
const headerBar = document.querySelector(".header-bar");
const allMenu = document.querySelector(".allmenu");
const mobileNav = document.querySelector(".mobile-nav");

let lastScrollTop = 0;

function searchOnOff() {
  if (searchWrap.classList.contains("box-off")) {
    searchWrap.classList.replace("box-off", "box-on");
    body.style.overflow = "hidden";
  } else {
    searchWrap.classList.replace("box-on", "box-off");
    body.style.removeProperty("overflow");
  }
}

function langOnOff() {
  if (langBox.classList.contains("lang-hide")) {
    langBox.classList.replace("lang-hide", "lang-show");
  } else {
    langBox.classList.replace("lang-show", "lang-hide");
  }
}

function openMenu() {
  if (allMenu.classList.contains("allmenu-hide")) {
    allMenu.classList.replace("allmenu-hide", "allmenu-show");
    body.style.overflow = "hidden";
  } else {
    allMenu.classList.replace("allmenu-show", "allmenu-hide");
    body.style.removeProperty("overflow");
  }
}

const moMenu = document.getElementsByClassName("first-area");

const mobileMenu = function () {
  let thisMenu = this.querySelector(".m-depth2");
  let noneMenu = mobileNav.getElementsByClassName("m-depth2");
  for (let i = 0; i < noneMenu.length; i++) {
    console.log(noneMenu[i]);
    let rayMenu = noneMenu[i];
    rayMenu.style.display = "none";
  }
  thisMenu.style.display = "block";
};

for (let i = 0; i < moMenu.length; i++) {
  moMenu[i].addEventListener("click", mobileMenu, false);
}

window.addEventListener(
  "scroll",
  function () {
    // or window.addEventListener("scroll"....
    let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    if (st > 45 && headerBar.classList.contains("header-down")) {
      headerBar.classList.replace("header-down", "header-up");
    } else if (st < 45 && headerBar.classList.contains("header-up")) {
      headerBar.classList.replace("header-up", "header-down");
    }
    // if (st > lastScrollTop) {
    //   // downscroll code
    //   console.log("downscroll code");
    // } else {
    //   // upscroll code
    //   console.log("upscroll code");
    // }
    lastScrollTop = st <= 0 ? 0 : st;
  },
  false
);
