// window.onload = function(){
    
//     function offset(el) {
//         var rect = el.getBoundingClientRect()
//         let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//         return { top: rect.top + scrollTop }
//     }
    
//     // example use
//     var div = document.querySelector('.navbar');
//     var divOffset = offset(div);
//     if(!divOffset.top > 0){
//         // $(".navbar").removeClass("shadow bg-white")
//     }

// };
$(document).ready(function(){
    // $('.blog .item').css('min-height', ($('.blog .slick-slider').height())+'px');
    // $('a.calculate').parent('li').css('border', '1px solid rgba(0, 63, 126, 0.5)');
    $('.navArrows svg').click((e)=>{
       let index =  $(e.currentTarget).index();
       let quoteIndex = $('.quotes div.activequote').index();
       let total = $('.quote').length;
       $('.quotes div').removeClass('activequote');
       if(index > 0){
        //    console.log("total legth:"+total);
        //    console.log("current index"+quoteIndex);
if(quoteIndex < (total-1)){
    $('.quote').eq(quoteIndex+1).addClass('activequote');
}else{
    $('.quote').eq(0).addClass('activequote');
}    
       }else{
           if(quoteIndex > 0 ){
            $('.quote').eq(quoteIndex-1).addClass('activequote')
           }else{
            $('.quote').eq(total-1).addClass('activequote') 
           }
        
       }
       
    })

    $(window).scroll(function() {
        // console.log( window.pageYOffset);
    //     var scrollYpos = $(document).scrollTop();
        if (window.pageYOffset > 0) {
            $(".logo").css({
                'width': '120px'
            });
            // $(".navbar").addClass( "shadow bg-white" );

        } else {
            $(".logo").css({
                'width': '150px'
            });
            // $(".navbar").removeClass("shadow bg-white")
        }
    });
    $('a[href*="#"]:not([href="#"])').click(function(e) {
        
        
            let classcheck = e.currentTarget.parentElement;
            if(classcheck.classList.contains('active')){
                
            }else{
                $('.nav-item').removeClass('active');
                if($(classcheck).find('a.calculate').length !== 0){
                    $('a.calculate').parent('li').css('border', '1px solid rgba(0, 63, 126, 1)');
                }else{
                    $('a.calculate').parent('li').css('border', '1px solid rgba(0, 63, 126, 0.5)');
                }
                classcheck.classList.add('active');
                
            }
            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                    $('html,body').animate({
                        scrollTop: $(target).offset().top-$('nav').height()
                   }, 1000);
                }else{
                 $('html,body').animate({
                     scrollTop: target.offset().top
                }, 1000);
            
                return false;
            
            }
        });
        });


    