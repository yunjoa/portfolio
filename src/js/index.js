
window.onload = function(){

  console.log('hello, kkakkung!')
  // 인트로 이펙트
  $(function(){
    var welcomeSection = $('.welcome-section'),
    enterButton = welcomeSection.find('.enter-button');
    setTimeout(function(){
      welcomeSection.removeClass('content-hidden');
    },500);
    setTimeout(function(){
      welcomeSection.fadeOut();
    },2500);
  });



  // 스티커 효과
  $(".card").draggable({
    cursor:"move",
    stack:".card",
    scroll: false,
    opacity:0.8
  });




  // 커서 이벤트
  let mouseCursor2 = document.querySelector(".cur2"); 
  let mouseCursor1 = document.querySelector(".cur1"); 
  let mouseCursor0 = document.querySelector(".cur0");
  let aboutme = document.querySelector(".bdaycard");
  let wall = document.querySelector(".wall");
  let sticker = document.querySelector(".sticker");

  window.addEventListener("mousemove", cursor);
  window.addEventListener("click", () => {
  mouseCursor0.classList.add("clickcursor");
  setTimeout(() => {
    mouseCursor0.classList.remove("clickcursor");
  },300)
  });

  function cursor(e) {
  mouseCursor0.style.top = (e.pageY-2) + "px";
  mouseCursor0.style.left = (e.pageX-2) + "px";
  }

  aboutme.addEventListener("mousemove", cursorA);
  aboutme.addEventListener("mouseleave", cursorAhide);

  function cursorA(e) {
  mouseCursor1.style.display = "block"
  mouseCursor1.style.top = e.pageY + "px";
  mouseCursor1.style.left = e.pageX + "px";
  mouseCursor1.style.transform = "translate(-50%,-50%)"
  }

  function cursorAhide(e) {
  mouseCursor1.style.display = "none"
  }

  wall.addEventListener("mousemove", cursorB);
  wall.addEventListener("mouseleave", cursorBhide);

  function cursorB(e) {
  mouseCursor2.style.display = "block"
  mouseCursor2.style.top = e.pageY + "px";
  mouseCursor2.style.left = e.pageX + "px";
  mouseCursor2.style.transform = "translate(-50%,-50%)"
  }

  function cursorBhide(e) {
  mouseCursor2.style.display = "none"
  }





}