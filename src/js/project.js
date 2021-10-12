$(document).ready(function(){


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
    spaceBetween: 50,

  });



  swiper.on('slideChange', function () {
    switch (this.activeIndex) {
      case 0 : $(".background").css({"background":"url(../img/tt4.png) center top no-repeat OldLace", "background-size": "cover"}); 				          
      break;
      case 1 : $(".background").css({"background":"url(../img/tt4.png) center top no-repeat cornsilk", "background-size": "cover"}); 				          
      break;
      case 2 : $(".background").css({"background":"url(../img/tt4.png) center top no-repeat blanchedalmond", "background-size": "cover"}); 				          
      break;
      case 3 : $(".background").css({"background":"url(../img/tt4.png) center top no-repeat beige", "background-size": "cover"}); 				          
      break; 
      case 4 : $(".background").css({"background":"url(../img/tt4.png) center top no-repeat Linen", "background-size": "cover"}); 				          
      break;
    }
  });
  




  // 페이지네이션 추가
  $("<span>WOOAMI 브랜드 리뉴얼</span>").appendTo(".swiper-pagination-bullet:nth-of-type(1)");

  $("<span>새로 추가된 아이템</span>").appendTo(".swiper-pagination-bullet:nth-of-type(2)");

  $("<span>세번째 작업</span>").appendTo(".swiper-pagination-bullet:nth-of-type(3)");

  $("<span>네번째 작업</span>").appendTo(".swiper-pagination-bullet:nth-of-type(4)");

  $("<span>다번째 작업</span>").appendTo(".swiper-pagination-bullet:nth-of-type(5)");






  // $('.swiper-slide').css({'transform':'rotate('+test0+'deg)'})
  
  $('.swiper-pagination').mouseenter(function(){
    $('.swiper-slide').css(
      {'transform':'scale(80%)',
      'transform':'translateX(-20%)'})
    // $('.img-swiper').css({'transform':'scale(80%)'})
    $('.background2').css("display" ,"block");
    $('.title').css("display","none");
    $('.swiper-pagination-bullet span').css("display","block");
    $('.swiper-pagination').css("width","200px");
    $('.swiper-pagination-bullet').css("background","white")
  })



  $('.swiper-pagination').mouseleave(function(){
    $('.swiper-slide').css(
      {'transform':'scale(100%)',
      'transform':'translateX(0%)'})
    // $('.img-swiper').css({'transform':'scale(80%)'})
    $('.background2').css("display" ,"none");
    $('.title').css("display","block");
    $('.swiper-pagination-bullet span').css("display","none");
    $('.swiper-pagination').css("width","45px");
    $('.swiper-pagination-bullet').css("background","rgba(0,0,0,0.8");
    $('.swiper-pagination-bullet-active').css("background","black")

  })

  

})
