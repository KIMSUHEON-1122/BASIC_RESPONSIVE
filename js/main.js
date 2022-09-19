$(document).ready(function(){
    $('.allBtn').click(function(){
        $('nav').animate({left:0}, 600, 'swing');
        return false;
    });

    $('nav button').click(function(){
        $('nav').animate({left:-300},600)
    });

    $(window).resize(function(){
        $('nav').removeAttr('style');
    });

});