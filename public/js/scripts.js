$( document ).ready(function() {
    $('#header .menu').addClass('animated fadeInLeft');
    $('#header .logo').addClass('animated fadeInDown');
    $('#header .right').addClass('animated fadeInRight');

    $('#slider').slick({
      adaptiveHeight: true,
      dots: true,
      arrows: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: 'linear',
      autoplay: false,
      autoplaySpped: 5000
    });

    $('.products.slider').slick({
      dots: false,
      arrows: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 1200,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    })

    $('.reviews').slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: false,
    arrows: true,
    adaptiveHeight: true,
     responsive: [
    {
      breakpoint: 450,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

  retinajs();

  $('.product-detail').click(function(e) {
    var url = $(this).attr('data-url');
    location.assign(url);
  })

  $('.carousel').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 5,
    variableWidth: true,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 2,
        }
      }
    ]
  });

  var slideAccount = new Menu({
    wrapper: '#push-wrapper',
    type: 'account',
    menuOpenerClass: '#opener-account',
    maskId: '.mask'
  });

  var slideCart = new Menu({
    wrapper: '#push-wrapper',
    type: 'cart',
    menuOpenerClass: '#opener-cart',
    maskId: '.mask'
  });

  $('#opener-account').on('click', function(e) {
    e.preventDefault();
    if($(this).hasClass('open')) {
      slideAccount.close();
    } else {
      slideCart.close();
      slideAccount.open();
    }
  });

  $('#opener-cart').on('click', function(e) {
    e.preventDefault();
    if($(this).hasClass('open')) {
      slideCart.close();
    } else {
      slideAccount.close();
      slideCart.open();
    }
  });

  $('.back-link').on('click', function(e) {
    e.preventDefault();
    slideAccount.close();
    slideCart.close();
  });

  $('body').on('click', function(e) {
    if($(e.target).parents('.noclose-area').length === 0 && $(e.target).parents('#menu-link').length === 0 && $('#menu-link').hasClass('open')) {
      $('#menu-link').click();
    }
  });

  $("#menu-link").on('click', function(e) {
    e.stopPropagation();
    e.preventDefault();
    if($(this).hasClass('open')) {
      $('#main-menu').removeClass('visible');
      $(this).removeClass('open');
      $('body').removeClass('active-main-menu');
    } else {
      slideCart.close();
      slideAccount.close();
      $('#main-menu').addClass('visible');
      $(this).addClass('open');
      $('body').addClass('active-main-menu');
    }
  });

if ( ! Modernizr.objectfit ) {
  $('.slide').each(function () {
    var $container = $(this),
        imgUrl = $container.find('img').prop('src');
    if (imgUrl) {
      $container
        .css('backgroundImage', 'url(' + imgUrl + ')')
        .addClass('compat-object-fit');
    }  
  });
}

  $(document).on('click', '.popupmenu', function(event) {
    event.stopPropagation(); 
  });

  $('.stars-disabled').raty({
    starType: 'i',
    readOnly: true,
  });

  $('.stars').raty({
    starType: 'i',
    score: 1
  });

  //Set scores from data-score
  $( ".stars-disabled" ).each(function( index ) {
    if($(this).data('score')) {
      $(this).raty('set', { score: $(this).data('score') });
    }
  });


  $('.count-btn .plus').on('click', function(e) {
    e.preventDefault();
    var input = $(this).parent().children('input');
    value = parseInt(input.val())
    if(isNaN(value)) input.val(1);
    else input.val(value + 1);
  });

  $('.count-btn .minus').on('click', function(e) {
    e.preventDefault();
    var input = $(this).parent().children('input');
    value = parseInt(input.val());
    if(value > 1 && !isNaN(value)) input.val(value - 1);
    else input.val(1);
  });

  $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  vertical: true,
  verticalSwiping: true,
  infinite: false,
  arrows: true,
  variableWidth: false,
  centerPadding: '0px'
});

$('#new-review-btn').on('click', function(e) {
  e.preventDefault();
});

$('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top - 90
        }, 1000);
        return false;
      }
    }
  });

$(".imageselect").msDropDown();

});
