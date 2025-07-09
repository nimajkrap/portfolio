// SKill
$(window).scroll(function () {
    const skillTop = $('#skill').offset().top;
    const scrollTop = $(window).scrollTop();
    const windowHeight = $(window).height();

    if (scrollTop + windowHeight > skillTop + 500) {
        $('.program').addClass('program-ani');
        $('.program2').addClass('program-ani2');
        $('.program3').addClass('program-ani3');
        $('.program4').addClass('program-ani4');
        $('.program5').addClass('program-ani5');
    } else {
        $('.program').removeClass('program-ani');
        $('.program2').removeClass('program-ani2');
        $('.program3').removeClass('program-ani3');
        $('.program4').removeClass('program-ani4');
        $('.program5').removeClass('program-ani5');
    }
});


// mobile nav
$(document).ready(function () {
    $('.dropbtn').click(function () {
        $('.menu-nav').fadeToggle(200);
    });

    $('.menu-nav a').click(function () {
        $('.menu-nav').fadeOut(200);
    });

    $(document).click(function (e) {
        if (!$(e.target).closest('.dropdown').length) {
            $('.menu-nav').fadeOut(200);
        }
    });
});


// video popup
$(document).ready(function () {
    $('.project-content .supportersvideo').click(function (e) {
        e.preventDefault();
        $('.video-popup').fadeIn(200);
    });

    $('.close-btn').click(function () {
        $('.video-popup').fadeOut(200);
        $('.video-popup video').get(0).pause(); // 영상 멈추기
    });

    $('.video-popup').click(function (e) {
        if ($(e.target).is('.video-popup')) {
            $(this).fadeOut(200);
            $('.video-popup video').get(0).pause();
        }
    });
});


// guide scroll
$(".projecttop").on("click", function () {
    $('html, body').animate({
        scrollTop: 0
    }, 400)
    return false;
});