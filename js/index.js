const flight = document.querySelector(".flight");
const space = document.querySelector(".space");
const aftermarket = document.querySelector(".aftermarket");
const busi_img = document.querySelector(".busi_img");
const btc_price = document.getElementById("btc_price");
const btc_color = document.getElementById("btc_color");
const arrow_up = '<i class="fa-solid fa-caret-up"></i>';
const arrow_down = '<i class="fa-solid fa-caret-down"></i>';
const eth_price = document.getElementById("eth_price");
const eth_color = document.getElementById("eth_color");
// const eth_arrow = document.getElementById("eth_arrow");

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
  res.forEach((element) => {
    switch (element.market) {
      case "KRW-BTC": // 비트시세
        if (element.change === "RISE") {
          btc_price.classList.add("rise");
          btc_color.classList.add("rise");
          btc_color.innerHTML =
            arrow_up + (element.change_rate * 100).toFixed(2) + "%";
        } else if (element.change === "FALL") {
          btc_price.classList.add("fall");
          btc_color.classList.add("fall");
          btc_color.innerHTML =
            arrow_down + (element.change_rate * 100).toFixed(2) + "%";
        }
        btc_price.innerText = element.trade_price
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        break;
      case "KRW-ETH": // 이더시세
        if (element.change === "RISE") {
          eth_price.classList.add("rise");
          eth_color.classList.add("rise");
          eth_color.innerHTML =
            arrow_up +
            element.change_price
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        } else if (element.change === "FALL") {
          eth_price.classList.add("fall");
          eth_color.classList.add("fall");
          eth_color.innerHTML =
            arrow_down +
            element.change_price
              .toString()
              .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
        }
        eth_price.innerText = element.trade_price
          .toString()
          .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    }
  });
}
