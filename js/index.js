$(document).ready(function() {
    var $nav = $('.navbar-fixed-top');
    $nav.toggleClass('whiteBg', $(this).scrollTop() > $nav.height());

    $(document).scroll(function() {
        var $nav = $('.navbar-fixed-top');
        $nav.toggleClass('whiteBg', $(this).scrollTop() > $nav.height());

        if ($(this).scrollTop() >= 50) {
            $("#return-top").fadeIn(200);
        }
        else {
            $("#return-top").fadeOut(200);
        }

        $("#homeLink").toggleClass('active', $(this).scrollTop() <= $("#about").offset().top );
        $("#aboutLink").toggleClass('active', $(this).scrollTop() >= $("#about").offset().top && $(this).scrollTop() <= $("#whatWeDo").offset().top )
        $("#whatLink").toggleClass('active', $(this).scrollTop() >= $("#whatWeDo").offset().top && $(this).scrollTop() <= $("#workingHours").offset().top )
        $("#workingLink").toggleClass('active', $(this).scrollTop() >= $("#workingHours").offset().top && $(this).scrollTop() <= $("#contact").offset().top )
        $("#contactLink").toggleClass('active', $(this).scrollTop() >= $('#contact').offset().top );
    });

    $('a').on('click', function(event) {
        if(this.hash !== "") {
            event.preventDefault();

            let hash = this.hash;
            $('html,body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        }
    });

    $("#return-top").click(function() {
        $('body,html').animate({
            scrollTop: 0
        }, 800);
    });
});