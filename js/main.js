/* pop_up */
$(document).ready(function(){
    function setCookie(name, value, expiredays){
        var todayDate = new Date();
        todayDate.setDate(todayDate.getDate() + expiredays);
        document.cookie = name + '=' + escape( value ) + '; path=/; expires=' + todayDate.toGMTString() + ';';
    }
    
    var popup = '.pop_up';
    var chkbox = '#not_today';
    
    $(popup).find('a').click(function(e){
        e.preventDefault();
        var chk = $(chkbox).prop('checked');   
        if(chk){ 
            setCookie('exCookie','done',1); 
        }
        
        $(popup).stop().fadeOut(0);
        $('body').css('overflow', 'visible');
        $('.body_bg').removeClass('active');
    });
    
    var cookieData = document.cookie;
    
    if(cookieData.indexOf('exCookie=done') < 0){
        $(popup).fadeIn(0);
        $('body').css('overflow', 'hidden');
        $('.body_bg').addClass('active');
    }else{
        $(popup).fadeOut(0);
        $('body').css('overflow', 'visible');
        $('.body_bg').removeClass('active');
    }
    
});

/* main */
$(window).load(function(){
    var swiper = new Swiper('main .swiper-container', {
          speed: 800,
          pagination: {
            el: '.swiper-pagination',
             clickable: true,
          },
          autoplay:{
              delay: 6000
          },
          on: {
              init: function(){
                  $('main img, main .text').addClass('active');
              },
              slideChange: function(){
                  $('main img, main .text').removeClass('active');
              },
              slideChangeTransitionEnd: function(){
                  $('main img, main .text').addClass('active');
              }
          },
        loop: true
        });

    
});

/* subtitle */
$(document).ready(function(){
    
        $(window).scroll(function(){
            var scrollTop = $(window).scrollTop();
            $('body > .section').each(function(){
                var thisTop = $(this).offset().top;
                if( scrollTop >= thisTop - 500){
                    $(this).find('h3').addClass('active'); 
                }
            });

            var videoTop = $('.videos').offset().top;
            if( scrollTop >= videoTop - 500){
                $('.videos .line01, .video03, .videos .line02 ').addClass('active');
            }

            var portTop = $('.portables').offset().top;
            if( scrollTop >= portTop - 500){
                $('.portables .line ').addClass('active');
            }

            var producTop = $('.products').offset().top;
            if( scrollTop >= producTop - 500){
                $('.products .line_bg ').addClass('active');
            }
            var proTop = $('.promotion').offset().top;
            if( scrollTop >= proTop - 500){
                $('.promotion h3 + p').addClass('active');
                $('.promotion a').addClass('active');
            }

            var boardTop = $('.board').offset().top;
            if( scrollTop >= boardTop - 500){
                $('.news ul, .awards_list ').addClass('active');
            }
            
        });
   

});

/* videos */
$(document).ready(function(){
    var swiper = new Swiper('.m_videos .swiper-container', {
        slidesPerView: 1.5,
        spaceBetween: 20,

        });
 
});

/* portables */
$(document).ready(function(){
    var swiper = new Swiper('.portables .swiper-container', {
      loop: true,
      slidesPerView: 'auto',
      centeredSlides: true,
      spaceBetween: 0,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      });

    
});

/* products */
$(document).ready(function(){
    var galleryThumbs = new Swiper('.products .large_img', {
        slidesPerView: 1,
        loop: true,
        allowTouchMove : false,
        freeMode: true,
        loopedSlides: 3,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        effect: 'flip'
    });
    var galleryTop = new Swiper('.products .thumbnail_img', {
        speed: 1000,
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
        spaceBetween: 0,
        slidesPerView: 'auto',
        loop: true,
        loopAdditionalSlides: 12,
        loopedSlides: 3, 
        thumbs: {
            swiper: galleryThumbs
        },
        autoplay: {
            delay: 5000
        }
    });
}); 

/* promotion */
$(document).ready(function(){
    var sectionHeight = $('.promotion .line01').height();
    var wWidth = window.innerWidth;

    if(wWidth > 1024){
        $('.promo04 a').height(sectionHeight);
    }
});

