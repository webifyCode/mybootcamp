$(function(){

    var pic = $('#pic');
    var pic2 = $('#pic2')
    var src = $('#pic').attr('src');
    var src2 = $('#pic2').attr('src');
    var tanya = $('#tanya');
    var john = $('#john');

    $('#right').on('click', function(){

        text = $('.text').not(':animated');

        if (text.length > 0) {

        if(pic.attr('src') == src && tanya.css('display', 'block') ){
            pic.attr('src', src2).fadeOut(0).fadeIn(400);
            tanya.fadeOut(400).hide();
            john.fadeIn(400).show();

        } else {
            pic.attr('src', src).fadeOut(0).fadeIn(400);
            john.fadeOut(400).hide();
            tanya.fadeIn(400).show();
        }

    }

    });


    $('#left').on('click', function(){

        text = $('.text').not(':animated');

        if (text.length > 0) {

        if(pic.attr('src') == src && tanya.css('display', 'block') ){
            pic.attr('src', src2).fadeOut(0).fadeIn(400);
            tanya.fadeOut(400).hide();
            john.fadeIn(400).show();

        } else {
            pic.attr('src', src).fadeOut(0).fadeIn(400);
            tanya.fadeIn(400).show();
            john.fadeOut(400).hide();
        }

    }

    });

});