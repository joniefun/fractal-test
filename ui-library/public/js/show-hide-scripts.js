$(function() {
    $('.collapsible__item').click( function() {
        $(this).addClass('collapsible__item--open');
        $(this).children("p").slideToggle();
    });
});