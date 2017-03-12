(function($) {
    "use strict";
    var mainApp = {
        scroll_fun: function() {


            $(function() {
                $('.move-me a').bind('click', function(event) {
                    var $anchor = $(this);
                    $('html, body').stop().animate({
                        scrollTop: $($anchor.attr('href')).offset().top
                    }, 1000, 'easeInOutQuad');
                    event.preventDefault();
                });
            });



        },

        gallery_fun: function() {

            $("a.preview").prettyPhoto({
                social_tools: false
            });





            $('#port-folio').mixitup({
                targetSelector: '.portfolio-item',
                filterSelector: '.filter',


            });
        },
        vedio_fun: function() {
            $(function() {
                $(".player").mb_YTPlayer();
            });
        },

        nice_scroll_fun: function() {
            $("html").niceScroll();
        },
        custom_fun: function() {





        },

    }


    $(document).ready(function() {
        mainApp.scroll_fun();
        mainApp.gallery_fun();
        mainApp.vedio_fun();
        mainApp.nice_scroll_fun();
        mainApp.custom_fun();

    });
}(jQuery));
