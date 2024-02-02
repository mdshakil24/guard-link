$(document).ready(function(){

    $(".all-p-humber").click(function () {
        $(this).toggleClass("open");
    });
    $(".mobile-menu-icon").click(function () {
        $('.gl-header-menu>ul').slideToggle();
    });


    $(".gl-unlocking-benefits-slider-content").owlCarousel({
        loop: true,
        dots: false,
        margin: 20,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            576: {
                items: 2,
            },
            768: {
                items: 2.5,
            },
            992: {
                items: 3.5,
            },
            1200: {
                items: 4.3,
            }
        }
    });
      
})
