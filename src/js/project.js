
$(document).ready(function(){

  // 스와이퍼

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




  // swiper.on('slideChange', function () {
  //   switch (this.activeIndex) {
  //     case 0 : $(".background").css({"background":"url(../img/tt4.png) center top no-repeat OldLace", "background-size": "cover"});
  //     $(".txt").css({"color":"#355351"});         
  //     $(".swiper-pagination-bullet-active").css({"background":"#355351"});         
  //     $(".title-media720").css({"color":"#355351"});         
  //     break;
  //     case 1 : $(".background").css({"background":"url(../img/tt4.png) center top no-repeat #aba5a1", "background-size": "cover"}); 				          
  //     $(".txt").css({"color":"#5b3220"});				          
  //     $(".swiper-pagination-bullet-active").css({"background":"#5b3220"});         
  //     $(".title-media720").css({"color":"#5b3220"});         
  //     break;
  //     case 2 : $(".background").css({"background":"url(../img/tt4.png) center top no-repeat blanchedalmond", "background-size": "cover"}); 				          
  //     $(".txt").css({"color":"gray"});				          
  //     $(".swiper-pagination-bullet-active").css({"background":"gray"});         
  //     $(".title-media720").css({"color":"gray"});         
  //     break;
  //     case 3 : $(".background").css({"background":"url(../img/tt4.png) center top no-repeat beige", "background-size": "cover"}); 				          
  //     $(".txt").css({"color":"black"});				          
  //     $(".swiper-pagination-bullet-active").css({"background":"black"});         
  //     $(".title-media720").css({"color":"black"});         
  //     break; 
  //   }
  // });
  




  // 페이지네이션 추가
  // $("<span>WOOAMI 브랜드 리뉴얼</span>").appendTo(".swiper-pagination-bullet:nth-of-type(1)");

  // $("<span>LOCK N LOCK 클론 코딩</span>").appendTo(".swiper-pagination-bullet:nth-of-type(2)");

  // $("<span>REACT 작업물</span>").appendTo(".swiper-pagination-bullet:nth-of-type(3)");

  // $("<span>SNS INSTAGRAM 클론 코딩</span>").appendTo(".swiper-pagination-bullet:nth-of-type(4)");

  // $("<span>다번째 작업</span>").appendTo(".swiper-pagination-bullet:nth-of-type(5)");






  // $('.swiper-slide').css({'transform':'rotate('+test0+'deg)'})
  
  // $('.swiper-pagination').mouseenter(function(){
  //   $('.swiper-slide').css(
  //     {'transform':'scale(80%)',
  //     'transform':'translateX(-20%)'})
  //   $('.background2').css("display" ,"block");
  //   $('.txt').css("display","none");
  //   $('.swiper-pagination-bullet span').css("display","block");
  //   $('.swiper-pagination').css("width","200px");
  //   $('.swiper-pagination-bullet').css("background","white")
  // })



  // $('.swiper-pagination').mouseleave(function(){
  //   $('.swiper-slide').css(
  //     {'transform':'scale(100%)',
  //     'transform':'translateX(0%)'})
  //   $('.background2').css("display" ,"none");
  //   $('.txt').css("display","block");
  //   $('.swiper-pagination-bullet span').css("display","none");
  //   $('.swiper-pagination').css("width","45px");
  //   $('.swiper-pagination-bullet').css("background","rgba(0,0,0,0.8");
  //   $('.swiper-pagination-bullet-active').css("background","gray")

  // })


  // 반응형할 경우
  

})



// 보류
// $(function(){

//   $.ajax({
//       url:'src/data/project.json',
//       success:function(data){

//         let title,summary=''; idx=0;

//         data.list.forEach(function(h){
          
//           title = `${h.title}`
//           summary = `${h.summary}`
          
//           console.log(data.list[0])
          
//           $(".title").text(title);
//           $(".summary").text(summary);
//         })
//         title = data.list[idx].title
//         summary = data.list[idx].summary
        

//       },
//       error:function(e){
//           console.log(e.status);
//           console.log(e.error);
//           console.log(e.responseText);
          
//       }

//   })
// });

