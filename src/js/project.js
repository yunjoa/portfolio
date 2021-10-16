
window.onload = function(){


  // 스와이퍼
  console.log('hello, kkakkung')


  var swiper = new Swiper(".mySwiper", {
    direction: "vertical",
    speed:300,
    mousewheel:{
      thresholdTime:300
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    centeredSlides:true,
    slidesPerView: 'auto',
    spaceBetween: 50
  });



  // 스크롤 컬러 체인지
  swiper.on('slideChange', function () {
    switch (this.activeIndex) {
      case 0 : $(".background").css({"background":"url(../img/tt4.png) center top no-repeat OldLace", "background-size": "cover"});
      $(".txt").css({"color":"#355351"});         
      $(".swiper-pagination-bullet-active").css({"background":"#355351"});         
      $(".title-media720").css({"color":"#355351"});         
      break;
      case 1 : $(".background").css({"background":"url(../img/tt4.png) center top no-repeat #aba5a1", "background-size": "cover"}); 				          
      $(".txt").css({"color":"#5b3220"});				          
      $(".swiper-pagination-bullet-active").css({"background":"#5b3220"});         
      $(".title-media720").css({"color":"#5b3220"});         
      break;
      case 2 : $(".background").css({"background":"url(../img/tt4.png) center top no-repeat blanchedalmond", "background-size": "cover"}); 				          
      $(".txt").css({"color":"gray"});				          
      $(".swiper-pagination-bullet-active").css({"background":"gray"});         
      $(".title-media720").css({"color":"gray"});         
      break;
      case 3 : $(".background").css({"background":"url(../img/tt4.png) center top no-repeat beige", "background-size": "cover"}); 				          
      $(".txt").css({"color":"black"});				          
      $(".swiper-pagination-bullet-active").css({"background":"black"});         
      $(".title-media720").css({"color":"black"});         
      break; 
    }
  });
  




  // 페이지네이션에 텍스트 추가
  $("<span>WOOAMI 브랜드 리뉴얼</span>").appendTo(".swiper-pagination-bullet:nth-of-type(1)");

  $("<span>LOCK N LOCK 클론 코딩</span>").appendTo(".swiper-pagination-bullet:nth-of-type(2)");

  $("<span>REACT 작업물</span>").appendTo(".swiper-pagination-bullet:nth-of-type(3)");

  $("<span>SNS INSTAGRAM 클론 코딩</span>").appendTo(".swiper-pagination-bullet:nth-of-type(4)");

  $("<span>다번째 작업</span>").appendTo(".swiper-pagination-bullet:nth-of-type(5)");





  //페이지네이션 호버
  $('.swiper-pagination').mouseenter(function(){
    $('.swiper-slide').css(
      {'transform':'scale(80%)',
      'transform':'translateX(-20%)'})
    $('.background2').css("display" ,"block");
    $('.txt').css("display","none");
    $('.swiper-pagination-bullet span').css("display","block");
    $('.swiper-pagination').css("width","200px");
    $('.swiper-pagination-bullet').css("background","white")
  })



  $('.swiper-pagination').mouseleave(function(){
    $('.swiper-slide').css(
      {'transform':'scale(100%)',
      'transform':'translateX(0%)'})
    $('.background2').css("display" ,"none");
    $('.txt').css("display","block");
    $('.swiper-pagination-bullet span').css("display","none");
    $('.swiper-pagination').css("width","45px");
    $('.swiper-pagination-bullet').css("background","rgba(0,0,0,0.8");
    $('.swiper-pagination-bullet-active').css("background","gray")
  })



    // 커서 
    let mouseCursor0 = document.querySelector(".cur0");
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
    console.log('upload1')


};





