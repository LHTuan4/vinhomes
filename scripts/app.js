$(document).ready(function() {
    $(window).scroll(function() {
        var topPos = $(this).scrollTop();
        var windowHeight = $(this).height();
        if (topPos > windowHeight / 2) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }
    });
    $('.nav-link').click(function(e) {
        e.preventDefault();
        var id = $(this).attr('href');
        window.scrollTo({
            top: ($(id).offset().top - 200),
            behavior: 'smooth'
        });
        $('.navbar-toggler').click();
    });

});

