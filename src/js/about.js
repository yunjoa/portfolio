
window.onload = function(){

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
    mouseCursor0.style.display = "block"
    mouseCursor0.style.top = (e.pageY-2) + "px";
    mouseCursor0.style.left = (e.pageX-2) + "px";
    }
  
  // 스크롤 이벤트
  AOS.init();

  // tmi 카드 
  var swiper = new Swiper(".mySwiper", {
        effect: "cards",
        grabCursor: true,
      });
        
  
  // kakao QR코드 모달
  const kakao = document.getElementById("kakao")
  const modal = document.querySelector(".modal")
  const overlay = document.querySelector(".modal_overlay")
  const close_btn = document.querySelector(".btn_close")

  const openModal = () => {
    modal.classList.add("show");
  }

  const closeModal = () => {
    modal.classList.remove("show");
  }

  kakao.addEventListener("click", openModal);
  overlay.addEventListener("click", closeModal);
  close_btn.addEventListener("click", closeModal);

  
  // 아코디언

  
    $(".accordQuestion").on('click',function(){
      $(this).next(".accordAnswer").slideToggle("fast");
      if($(this).find(".faqArrow").hasClass('active')){
        $(this).find(".faqArrow").removeClass('active');
      } else{
        $(this).find(".faqArrow").addClass('active');
      }
    });
  
  
  
  // TO TOP 버튼
  $( window ).scroll( function() {
    if ( $( this ).scrollTop() > 200 ) {
      $( '.top' ).fadeIn();
    } else {
      $( '.top' ).fadeOut();
    }
  });

  $( '.top' ).click( function() {
    $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
    return false;
  } );



}