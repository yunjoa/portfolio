



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

          let projectName,projectCon='';

          data.first-project.forEach(function(){
            console.log(data.first-project)

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



    

})
