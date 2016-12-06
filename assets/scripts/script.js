

$(function(){

    var options = {
      useEasing : true,
      useGrouping : true,
      separator : ',',
      decimal : '.',
      prefix : '',
      suffix : ''
    };

    var date = new Date();
    var day = date.getDate();
    var remainingDays = 13 - day;

    var counter = new CountUp("day-counter", 0, remainingDays, 0, 2.5, options);
    counter.start();

    if(remainingDays <= 7){
        console.log('here');
        $('#countdown-container').hide();
        $('#intro-container').css('display', 'block');
        $('#calender-container').css('display', 'flex');
    }

    var $calItem = $('.calender-item');

    $('.calender-item').bind('click', function(){

        var clickedDay = $(this).attr('data-day');

        if(clickedDay <= 118){
            $(this).toggleClass('flipped');
        } else {
            $(this).addClass('shake').delay(800).queue(function(next){
                $(this).removeClass('shake');
                next();
            });
        }

    });

    $('.clue-button').bind('click', function(event){

        event.stopPropagation();
        var src = $(this).next().attr('data-src');
        $(this).hide();
        $(this).next().attr('src', src);

    });



});
