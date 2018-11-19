

$(function(){
   var slideImageWidth = $('.slider .slide-images').outerWidth();
    
    var slideScroll = 0;
    
    $('.slide-show .slide-img').css('width',slideImageWidth); 
    
    
    
    /* anchor next*/
    $('.slider .next').click(function(){
        if(slideScroll > -(slideImageWidth * 13)){
            $('.slider .slide-show').animate({
                left: slideScroll -slideImageWidth
            },"fast");
        slideScroll -= slideImageWidth;
        }
        else{
             $('.slider .slide-show').animate({
                left: '0px'
            },"fast");
            slideScroll = 0;
        }
        
    });
    /* anchor prev */
    $('.slider .prev').click(function(){
        if(slideScroll < 0){
           $('.slider .slide-show').animate({
                left: (slideScroll + slideImageWidth)
            },"fast");
        slideScroll += slideImageWidth; 
        }
        else{
            $('.slider .slide-show').animate({
                left: -(slideImageWidth * 13)
            },"fast");
        slideScroll = -(slideImageWidth * 13); 
        }
    });
    
    /*slide anchors*/
    $('.anchors .anchor1').click(function(){
         $('.slider .slide-show').animate({
                left: 0
            },"fast");
        slideScroll = 0;
    });
    $('.anchors .anchor2').click(function(){
         $('.slider .slide-show').animate({
                left: -slideImageWidth
            },"fast");
        slideScroll = -slideImageWidth;
    });
    $('.anchors .anchor3').click(function(){
         $('.slider .slide-show').animate({
                left: - (slideImageWidth * 2)
            },"fast");
        slideScroll = -(slideImageWidth * 2);
    });
    $('.anchors .anchor4').click(function(){
         $('.slider .slide-show').animate({
                left: - (slideImageWidth * 3)
            },"fast");
        slideScroll = -(slideImageWidth * 3);
    });
    $('.anchors .anchor5').click(function(){
         $('.slider .slide-show').animate({
                left: -(slideImageWidth * 4)            },"fast");
        slideScroll = -(slideImageWidth * 4);
    });
    $('.anchors .anchor6').click(function(){
         $('.slider .slide-show').animate({
                left: -(slideImageWidth * 5)
            },"fast");
        slideScroll = -(slideImageWidth * 5);
    });
    $('.anchors .anchor7').click(function(){
         $('.slider .slide-show').animate({
                left: -(slideImageWidth * 6)
            },"fast");
        slideScroll = -(slideImageWidth * 6);
    });
    $('.anchors .anchor8').click(function(){
         $('.slider .slide-show').animate({
                left: -(slideImageWidth * 7)
            },"fast");
        slideScroll = -(slideImageWidth * 7);
    });
    $('.anchors .anchor9').click(function(){
         $('.slider .slide-show').animate({
                left: -(slideImageWidth * 8)
            },"fast");
        slideScroll = -(slideImageWidth * 8);
    });
    $('.anchors .anchor10').click(function(){
         $('.slider .slide-show').animate({
                left: -(slideImageWidth * 9)
            },"fast");
        slideScroll = -(slideImageWidth * 9);
    });
    $('.anchors .anchor11').click(function(){
         $('.slider .slide-show').animate({
                left: -(slideImageWidth * 10)
            },"fast");
        slideScroll = -(slideImageWidth * 10);
    });
    $('.anchors .anchor12').click(function(){
         $('.slider .slide-show').animate({
                left: -(slideImageWidth * 11)
            },"fast");
        slideScroll = -(slideImageWidth * 11);
    });
    $('.anchors .anchor13').click(function(){
         $('.slider .slide-show').animate({
                left: -(slideImageWidth * 12)
            },"fast");
        slideScroll = -(slideImageWidth * 12);
    });
    $('.anchors .anchor14').click(function(){
         $('.slider .slide-show').animate({
                left: -(slideImageWidth * 13)
            },"fast");
        slideScroll = -(slideImageWidth * 13);
    });
    
    /*accordion*/
    $('.accordion .head-body:first').css("display","block");
    $('.accordion .h3').click(function(){
       
        $('.accordion .h3').removeClass('active');
        $(this).addClass('active');
        $(this).next().slideToggle(500);
       $('.accordion .head-body').not($(this).next()).slideUp(500);
         
    });
});

   function getYear(){
       var d = new Date();
       return d.getFullYear();
   }
document.getElementById('current-year').innerHTML = getYear();
    
