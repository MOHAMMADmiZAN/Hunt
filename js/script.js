$('#banner-part').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<i class="fas fa-arrow-left prev"></i>',
    nextArrow: '<i class="fas fa-arrow-right next"></i>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 3000,

            }
        }

    ]

});
// venobox//
$(document).ready(() => {
    $('.venobox').venobox(
        {
            spinner: 'wandering-cubes',
            framewidth: '800px',
            frameheight: '800px',
            border: '10px',
            share: [],
            infinigall: true,
            closeColor: '#fff',
            numeratio: true,
        }
    );
});
// service Part Slider //
$('.service-slider').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    vertical: true,
    centerMode: true,
    centerPadding: 0,
    prevArrow: '<i class="fa fa-angle-up prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fas fa-angle-down next"></i>',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
                arrows: true,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true,


            }
        }

    ]


});
// Tm_slide_left//
$('.left_slide').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    vertical: true,
    centerMode: true,
    centerPadding: 0,
    prevArrow: '<i class="fa fa-angle-up prev" aria-hidden="true"></i>',
    nextArrow: '<i class="fas fa-angle-down next"></i>',
    asNavFor: '.tm_text',
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 4000
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 4000
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 4000,


            }
        }

    ]


});
$('.tm_text').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: false,
    // centerMode: true,
    // centerPadding: 0,
    asNavFor: '.left_slide',
    arrows: false,
    // fade: true,
    responsive: [
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // arrows: true,


            }
        }

    ]


});
///counter-up//
$('.up').counterUp({
    delay: 10,
    time: 1000
});
$('.th-slide').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
    responsive: [
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 992,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: false,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 576,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                // arrows: true,


            }
        }

    ]

});


/// variables////
const win = $(window);
const html_body = $('html, body');
const stk = $('.st-menu');
const b2b = $('.back-top');
const c_stk = 'stiky';
const bdy = $('body');


//stiky-header//
win.scroll(() => win.scrollTop() > 300 ? stk.addClass(c_stk) : stk.removeClass(c_stk));
// scroolpy
bdy.scrollspy({
    target: '.navbar',
    offset: 100
});

// animation scroll js
$('.nav-item a').on('click', function () {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
        let target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 88
            }, 1500);
            return false;
        }
    }
});

//back to top fadetoogle//
win.scroll(() => win.scrollTop() > 100 ? b2b.fadeIn() : b2b.fadeOut());
//back to top effect//
b2b.click(() => html_body.animate({scrollTop: 0}, 1500));


// Smooth Scrolling //
// $('a[href*="#"]').on('click', function (e) {
//     "use strict";
//     $('html,body').animate({
//         scrollTop: $($(this).attr('href')).offset().top - 88
//     }, 1500);
//     e.preventDefault();
// });

// offsetValue = 40;
// $('body').data().scrollspy.options.offset = offsetValue;
// // force scrollspy to recalculate the offsets to your targets
// $('body').data().scrollspy.process();


// var offset = 80;
// $('.navbar li a').click(function(event) {
//     event.preventDefault();
//     $($(this).attr('href'))[0].scrollIntoView();
//     scrollBy(0, -offset);
// });
// $(window).on('activate.bs.scrollspy', function (e,obj) {
//     console.log("This event is firing...",e);
//
//
//
// });

//preloader//
win.on("load", () => $("#preloader").fadeOut('800'));
