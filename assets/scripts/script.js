

$(function(){

    var options = {
      useEasing : true,
      useGrouping : true,
      separator : ',',
      decimal : '.',
      prefix : '',
      suffix : ''
    };

    var demo = new CountUp("day-counter", 0, 12, 0, 2.5, options);
    demo.start();

    var date = new Date();
    var day = date.getDate();

    $('.calender-item').bind('click', function(){

        var clickedDay = $(this).attr('data-day');

        if(clickedDay <= 8){
            if($(this).siblings().hasClass('flipped')){
                $(this).siblings().removeClass('flipped');
            }
            $(this).toggleClass('flipped');
        } else {
            if($(this).siblings().hasClass('flipped')){
                $(this).siblings().removeClass('flipped');
            }
            $(this).addClass('shake').delay(800).queue(function(next){
                $(this).removeClass('shake');
                next();
            })
        }





    })

});
