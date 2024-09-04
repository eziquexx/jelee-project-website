const header = document.getElementById("header");
const headerHeight = header.offsetHeight;
const cardSection = document.getElementById("cardSection");

// header와 cardSection 거리
cardSection.style.marginTop = headerHeight + 70 + "px";

function cardStyle() {
  const cards = document.querySelectorAll(".cards");
  const windowW = window.innerWidth;
  let notW = [];
  console.log(windowW);
  // 브라우저 너비 마다 카드 갯수 제한
  cards.forEach(card => {
    for(let i = 0; i < cards.length; i++){
      
      // windowW >= 1200 경우, 4의 배수 카드는 marginRgiht 없음.
      if (windowW >= 1200) {
        cards[i].style.width = "23%";
        cards[i].style.marginRight = "0";
        cards[i].style.marginBottom = "4%";
        if (i % 4 === 0 ) {
          continue;
        }
        cards[i-1].style.marginRight = "2.5%";
      } else if (windowW >= 800) {
        // windowW >= 800 경우, 3의 배수 카드는 marginRgiht 없음.
        cards[i].style.width = "31%";
        cards[i].style.marginRight = "0";
        cards[i].style.marginBottom = "4%";
        if (i % 3 === 0 ) {
          continue;
        }
        console.log(i-1);
        cards[i-1].style.marginRight = "3.5%";
      } else if (windowW >= 600) {
        // windowW >= 600 경우, 2의 배수 카드는 marginRgiht 없음.
        cards[i].style.width = "48%";
        cards[i].style.marginRight = "0";
        cards[i].style.marginBottom = "6%";
        if (i % 2 === 0 ) {
          continue;
        }
        cards[i-1].style.marginRight = "4%";
      } else {
        // windowW 600 이하 경우, 2의 배수 카드는 marginRgiht 없음.
        cards[i].style.width = "80%";
        cards[i].style.margin = "0 auto 12%";
      }
    }
  });
}

window.addEventListener("resize", cardStyle);
cardStyle();
