(function ($) {
    'use strict';

    // Testimonials Slider Active Code
    if ($.fn.owlCarousel) {
        $(".testimonials").owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            smartSpeed: 700,
            autoplayTimeout: 5000
        });
    }

    // Partner Company Slider Active Code
    if ($.fn.owlCarousel) {
        $(".partner_slides").owlCarousel({
            items: 5,
            margin: 50,
            loop: true,
            nav: false,
            dots: false,
            autoplay: true,
            smartSpeed: 800,
            responsive: {
                0: {
                    items: 1
                },
                480: {
                    items: 2
                },
                576: {
                    items: 3
                },
                768: {
                    items: 4
                },
                992: {
                    items: 5
                }
            }
        });
    }

    // Twiter Feed Slider Active Code
    if ($.fn.owlCarousel) {
        $(".twitter_feed_slides").owlCarousel({
            items: 1,
            margin: 0,
            loop: true,
            nav: false,
            dots: true,
            autoplay: true,
            smartSpeed: 600,
            autoplayTimeout: 8000,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });
    }

    // Meanmenu Active Code
    if ($.fn.meanmenu) {
        $('.main_menu_area .mainmenu nav').meanmenu({
            onePage: true
        });
    }

    // Onepage Nav Active Code
    if ($.fn.onePageNav) {
        $('#nav, #top-nav').onePageNav({
            currentClass: 'current_page_item',
            scrollSpeed: 1500,
            easing: 'easeInOutQuart'
        });
    }

    // Magnific-popup Video Active Code
    if ($.fn.magnificPopup) {
        $('.video_btn').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,
            fixedContentPos: false
        });
        $('.gallery_img').magnificPopup({
            type: 'image'
        });
    }

    // ScrollUp Active Code
    if ($.fn.scrollUp) {
        $.scrollUp({
            scrollSpeed: 2000,
            easingType: 'easeInOutQuart',
            scrollText: '<i class="pe-7s-angle-up" aria-hidden="true"></i>'
        });
    }
    // wow Active Code
    if ($.fn.init) {
        new WOW().init();
    }

    // Counterup Active Code
    if ($.fn.counterUp) {
        $('.counter').counterUp({
            delay: 10,
            time: 2000
        });
    }

    // Barfiller Active Code
    if ($.fn.barfiller) {
        $('#bar1').barfiller({
            barColor: '#2196f3',
            animateOnResize: true
        });
        $('#bar2').barfiller({
            barColor: '#2196f3',
            animateOnResize: true
        });
        $('#bar3').barfiller({
            barColor: '#2196f3',
            animateOnResize: true
        });
        $('#bar4').barfiller({
            barColor: '#2196f3',
            animateOnResize: true
        });
        $('#bar5').barfiller({
            barColor: '#2196f3',
            animateOnResize: true
        });
        $('#bar6').barfiller({
            barColor: '#2196f3',
            animateOnResize: true
        });
    }

    // Menu Active Code
    $('#wstoggle').on('click', function () {
        $('body').toggleClass('wsfopen');
    })

    // Masonary Gallery Active Code
    if ($.fn.imagesLoaded) {
        $('.gallery_full_width_images_area, .portfolio-column, .blog-masonary').imagesLoaded(function () {
            // filter items on button click
            $('.portfolio-menu').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                $grid.isotope({
                    filter: filterValue
                });
            });
            // init Isotope
            var $grid = $('.gallery_full_width_images_area, .portfolio-column, .blog-masonary').isotope({
                itemSelector: '.single_gallery_item, .column_single_gallery_item, .sb_masonary_item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.single_gallery_item, .column_single_gallery_item, .sb_masonary_item'
                }
            });
        });
    }

    // YouTube Video Active Code
    if ($.fn.mb_YTPlayer) {
        $('.player').mb_YTPlayer();
    }

    // MatchHeight Active Code
    if ($.fn.matchHeight) {
        $('.item').matchHeight();
    }

    // PreventDefault a Click
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    var $window = $(window);

    // Fullscreen Active Code    
    $window.on('resizeEnd', function () {
        $(".welcome_area, .comingsoon_area, .welcome_slides .single_slide, .single_slide").height($window.height());
    });
    $window.on('resize', function () {
        if (this.resizeTO) clearTimeout(this.resizeTO);
        this.resizeTO = setTimeout(function () {
            $(this).trigger('resizeEnd');
        }, 300);
    }).trigger("resize");

    // ScrollUp Active Code
    $window.stellar({
            responsive: true,
            positionProperty: 'transform',
            horizontalScrolling: true,
            parallaxBackgrounds: true,
            parallaxElements: true
    });
    
    // Sticky Active Code
    $window.on('scroll', function () {
        if ($window.scrollTop() > 90) {
            $('.main_header_area').addClass('sticky fadeIn');
            $('body').addClass('mobile_menu_on fullmenu-on');
            $(".logo_area img").attr("src", "img/core-img/agency-logo.png")
            $(".logo_area").css("margin-top", "0");


        } else {
            $('.main_header_area').removeClass('sticky fadeIn');
            $('body').removeClass('mobile_menu_on fullmenu-on');
            $(".logo_area img").attr("src", "img/core-img/agency-logo-white.png")
            $(".logo_area").css("margin-top", "20px");
        }
    });

    // Preloader active code
    $window.on('load', function () {
        $('body').css('overflow-y', 'visible');
        $('#preloader').fadeOut('slow', function () {
            $(this).remove();
        });
    });

})(jQuery);