$('#banner-part').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: $('.arrow-prev'),
    nextArrow: $('.arrow-next'),


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
function pre() {
    setTimeout(function () {
        $('#preloader').fadeOut();
        // $('#loader').fadeOut('slow');
    }, 4000);
}

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