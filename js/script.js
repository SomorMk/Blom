$(function () {
    'use strict'

    // About Slidre Start here
    $('.about_slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 1500,
        responsive: [{
                breakpoint: 991.98,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false,
                }
            },
            {
                breakpoint: 767.98,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    arrows:false,
                    autoplay:true,
                }
            },
            {
                breakpoint: 575.98,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    dots: false,
                    autoplay: true,
                }
            }
        ]
    });

    // Menu fixing js start here
    // var navOff = $('#menu').offset().top;
    
    // $(window).scroll(function () {

    //     var scrolling = $(this).scrollTop();

    //     if (scrolling > navOff) {
    //         $('#menu').addClass('menu_fix');
    //     } else {
    //         $('#menu').removeClass('menu_fix');
    //     }

    // });



});