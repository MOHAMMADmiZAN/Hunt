$('#banner-part').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<i class="fas fa-arrow-left prev"></i>',
    nextArrow: '<i class="fas fa-arrow-right next"></i>',

});
// venobox//
$(document).ready(function () {
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
// preloader-start//
// let preloader = document.getElementById('preloader');
//
// function pre() {
//     preloader.style.display = 'none';
// }
// function pre() {
//     setTimeout(function () {
//         $('#preloader').fadeOut();
//         // $('#loader').fadeOut('slow');
//     }, 4000);
// }

// preloader-end //
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
    asNavFor: '.right_slide',


});
$('.right_slide').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    vertical: true,
    centerMode: true,
    centerPadding: 0,
    asNavFor: '.left_slide',
    arrows: false,


});
///counter-up//
$('.up').counterUp({
    delay: 10,
    time: 1000
});
//stiky-header//
$(document).ready(
    $(window).scroll(
        function () {
            if ($(window).scrollTop() > 300) {
                $('.st-menu').addClass('stiky')
            } else {
                $('.st-menu').removeClass('stiky')
            }

        }
    )
);
// animation scroll js
var html_body = $('html, body');
$('.nav-item a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 80
            }, 1500);
            return false;
        }
    }
});

$(document).ready(
    //back to top fadetoogle//
    $(window).scroll(
        function () {
            if ($(window).scrollTop() > 100) {
                $('.back-top').fadeIn();


            } else {
                $('.back-top').fadeOut();
            }


        }
    )
);
$(document).ready(
    //back to top effect//
    $('.back-top').click(
        function () {
            $('html,body').animate({scrollTop: 0}, 1500);

        }
    )
);

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
});


scroolpy
$('body').scrollspy({
    target: '.navbar',
    offset: 100
})

// offsetValue = 40;
// $('body').data().scrollspy.options.offset = offsetValue;
// // force scrollspy to recalculate the offsets to your targets
// $('body').data().scrollspy.process();
// var offset = 80;
// //
// $('.navbar li a').click(function(event) {
//     event.preventDefault();
//     $($(this).attr('href'))[0].scrollIntoView();
//     scrollBy(0, -offset);
// });
