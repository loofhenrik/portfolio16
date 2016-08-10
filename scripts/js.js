var windowWidth = window.innerWidth;
console.log(windowWidth);


//-------------------------- SMOOTH SCROLL --------------------------
$(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top-150
                }, 1000);
                return false;
            }
        }
    });
});

//-------------------------------- HEADER SHADOW ON MOBILE DEVICE -----------------------------
if(windowWidth <= 415) {
    window.onscroll = function () {
        var y = document.body.scrollTop;

        $('document').ready(function () {
            var contentTop = document.getElementsByClassName("skills");
            contentTop = $(contentTop).offset().top;

            if(y > contentTop-100) {
                console.log("scrolly");
                $('header').addClass('header_shadow');
            }
            else {
                $('header').removeClass('header_shadow');

            }
        });
    };
}

//------------------------------ TOGGLE TEXT ON MOBILE DEVICE -------------------------

if(windowWidth <= 736) {
    $('.toggle_text').click(function () {
        console.log("Toggleclicked");
        $(this).parent().children('.img_color').slideToggle(500);
        $(this).children('.toggle_show').toggle(500);
        $(this).children('.toggle_hide').toggle(500);

    });
}
//------------------------------ SHOW CREDIT --------------------------------

$('.credit_icon').click(function () {
    $('.credit_content').slideToggle(500);
});
