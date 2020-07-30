(function ($) {
    "use strict";

    jQuery(document).ready(function ($) {


        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");

        $('[data-toggle="tooltip"]').tooltip();


        $('#mobile-menu-active').meanmenu({
            meanScreenWidth: "767",
            meanMenuContainer: '.menu-prepent',
        });



        $('.menu-open').click(function () {

            $('.site-menu').addClass('activee');

        });

        $('.menu-close, .site-menu ul li > a').click(function () {

            $('.site-menu').removeClass('activee');

        });




        // Menu Nav
        function smoothSctollTop() {
            $('.site-menu ul li > a').on('click', function (event) {
                var target = $(this.getAttribute('href'));
                if (target.length) {
                    event.preventDefault();
                    $('html, body').stop().animate({
                        scrollTop: target.offset().top - 70
                    }, 1000);
                }
            });
        }
        smoothSctollTop();


        $(window).on('scroll', function () {
            var scroll = $(window).scrollTop();
            if (scroll < 245) {
                $(".header-bar-section").removeClass("scroll-header");
            } else {
                $(".header-bar-section").addClass("scroll-header");
            }
        });





    });


    jQuery(window).load(function () {


    });


}(jQuery));
