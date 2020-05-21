// ОФОРМЛЯЕМ НАВИГАЦИОННОЕ МЕНЮ
let nav = $(".navbar-nav__item a");

$(function () {
  nav.on("click", function () {
    let selector = $(this).attr("href");
    // let heightHeader = $(".header").height();
    let h = $(selector);

    $("html, body").animate(
      {
        scrollTop: h.offset().top,
      },
      450
    );
  });
});
// НАВИГАЦИОННОЕ МЕНЮ //////////////////////////

// FOOTER ANIMATIONS-BG

const imageFooter = $('.footer-img');
$(window).scroll(function () {
  const scrollTop = document.documentElement.scrollTop;
  const pageHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const footerSize = Math.floor(document.documentElement.clientHeight/2.2);
  const heightContent = pageHeight - footerSize;
  if (heightContent <= scrollTop) {
    const sizeVH =  (scrollTop - heightContent)/ footerSize * 100;
    $('.footer-img').css('height', `${sizeVH}vh`)
  }
}).animate({ scrollTop: 2430 }, 'slow');

// FOOTER ANIMATIONS-BG ///////////////////////


let wrapperMenu = document.querySelector('.wrapper-menu');
wrapperMenu.addEventListener('click', function () {
  wrapperMenu.classList.toggle('open');
})

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