const body = document.querySelector("body");
const searchWrap = document.querySelector(".search-box");
const langBox = document.querySelector(".lang-box");

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
