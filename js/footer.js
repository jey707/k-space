const rotate_icon = document.querySelector("#rotate_icon");
const site_link = document.querySelector(".site_link");
let classChk;
function listUp() {
  classChk = rotate_icon.classList.contains("fa-caret-up");
  //up
  if (classChk) {
    rotate_icon.classList.replace("fa-caret-up", "fa-caret-down");
    site_link.classList.replace("hide", "show");
  } else {
    rotate_icon.classList.replace("fa-caret-down", "fa-caret-up");
    site_link.classList.replace("show", "hide");
  }
}
