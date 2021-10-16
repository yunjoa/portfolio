



  $(document).ready(function(){


    console.log('hello, kkakkung')

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


    // 슬라이드
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    })

    //scroll event
    AOS.init();

  });
  
    //json연결
  $(function(){

    $.ajax({
        url:'src/data/project.json',
        success:function(data){

          let projectName,projectCon,title='';

          data.firstProject.forEach(function(h){
            console.log(data.firstProject)
            console.log(h.projectName)

            headTitle = `${h.headTitle}`
            projectName = `${h.projectName}`
            title = `${h.title}`
            client = `${h.client}`
            category = `${h.category}`
            date = `${h.date}`
            service = `${h.service}`
            siteview = `${h.siteview}`
            brief = `${h.brief}`
            concept = `${h.concept}`
            btn_link = `${h.btn_link}`
            first_thumb = `${h.first_thumb}`
            second_thumb = `${h.second_thumb}`
            point1_tit = `${h.point1_tit}`
            point1_con = `${h.point1_con}`
            point1_pics1 = `${h.point1_pics1}`
            point1_pics2 = `${h.point1_pics2}`
            point2_tit = `${h.point2_tit}`
            point2_con = `${h.point2_con}`
            point2_pic = `${h.point2_pic}`
            point3_tit = `${h.point3_tit}`
            point3_con = `${h.point3_con}`
            point3_pic = `${h.point3_pic}`
            point4_tit = `${h.point4_tit}`
            point4_con = `${h.point4_con}`
            point4_pics1 = `${h.point4_pics1}`
            point4_pics2 = `${h.point4_pics2}`
            nextPage_img = `${h.nextPage_img}`
            nextPage_tit = `${h.nextPage_tit}`
            nextPage_link = `${h.nextPage_link}`
            nextPage_link_href = "location.href='"+nextPage_link+"'"
            siteview_link = "location.href='"+siteview+"'"
            


            $(title).text(headTitle);
            $(".tit2").text(projectName);
            $(".tit3").text(title);
            $(".client").text(client);
            $(".client").text(client);
            $(".category").text(category);
            $(".date").text(date);
            $(".siteview").attr("onclick", siteview_link);
            $(".service").text(service);
            $(".h5_conten").text(brief);
            $(".h5_concept").text(concept);
            $(".firThumbImg").attr("src", first_thumb);
            $(".img_2 img").attr("src", second_thumb);
            
            $(".point1 h5").text(point1_tit);
            $(".point1 .h5_con").text(point1_con);
            $(".swiper-slide:nth-of-type(1) img").attr("src", point1_pics1);
            $(".swiper-slide:nth-of-type(2) img").attr("src", point1_pics2);
            $(".point2 h5").text(point2_tit);
            $(".point2 .h5_con").text(point2_con);
            $(".point2_img img").attr("src", point2_pic);
            $(".point3 h5").text(point3_tit);
            $(".point3 .h5_con").text(point3_con);
            $(".point3_img img").attr("src", point3_pic);
            $(".point4 h5").text(point4_tit);
            $(".point4 .h5_con").text(point4_con);
            
            $(".point4_img:nth-of-type(1) img").attr("src", point4_pics1);
            $(".point4_img:nth-of-type(2) img").attr("src", point4_pics2);
            $("footer img").attr("src", nextPage_img);
            $(".next_tit").text(nextPage_tit);
            $(".next_tit").attr("onclick", nextPage_link_href);
          })
                
        },
        error:function(e){
            console.log(e.status);
            console.log(e.error);
            console.log(e.responseText);
        }
    })




    // var nextpage;
    // $("footer").hover(function() {
    //     if (!nextpage) {
    //         nextpage = window.setTimeout(function() {
    //             nextpage = null;
    //             window.location.href="project-detail2.html"
    //       }, 2500);
    //     }
    // });


    // 다음페이지 자동 전환
    var nextpage;
    $(".next_tit").hover(function() {
        if (!nextpage) {
            nextpage = window.setTimeout(function() {
                nextpage = null;
                window.location.href=nextPage_link
          }, 1200);
        }
    },
    function () {
        if (nextpage) {
            window.clearTimeout(nextpage);
            nextpage = null;
        }
        
    });




})
