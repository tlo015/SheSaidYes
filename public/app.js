$(document).ready(function(){
    // Login Page
    $('#rsvp').click(function() {  
        $('.homeText').animate({top: '50px'}, 'slow');
        $('#rsvp').hide();
        $('.homeText').promise().done(function(){
            $('.login').fadeIn('slow');
        });
    });

    $('.front').click(function() {
        $('.flipper').toggleClass('flipped');
        $('.flipper').promise().done(function() {
            $('.top').addClass('open');
            $('.card').addClass('pull');
        })
    })

});



