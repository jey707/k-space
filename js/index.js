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
const quickList = document.querySelector(".quick-list");
const foldArrow = document.querySelector(".fold-arrow");
const topBtn = document.querySelector(".top-btn");

// youtube backgroud
document.addEventListener("DOMContentLoaded", function () {
  new VideoBackgrounds("[data-vbg]");
});
(function () {
  const controller = new ScrollMagic.Controller();
  const scene1 = new ScrollMagic.Scene({
    triggerElement: "#news_wrap", //트리거 설정
    triggerHook: 0.8,
    reverse: false,
  })
    .setClassToggle("#news_wrap", "scr-visible")
    .addTo(controller);

  const revealElements = document.getElementsByClassName("busi_item");

  for (var i = 0; i < revealElements.length; i++) {
    // console.log(`transition-delay: ${delay}s`);
    const scene2 = new ScrollMagic.Scene({
      triggerElement: revealElements[i],
      offset: 150,
      triggerHook: 0.9,
      reverse: false,
    })
      // .setClassToggle(revealElements[i], `visible${i}`) // add class toggle
      .setClassToggle(revealElements[i], `scr-visible`) // add class toggle
      .addTo(controller);
    // .addIndicators({
    //   name: "(busi_con) " + (i + 1),
    //   colorStart: "#F6B352",
    //   colorTrigger: "#F6B352",
    // });
  }
})();

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

function quickFold() {
  if (quickList.classList.contains("fold-none")) {
    quickList.classList.replace("fold-none", "fold-show");
    foldArrow.style.transform = "rotate(0)";
  } else {
    quickList.classList.replace("fold-show", "fold-none");
    foldArrow.style.transform = "rotate(180deg)";
  }
}

let timeOut;

function screenTop() {
  if (window.scrollY != 0) {
    window.scrollBy(0, -50);
    timeOut = setTimeout("screenTop()", 1);
  } else clearTimeout(timeOut);
}
topBtn.addEventListener("click", screenTop);
