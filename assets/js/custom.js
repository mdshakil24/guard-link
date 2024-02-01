$(document).ready(function(){

    $(".gl-unlocking-benefits-slider-content").owlCarousel({
        loop: true,
        dots: false,
        margin: 20,
        nav: true,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            451: {
                items: 2,
            },
            576: {
                items: 3,
            },
            991: {
                items: 4.6,
            }
        }
    });
      
})
