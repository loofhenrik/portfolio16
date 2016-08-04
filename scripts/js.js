var windowWidth = window.innerWidth;
console.log(windowWidth);

if(windowWidth >= 416) {
    $('.credit_icon').click(function () {
        $('.credit_content').slideToggle(500);
    });
}

if(windowWidth <= 415) {

}

$('.toggle_text').click(function () {
    $(this).parent().children('.img_color').slideToggle(500);
    $(this).children('.toggle_show').toggle(500);
    $(this).children('.toggle_hide').toggle(500);

});


window.onscroll = function () {
    var y = document.body.scrollTop;

    $('document').ready(function () {
        var contentTop = document.getElementsByClassName("skills");
        contentTop = $(contentTop).offset().top;

        if(y > contentTop-100) {
            $('header').addClass('header_shadow');
        }
        else {
            $('header').removeClass('header_shadow');

        }
    });
};