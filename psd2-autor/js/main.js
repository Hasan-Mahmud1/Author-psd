$(document).ready(function(){

    // jQuery methods go here...

    $('.owl-carousel').owlCarousel({
        loop:true,
        items:1,
        autoplay:true,
       
        smartSpeed:500,
        nav:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1000:{
                items:1
            }
        }
    })

}); 