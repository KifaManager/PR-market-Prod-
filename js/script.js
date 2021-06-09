$(function () {

  if ($(window).width() < 767) {
    $('.create__partners-item:gt(6)').addClass('offset');
  }

  
  $(window).on('scroll', function () {

      if($(this).scrollTop() > 300) {
        $('.totop-btn').addClass('show');
      } else {
        $('.totop-btn').removeClass('show');
      }
    });
    
    $('.totop-btn').on('click', function() {
      $('body, html').animate({
        scrollTop: 0
      }, 500);
    });
    
    // Shopping Counter

  // let shopCounter = $('<span class="shopping-counter"></span>');
  // $('.shopping__cart').append(shopCounter);
  // shopCounter.text($('.cart-main').children().length);

  // $('.actions > .btn-close').on('click', function() {
  //   $(this).closest('.item').remove();
  //   shopCounter.appendTo($('.shopping__cart')).text($('.cart-main').children().length);
  //   if($('.cart-main').children().length == 0) {
  //     shopCounter.fadeOut(200);
  //   } else {
  //     shopCounter.fadeIn(200);
  //   }
  // });

  $('.form-link').prev().css('bottom', '5px');

  $('.form-confirm a').attr('href', '../policy.html');

  $('.form-input[type=tel]').removeAttr('placeholder');

  if ($(window).width() < 766) {
    $('.search-form__btn').on('click', function () {
      $('.burger-menu, .header__logo').fadeOut();
      setTimeout(function () {
        $('.search-form').addClass('show-form').css('padding', '0');
      }, 300);
    });
    $('.search-form__input').on('focus', function () {
      $('.search-form').addClass('show-form');
      $('.burger-menu, .header__logo').fadeOut();
    });
    $('.search-form__input').on('focusout', function () {
      $('.search-form').removeClass('show-form');
      $('.burger-menu, .header__logo').fadeIn();
    });
  }

  $('.burger-menu').on('click', function () {
    $('.header__nav').toggleClass('active');
    $('body').toggleClass('noscroll');
    $(this).toggleClass('active');
  });

  $('.blurb__layout-text').not(':first').hide();
  $('.blurb__layout-caption').on('click', function () {
    $('.blurb__layout-caption').removeClass('active').eq($(this).index()).addClass('active');
    $('.blurb__layout-text').hide().eq($(this).index()).fadeIn(1000);
  }).eq(0).addClass('active');

  $('.mediacatalog__aside').append('<div class="mediacatalog__aside-buttons"><button class="btn show__all-filters">Показать</button><button class="btn btn-white reset__all-filters">Очистить фильтры</button></div>');


  if ($(window).width() < 991) {
    $('.mediacatalog__list-input').on('change', function () {
      if ($(this).is(':checked')) {
        $('.mediacatalog__aside-buttons').addClass('show');
      } else {
        $('.mediacatalog__aside-buttons').removeClass('show');
      }
    })
  }

  let swiper = new Swiper('.shares__boxes', {
    slidesPerView: 1,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    breakpoints: {
      575: {
        slidesPerView: 2
      },
      991: {
        slidesPerView: 3,
        slidesPerGroup: 1
      },
      1199: {
        slidesPerView: 4
      }
    }
  });

  new Swiper(".reviews__slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    }
  });

  new Swiper(".last-articles__cards", {
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
    },
    breakpoints: {
      400: {
        slidesPerView: 1
      },
      757: {
        slidesPerView: 2
      },
      991: {
        slidesPerView: 3
      }
    }
  });

  $('.subscribe__form').on('submit', function (form) {
    if ($('.subscribe__form-input').val() == '') {
      $('.input-error').fadeIn(300);
      form.preventDefault();
      $('.subscribe__form-input').on('focus', function () {
        $('.input-error').fadeOut(300);
      });
    }
  });

  $('.main__select').chosen({
    disable_search_threshold: 10
  });

  $('.form-select').chosen();

  $(window).on("load", function () {
    $('.mediacatalog__list').mCustomScrollbar({
      theme: 'dark',
      scrollInertia: 200,
      autoHideScrollbar: true
    });
    $('.chosen-drop').mCustomScrollbar({
      theme: 'dark',
      scrollInertia: 200
    });    
  });

  

  function triplets(str) {
    return str.toString().replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1\u202f');
  }

  let medNums = $('.mediacatalog__range-number');

  medNums.each(function () {
    let currVall = $(this).text(),
      currVallRes = triplets(currVall);
    $(this).text(currVallRes);
  });

  $('.range-slider').slider({
    animate: 'fast'
  });

  $(".mediacatalog__range-price").slider({
    range: true,
    min: 1500,
    max: 50000,
    step: 500,
    values: [1500, 25000],
    slide: function (event, ui) {
      $('.mediacatalog__price-cobnumber').text(ui.values[0]);
      $('.mediacatalog__price-output').text(ui.values[1]);
      medNums.each(function () {
        let currVall = $(this).text(),
          currVallRes = triplets(currVall);
        $(this).text(currVallRes);
      });
    }
  });

  $(".range__dots").slider({
    animate: 'fast',
    range: 'min',
    min: 0,
    max: 5,
    step: 1,
    value: 2,
    create: function (event, dot) {
      let dots = $('.range__dots');
      dots.find(`.range__dots-item:nth-child(1)`).addClass('active');
    },
    slide: function (event, dot) {
      let dots = $('.range__dots');
      dots.find('.range__dots-item').removeClass('active');
      dots.find(`.range__dots-item:nth-child(-n+${dot.value})`).addClass('active');
    }
  });

  $(".mediacatalog__range-quantity").slider({
    range: 'min',
    min: 0,
    max: 100,
    step: 5,
    value: 50
  });

  $(".mediacatalog__range-quantity.contacts").slider({
    range: true,
    min: 18,
    max: 56,
    step: 1,
    values: [18, 36],
    slide: function (event, ui) {
      $('.mediacatalog__quantity-cobnumber').text(ui.values[0]);
      $('.mediacatalog__quantity-output').text(ui.values[1]);
      medNums.each(function () {
        let currVall = $(this).text(),
          currVallRes = triplets(currVall);
        $(this).text(currVallRes);
      });
    }
  });

  $(".mediacatalog__range-views").slider({
    range: true,
    min: 1500,
    max: 1000000,
    step: 500,
    values: [1500, 500000],
    slide: function (event, ui) {
      $('.mediacatalog__range-cobnumber').text(ui.values[0]);
      $('.mediacatalog__range-output').text(ui.values[1]);
      medNums.each(function () {
        let currVall = $(this).text(),
          currVallRes = triplets(currVall);
        $(this).text(currVallRes);
      });
    }
  });

  $(".mediacatalog__range-followers").slider({
    range: true,
    min: 1500,
    max: 2000000,
    step: 500,
    values: [1500, 1000000],
    slide: function (event, ui) {
      $('.mediacatalog__followers-cobnumber').text(ui.values[0]);
      $('.mediacatalog__followers-output').text(ui.values[1]);
      medNums.each(function () {
        let currVall = $(this).text(),
          currVallRes = triplets(currVall);
        $(this).text(currVallRes);
      });
    }
  });

  $('.mediacatalog__filter-btn.filter').on('click', function () {
    $('.mediacatalog__aside').slideDown();
    $('body').addClass('noscroll darken');
  });

  $('.mediacatalog__aside-close').on('click', function () {
    $('.mediacatalog__aside').slideUp();
    $('body').removeClass('noscroll darken');
  });

  $('.mediacatalog__filter-btn.sort').on('click', function () {
    $('.mediacatalog__sort-content').slideDown();
    $('body').addClass('noscroll darken');
  })

  $('.mediacatalog__sort-close').on('click', function () {
    $('.mediacatalog__sort-content').slideUp();
    $('body').removeClass('noscroll darken');
  });

  $('.tooltip__icon-img').on('mouseover mouseleave', function () {
    $(this).next('.tooltip__content').fadeToggle();
  });

  $('.card__select').chosen({
    disable_search_threshold: 10
  });

  if ($(window).width() < 991) {
    $('.card__aside-title').on('click', function () {
      $(this).toggleClass('active');
      $('.card__aside-services').slideToggle();
    });
  }

  $('.form-input').on('keyup', function () {
    if ($(this).val() != '') {
      $('.btn-white').removeClass('disabled');
    } else {
      $('.btn-white').addClass('disabled');
    }
  });

  // Open popup form
  // ----------------- //
  $('.login__btn').on('click', function () {
    $.fancybox.open($('#popupEnter'), {
      touch: false
    });
    $('.btn[href="#form-login"]').trigger('click');
  });

  $('.registration__btn').on('click', function () {
    $.fancybox.open($('#popupEnter'), {
      touch: false
    });
    $('.btn[href="#form-register"]').trigger('click');
  });
  // ----------------- //

  // Form Tabs
  // ----------------- //
  $('.popup-nav a').on('click', function () {
    $('.popup-nav a').removeClass('active');
    $('.popup-form').removeClass('active');
    $(this).addClass('active');
    $($(this).attr('href')).addClass('active');
    return false;
  });
  // ----------------- //

  // Forgot Password Tabs
  // ----------------- //
  $('#forgot-password').on('click', function () {
    $('.popup-form').removeClass('active');
    $('#form-password').addClass('active');
  });
  // ----------------- //

  // Remember Password Tabs
  // ----------------- //
  $('#remember-password').on('click', function () {
    $('.popup-form').removeClass('active');
    $('#form-login').addClass('active');
  });
  // ----------------- //

  // Show More Cart Item
  // ----------------- //
  $('.cart-link').on('click', function () {
    $(this).toggleClass('open');
    $(this).closest('.content').toggleClass('open');
  });
  // ----------------- //

  // Open Promo Form
  // ----------------- //
  $('#open-promo').on('click', function () {
    $(this).closest('.total-promo').toggleClass('open')
  });
  // ----------------- //

  $('.open-order').on('click', function () {
    $(this).toggleClass('open');
    $(this).closest('.item').toggleClass('open');
  })

  $('.services__aside .btn').on('click', function () {
    $('.services__content form').trigger('submit');
  });

  $('.total-actions > .btn').on('click', function() {
    $('#order-form form').trigger('submit');
  });

  $('.mediacatalog__box-ref').on('click', function() {
    $.fancybox.open($('.request-form'), {
      touch: false
    });
  });

  $('.request-form .btn').on('click', function() {
    $.fancybox.close($('.request-form'));
    $.fancybox.open($('.request-thanks'), {
      touch: false
    })
  });
  // Validation 
  // ------------------ //

  // let ajaxCalcAccess = true;
  // var arr_timers_form_input = [];
  // var arr_timers_form_textarea = [];
  // var submitError = false;
  // function createError(item) {
  //   create_timer(item);
  //   item.closest('.form-label').addClass("error");
  //   item.closest('.form-label').find(".form-error").fadeIn(250);
  // };
  // function create_timer(item) {
  //   let type = item[0].tagName;
  //   let index = $("form input").index(item);
  //   let mass = (type == 'INPUT') ? arr_timers_form_input[index] : arr_timers_form_textarea[index];
  //   clearTimeout(mass);
  //   arr_timers_form_input[index] = setTimeout(function () {
  //     item.parent().removeClass("error");
  //     item.parent().find(".form-error").fadeOut(300);
  //   }, 3000);
  // };


  // let regNumbers = /\d/gi;
  // let regNotNumbers = /\D/gi;
  // let regLatin = /[a-z]/gi;
  // let regСyrillic = /[а-яіїєґ\s]/gi;
  // let regNotCyrText = /[^$а-яіїєґ0-9_-\s]/gi;

  // let regNotCyrText2 = /[^$а-яіїєґ\s]/gi; //need

  // let regLatCyrText = /[^$a-zа-яіїєґ'-\s]/gi;
  // let regLatCyrTextNumb = /[^$a-zа-яіїєґ0-9'-\s]/gi;

  // let regWebsite = /(([\w]+:)?\/\/)?(([\d\w]|%[a-fA-f\d]{2,2})+(:([\d\w]|%[a-fA-f\d]{2,2})+)?@)?([\d\w][-\d\w]{0,253}[\d\w]\.)+[\w]{2,63}(:[\d]+)?(\/([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)*(\?(&?([-+_~.\d\w]|%[a-fA-f\d]{2,2})=?)*)?(#([-+_~.\d\w]|%[a-fA-f\d]{2,2})*)?/;

  // let passwd1;
  // let passwd2;

  // $("#form-login form, #form-register form, #form-password form, #profile-password form, #services__form, #profile-info form, #order-form form").submit(function (e) {
  //   e.preventDefault();
  //   var thise = $(this);
  //   var form = $(this);
  //   submitError = false;
  //   form.find(".error").removeClass("error");
  //   form.find(".form-error").remove();
  //   form.find("input, textarea").each(function () {

  //     if ($(this).val() == "" && $(this).prop('required')) {
  //       errorDo.call($(this), "Ошибка")
  //     };


  //     // для почты
  //     if ($(this).attr("type") == "email" && $(this).prop('required')) {
  //       var email_val = $(this).val();
  //       var test_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
  //       if (!email_val || !test_email.test(email_val)) {
  //         if (email_val.length) {
  //           errorDo.call($(this), 'Неверный e-mail')
  //         } else {
  //           errorDo.call($(this), "Ошибка")
  //         }
  //       };
  //     };

  //     // name || surname
  //     if (($(this).attr('name') == 'name' || $(this).attr('name') == 'surname' || $(this).attr('name') == 'display_name' || $(this).attr('name') == 'company') && !$(this).val() == "") {
  //       // if length < 2
  //       if ($(this).val().length < 2) {
  //         errorDo.call($(this), 'At least 2 letters')
  //       };
  //       // if numbers
  //       if (/\d/gi.test($(this).val().replace(regNotNumbers, ''))) {
  //         errorDo.call($(this), 'Только буквы'); // 'Тільки букви'
  //       }
  //       // if latin
  //       if (regLatCyrText.test($(this).val())) {
  //         errorDo.call($(this), 'Только кириллица и латиница');
  //       }
  //     };

  //     // website
  //     if (($(this).attr('name') == 'companyWebsite') && !$(this).val() == "") {
  //       // if latin
  //       if (!regWebsite.test($(this).val())) {
  //         errorDo.call($(this), 'Неверный адрес');
  //       }
  //     };


  //     // tel
  //     if ($(this).attr("type") == "tel") {
  //       // length < 19
  //       if ($(this).val().length < 19) {
  //         errorDo.call($(this), 'Ошибка'); // 'загубилась цифра'
  //       };
  //       // real tel
  //       let telNumbers = $(this).val().slice(10).replace(/-/gi, '');
  //       if (unique(telNumbers.split('')).length < 2) {
  //         errorDo.call($(this), 'Неверный номер'); // 'Будь-ласка, введіть реальний номер телефону'
  //       }
  //     };


  //     if ($(this).attr("name") == "password" && $(this).prop('required')) {
  //       if ($(this).val() == "" && $(this).prop('required')) {
  //         errorDo.call($(this), "Ошибка")
  //       }
  //       else {
  //         passwd1 = $(this).val();
  //       }
  //     };
  //     if ($(this).attr("name") == "repeat_password" && $(this).prop('required')) {
  //       passwd2 = $(this).val();
  //       if ($(this).val() == "" && $(this).prop('required')) {
  //         errorDo.call($(this), "Ошибка")
  //       };
  //       if (passwd1 != passwd2) {
  //         errorDo.call($(this), "Неверный пароль")
  //       }
  //     };
  //   });

  //   form.find("textarea").each(function () {
  //     if ($(this).val() == "" && $(this).prop('required')) {
  //       errorDo.call($(this), "Ошибка")
  //     };
  //   });

  //   form.find("select").each(function () {
  //     if ($(this).prop('required')) {
  //       errorDo.call($(this), "Ошибка")
  //     };
  //   });

  //   // agree checkbox
  //   let agreeInput = form.find('input[name=agree]');
  //   if (agreeInput.length && !agreeInput.prop('checked')) {
  //     errorDoAgree.call(agreeInput, 'Подтвердите соглашение');
  //   };

  //   if (!submitError) {

  //     let data = form.serialize();
  //     successForm(data, this);
  //     form.find("input[type='text'], input[type='tel'], input[type='email'], textarea").each(function () {
  //       $(this).val("");
  //     });
  //   }
  //   return false;
  // });

  // function errorDo(text) {
  //   $(this).nextAll(".form-error").remove();
  //   $(this).after('<span class="form-error">' + text + '</span>');
  //   // if (!submitError) scrollToErrorInput.call($(this));
  //   submitError = true;
  //   createError($(this));
  // }
  // function errorDoAgree(text) {
  //   $(this).nextAll(".form-error").remove();
  //   $(this).next().after('<span class="form-error">' + text + '</span>');
  //   // if (!submitError) scrollToErrorInput.call($(this));
  //   submitError = true;
  //   createError($(this));
  // }

  // function successForm(data, form) {
  //   //alert("success");
  // }
  // /*
  // const operatorCodes = [
  //     067, 096, 097, 098, 050, 066, 095, 099, 095, 063, 073, 093, 068
  // ];*/
  // function unique(arr) {
  //   let result = [];
  //   for (let str of arr) {
  //     if (!result.includes(str)) {
  //       result.push(str);
  //     }
  //   }
  //   return result;
  // }

  // $(document).ready(function () {
  //   $(".form-confirm input[name='agree']").on('change', function () {
  //     const checked = $(this).prop('checked');
  //     const form = $(this).closest("form");
  //     const anotherCheckbox = form.find("input[name='agree']");
  //     const btn = form.find('button');
  //     anotherCheckbox.prop('checked', checked ? 'checked' : '');
  //     btn[!checked ? 'addClass' : 'removeClass']('disabled');
  //   })
  // });


});