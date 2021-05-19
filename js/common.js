$(window).load(function(){
    $('.loading').addClass('active');
    setTimeout(function(){
        $('.loading').css({"display":"none"});
    }, 600);
})

$(document).ready(function(){
    $(window).scroll(function(){
        var top = $(window).scrollTop();
        
        if(top > 0){
            $('header').addClass('active');
        }else{
            $('header').removeClass('active');
        }
    });

    function desktopGnb(){
        $('.main_nav').off('click');
        
        $('.main_nav').mouseenter(function(){
            $(this).parent().addClass('active');
            $(this).next().stop().slideDown(400);
        });
        $('.main_nav').parent().mouseleave(function(){
            $(this).removeClass('active');
            $(this).find('.sub_nav').stop().slideUp(100);
        });
    }

    function panelGnb(){
        $('.main_nav').off('mouseenter');
        $('.main_nav').parent().off('mouseleave'); 

        $('.gnb, .gnb > ul > li').removeClass('active');
        $('.panel_icon a').removeClass('active');
        $('.sub_nav').slideUp(0);
        
        $('.panel_icon a').off('click');
        
        $('.panel_icon a').click(function(){
            $(this).toggleClass('active');
            $('.gnb').toggleClass('active');
            
            var has = $(this).hasClass('active'); 
            
            if(!has){ 
                $('body, html').removeClass('active');
                $('.gnb .sub_nav').slideUp(0); 
                $('.body_bg').removeClass('active');
            }else{ 
                $('body, html').addClass('active');
                $('.body_bg').addClass('active');
            }
            
        });
        
        $('.gnb .main_nav').off('click'); 

        $('.gnb .main_nav').click(function(){
            var is = $(this).next().is(':hidden');
            if(is){
                $('.gnb .sub_nav').stop().slideUp('fast');
                $(this).next().stop().slideDown('fast');
            }else{
                $(this).next().stop().slideUp('fast');
            }
        });
         
    }

    $(window).resize(function(){
        var w = window.innerWidth; 
        if(w >= 1280){
            desktopGnb();
        }else{
            panelGnb();
        }
    }); 

    $(window).trigger('resize');

});   