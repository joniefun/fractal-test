$(function() {
    $('.collapsible__item').click( function() {
        $(this).addClass('collapsible__item--open');
        $(this).children("p").slideToggle();
    });
});

/* ADDS PLAY VIDEO CLASS TO PLAY BUTTON */

$( document ).ready(function() {
    $('.swiper-pagination-bullet:first').addClass('play-video');
});

$(function() {
    $('.play-video').click( function() {
        var video = $("#product-video")[0];
        if (video.paused) {
            video.play();
        }
    });
});