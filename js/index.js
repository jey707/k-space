const flight = document.querySelector(".flight");
const space = document.querySelector(".space");
const aftermarket = document.querySelector(".aftermarket");
const busi_img = document.querySelector(".busi_img");

// youtube backgroud
document.addEventListener("DOMContentLoaded", function () {
  new VideoBackgrounds("[data-vbg]");
});

function hoverImg(tag) {
  let hover_gif = tag.dataset.hover;
  tag.src = hover_gif;
}
function hoverOutImg(tag) {
  let hover_png = tag.dataset.png;
  tag.src = hover_png;
}
flight.addEventListener("mouseover", function (e) {
  hoverImg(flight);
});
flight.addEventListener("mouseout", function (e) {
  hoverOutImg(flight);
});
space.addEventListener("mouseover", function (e) {
  hoverImg(space);
});
space.addEventListener("mouseout", function (e) {
  hoverOutImg(space);
});
aftermarket.addEventListener("mouseover", function (e) {
  hoverImg(aftermarket);
});
aftermarket.addEventListener("mouseout", function (e) {
  hoverOutImg(aftermarket);
});

const options = { method: "GET", headers: { Accept: "application/json" } };

fetch("https://api.upbit.com/v1/ticker?markets=KRW-BTC%2C%20KRW-ETH", options)
  .then((response) => response.json())
  .then((response) => tradePrice(response))
  .catch((err) => console.error(err));

function tradePrice(res) {
  console.log(res);
  res.forEach((element) => {
    console.log(element);
  });
}
