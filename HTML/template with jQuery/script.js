$(document).ready(function(){
    $('.next').on('click', function(){
        var first = $('.active');
        var second = first.next();

        if(second.length){
            first.removeClass('active');
            second.addClass('active');
        }
    });
    $('.prev').on('click', function(){
        var first = $('.active');
        var second = first.prev();

        if(second.length){
            first.removeClass('active');
            second.addClass('active');
        }
    }); 
    $('window').on('scroll', function(){
console.log("$('window').scrollTop()")
    });
})