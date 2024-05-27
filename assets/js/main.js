
'use strict';

(function ($) {

    /*------------------
        Preloader
    --------------------*/
    $(window).on('load', function () {
        $(".loader").fadeOut();
        $("#preloder").delay(200).fadeOut("slow");
    });

    /*------------------
        Background Set
    --------------------*/
    $('.set-bg').each(function () {
        var bg = $(this).data('setbg');
        $(this).css('background-image', 'url(' + bg + ')');
    });

    //Humberger Menu
    $(".humberger__open").on('click', function () {
        $(".humberger__menu__wrapper").addClass("show__humberger__menu__wrapper");
        $(".humberger__menu__overlay").addClass("active");
    });

    $(".humberger__menu__overlay").on('click', function () {
        $(".humberger__menu__wrapper").removeClass("show__humberger__menu__wrapper");
        $(".humberger__menu__overlay").removeClass("active");
    });

    //Search Switch
    $('.search-switch').on('click',function() {
        $('.search-model').fadeIn(400);
    });

    $('.search-close-switch').on('click',function() {
        $('.search-model').fadeOut(400,function() {
            $('#search-input').val('');
        });
    });

    /*------------------
		Navigation
	--------------------*/
    $(".mobile-menu").slicknav({
        prependTo: '#mobile-menu-wrap',
        allowParentLinks: true
    });


    /*------------------
		FAQ
	--------------------*/

    $('.faq-item__title').on('click', function (e) {
        var element = $(this).parent('.faq-item');
        if (element.hasClass('open')) {
          element.removeClass('open');
          element.find('.faq-item__content').removeClass('open');
          element.find('.faq-item__content').slideUp(300, "swing");
        } else {
          element.addClass('open');
          element.children('.faq-item__content').slideDown(300, "swing");
          element.siblings('.faq-item').children('.faq-item__content').slideUp(300, "swing");
          element.siblings('.faq-item').removeClass('open');
          element.siblings('.faq-item').find('.faq-item__content').slideUp(300, "swing");
        }
      });
      
      
      $('.user-thumb').on('click', function() {
        $('.dashboard__sidebar').addClass('active')
        $('.overlay').addClass('active')
      })
      
      $('.single-select').on('click', function() {
        $('.single-select').removeClass('active')
        $(this).addClass('active')
      })
      
      $('.btn-close, .overlay').on('click', function() {
        $('.overlay').removeClass('active')
        $('.menu').removeClass('active')
      })
      
      $('.how-item').on('mouseover', function() {
        $('.how-item').removeClass('active')
        $(this).addClass('active')
      })

    /*------------------
        Carousel Slider
    --------------------*/
    var hero_s = $(".hero__slider");
    hero_s.owlCarousel({
        loop: true,
        margin: 0,
        items: 1,
        dots: false,
        nav: true,
        navText: ["<span class='arrow_carrot-left'><span/>", "<span class='arrow_carrot-right'><span/>"],
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        smartSpeed: 1200,
        autoHeight: false,
        autoplay: true
    });

})(jQuery);