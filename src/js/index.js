// 
let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

// ОФОРМЛЯЕМ НАВИГАЦИОННОЕ МЕНЮ
let nav = $(".navbar-nav__item a");

$(function () {
  nav.on("click", function () {
    let selector = $(this).attr("href");
    // let heightHeader = $(".header").height();
    let h = $(selector);

    $("html, body").animate({
        scrollTop: h.offset().top,
      },
      450
    );
  });
});

// НАВИГАЦИОННОЕ МЕНЮ //////////////////////////
// FOOTER ANIMATIONS-BG
// $(window).scroll(function () {
//   // const scrollTop = document.documentElement.scrollTop;
//   const scrollTop = document.documentElement.scrollTop + document.documentElement.clientHeight - 20;
//   const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//   const footerSize = Math.floor(document.documentElement.clientHeight / 2);
//   const heightContent = pageHeight - footerSize;
//   // if (heightContent <= scrollTop) {
//   // const sizeVH =  (scrollTop - heightContent)/ footerSize * 100;
//   // $('.footer-img').css('min-height', `calc(var(--vh, 1vh) * ${sizeVH}`)
//   // $('.footer-img').css('height', `${sizeVH}%`)
//   // }
//   let h = $('.contacts')
//   let top = h.offset().top;
//   if (scrollTop >= top) {
//     const sizeVH = 100;
//     $('.footer-img').css('height', `${sizeVH}vh`)
//   } else {
//     $('.footer-img').css('height', `${0}`)
//   }

// })

// FOOTER ANIMATIONS-BG ///////////////////////

// // NAV POSITION
//   var navPos = $('nav').position().top;
//   var lastPos = 0;
//   var lockTimer;

//   $(window).on('scroll', function() {
//     var pos = $(window).scrollTop();
//     var pos2 = pos + 50;
//     var scrollBottom = pos + $(window).height();

//     if (!isMobile) {
//       if (pos >= navPos + $('nav').height() && lastPos < pos) {
//         $('nav').addClass('fixed');
//       }
//       if (pos < navPos && lastPos > pos) {
//         $('nav').removeClass('fixed');
//       }
//       lastPos = pos;
//     }

//     // Link Highlighting
//     if (pos2 > $('#home').offset().top) {
//       highlightLink('home');
//     }
//     if (pos2 > $('#about').offset().top) {
//       highlightLink('about');
//     }
//     if (pos2 > $('#portfolio').offset().top) {
//       highlightLink('portfolio');
//     }
//     if (pos2 > $('#blog').offset().top) {
//       highlightLink('blog');
//     }
//     if (
//       pos2 > $('#contact').offset().top ||
//       pos + $(window).height() === $(document).height()
//     ) {
//       highlightLink('contact');
//     }

//     // Prevent Hover on Scroll
//     clearTimeout(lockTimer);
//     if (!$('body').hasClass('disable-hover')) {
//       $('body').addClass('disable-hover');
//     }

//     lockTimer = setTimeout(function() {
//       $('body').removeClass('disable-hover');
//     }, 500);
//   });

//   function highlightLink(anchor) {
//     $('nav .active').removeClass('active');
//     $('nav')
//       .find('[dest="' + anchor + '"]')
//       .addClass('active');
//   }


//------- Filter  js --------//  
 $('.navbar-nav-proj__item').click(function () {
   $('.navbar-nav-proj__item').removeClass('active-link');
   $(this).addClass('active-link');

   let elem = $(this).data('filter');
   let items = $('.project-box').find(elem);
   $('.box-item').fadeOut(300);
   setTimeout(() => {
    $(items).fadeIn('slow')
     
   }, 295)
   

  //  var data = $(this).attr('data-filter');
  //  $grid.isotope({
  //    filter: data
  //  })
 });


//  ACTIVE MOBILE MENU

$('.wrapper-menu').click(function () {
  $(this).toggleClass('open');
  $('.mobile-menu').fadeToggle(300);
})

let navMobile = $(".mobile-nav__item a");

$(function () {
  navMobile.on("click", function () {
    let selector = $(this).attr("href");
    $('.mobile-menu').fadeOut(300);
    $('.wrapper-menu').removeClass('open');

    // let heightHeader = $(".header").height();
    let h = $(selector);

    $("html, body").animate({
        scrollTop: h.offset().top,
      },
      450
    );
  });
});