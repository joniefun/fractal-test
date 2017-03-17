$(function() {
    $('.clr-select li').click( function() {
        var crtclr = $(this).attr("value");
        $(".clr-val").html(crtclr);
        $(this).siblings().removeClass('clr-select__clr-chip--active');
        $(this).addClass('clr-select__clr-chip--active');
    });
});

$(function() {
    $('.size-select li').click( function() {
        var crtsze = $(this).attr("value");
        $(".size-val").html(crtsze);
        $(this).siblings().removeClass('size-select__size-chip--active');
        $(this).addClass('size-select__size-chip--active');
    });
});

$(function() {
    $('.fit-select li').click( function() {
        var crtfit = $(this).attr("value");
        $(".fit-val").html(crtfit);
        $(this).siblings().removeClass('fit-select__fit-chip--active');
        $(this).addClass('fit-select__fit-chip--active');
    });
});