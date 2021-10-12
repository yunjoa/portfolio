



  $(document).ready(function(){
    var swiper = new Swiper(".mySwiper", {
      slidesPerView: 3,
      spaceBetween: 30,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    })
  });

  

  $(function(){
    //start 

    $.ajax({
        url:'src/data/project.json',
        success:function(data){
          console.log('hi')

          let projectName,projectCon,title='';

          data.firstProject.forEach(function(h){
            console.log(data.firstProject)
            console.log(h.projectName)

            projectName = `${h.projectName}`
            title = `${h.title}`
            client = `${h.client}`
            category = `${h.category}`
            date = `${h.date}`
            service = `${h.service}`
            brief = `${h.brief}`
            concept = `${h.concept}`
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
            

            console.log(h.point1_pic1)
            console.log(h.first_thumb)
            $(".tit2").text(projectName);
            $(".tit3").text(title);
            $(".client").text(client);
            $(".client").text(client);
            $(".category").text(category);
            $(".date").text(date);
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
            


          })





          //   let place, address,showroomInfo= '', idx=0;
            
          //   data.showroom_table.forEach(function(h){
          //       showroomInfo +=`<ul><li class="the_place_store">${h.place}</li>
          //       <li class="the_place_address">${h.address}</li>
          //       <li class="arrow"><img src="img/green_arrow.png" alt=""></li></ul>`
                
          //   })
          //   place = data.showroom_table[idx].place;
          //   address = data.showroom_table[idx].address;
          //   maptimestamp = data.showroom_table[idx].maptimestamp;
          //   mapkey = data.showroom_table[idx].mapkey;
          //   $('.the_place').html(showroomInfo)



                        
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

    var nextpage;
    $("footer").hover(function() {
        if (!nextpage) {
            nextpage = window.setTimeout(function() {
                nextpage = null;
                window.location.href="project-detail2.html"
          }, 2500);
        }
    },
    function () {
        if (nextpage) {
            window.clearTimeout(nextpage);g
            nextpage = null;
        }
        else {
          // $("#SeeAllEvents").slideUp('slow');
        }
    });


})
