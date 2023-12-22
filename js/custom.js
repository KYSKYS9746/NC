$(function(){

  $('.main_visual .visual_slide').on('init afterChange', function(){
    const current = $('.main_visual .visual_slide .slick-current');
    current.addClass('on').siblings().removeClass('on');
});

    $('.main_visual .visual_slide').slick({
        arrows: false,
        autoplay: true,
        speed: 2000,
        dots: true,
        pauseOnHover: true,
        fade: true,
    });

    


    var swiper = new Swiper('.main_slide', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: false,
        slidesPerView: 3,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows : true,
        },
        pagination: {
          el: '.swiper-pagination',
        },
      });


      $('.MainChannel .channel_slide').slick({
        arrows: false,
        autoplay: true,
        pauseOnHover: true,
        
    });
})

