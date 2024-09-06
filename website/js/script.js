const header = document.getElementById("header");
const headerHeight = header.offsetHeight;
const cardSection = document.getElementById("cardSection");

const toggleBtn = document.querySelector(".toggle-btn");
const toggleBtnShape = document.querySelector(".toggle-btn-shape");

window.addEventListener("wheel", function(event) {
  let wheelMove = event.deltaY * -0.01;
  // wheel down -1, wheel up +1
  if (wheelMove === 1) {
    header.style.transform = `translateY(0px)`;
    if (this.window.scrollY > 1) {
      header.style.backgroundColor = "#fff";
      header.style.borderBottom = "1px solid #ddd";
      header.style.boxShadow = "0px 1px 20px -10px rgba(0, 0, 0, 0.3)";
      header.style.padding = "25px 0";
    } else {
      // header.style.backgroundColor = "transparent";
      // header.style.borderBottom = "none";
      // header.style.boxShadow = "none";
      // header.style.padding = "0";
    }
    //scrollY가 1미만이면 배경 안 보임. 1이상이면 배경과 togglebtn배경색 보임.
  } else if (wheelMove === -1 && this.window.scrollY > 1) {
    header.style.transform = `translateY(-${parseFloat(headerHeight)}px)`;
    // header.style.padding = "0";
  }
});

// toggleBtn click시 모양 변경
toggleBtn.addEventListener("click", function() {
  toggleBtnShape.classList.toggle("on");
});


// header와 cardSection 거리
cardSection.style.marginTop = headerHeight + 70 + "px";

function resizeStyle() {
  const cards = document.querySelectorAll(".cards");
  const windowW = window.innerWidth;
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

window.addEventListener("resize", resizeStyle);
resizeStyle();
