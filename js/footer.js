const rotate_icon = document.querySelector("#rotate_icon");
const site_link = document.querySelector(".site_link");
let classChk;
function listUp() {
  classChk = rotate_icon.classList.contains("fa-caret-up");
  //up
  if (classChk) {
    console.log("up");
    rotate_icon.classList.replace("fa-caret-up", "fa-caret-down");
    site_link.classList.replace("hide", "show");
  } else {
    console.log("down");
    rotate_icon.classList.replace("fa-caret-down", "fa-caret-up");
    site_link.classList.replace("show", "hide");
  }
}
