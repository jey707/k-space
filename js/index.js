const busi_img = document.querySelector(".busi_img");

// youtube backgroud
document.addEventListener("DOMContentLoaded", function () {
  new VideoBackgrounds("[data-vbg]");
});

const options = { method: "GET", headers: { Accept: "application/json" } };

fetch("https://api.upbit.com/v1/ticker?markets=KRW-BTC", options)
  .then((response) => response.json())
  .then((response) => console.log(response))
  .catch((err) => console.error(err));

busi_img.addEventListener(
  "mouseover",
  function (e) {
    console.log(busi_img.classList.contains("flight"));
    let hover_gif = busi_img.dataset.hover;
    busi_img.src = hover_gif;
  },
  false
);
busi_img.addEventListener(
  "mouseout",
  function (e) {
    let hover_png = busi_img.dataset.png;
    busi_img.src = hover_png;
  },
  false
);
