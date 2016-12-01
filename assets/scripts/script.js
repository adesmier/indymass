

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
    var $calItem = $('.calender-item');

    $('.calender-item').bind('click', function(){

        var clickedDay = $(this).attr('data-day');
        //var $self = $(this);

        // $calItem.each(function(){
        //     console.log($(this).attr('data-day'));
        //     if($(this) == $self){
        //         return;
        //     } else {
        //         if($(this).hasClass('flipped')){
        //             $(this).removeClass('flipped');
        //         }
        //     }
        // });
        //
        // if(clickedDay <= 18){
        //     if($self.hasClass('flipped')){
        //         $self.removeClass('flipped');
        //     } else {
        //         $self.addClass('flipped');
        //     }
        // } else {
        //     $(this).addClass('shake').delay(800).queue(function(next){
        //         $(this).removeClass('shake');
        //         next();
        //     });
        // }

        if(clickedDay <= 118){
            $(this).toggleClass('flipped');
        } else {
            $(this).addClass('shake').delay(800).queue(function(next){
                $(this).removeClass('shake');
                next();
            });
        }



    });

});
