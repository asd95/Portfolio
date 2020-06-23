// First we get the viewport height and we multiple it by 1% to get a value for a vh unit
let vh = window.innerHeight * 0.01;
// Then we set the value in the --vh custom property to the root of the document
document.documentElement.style.setProperty('--vh', `${vh}px`);

// doesn't work.///////////////////////////////
// // We listen to the resize event
// window.addEventListener('resize', () => {
//   // We execute the same script as before
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// });

// window.addEventListener("load", function () {
//   window.scrollTo(0, 0);
// });

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

//------- Filter  js --------//
$(".navbar-nav-proj__item").click(function () {
  $(".navbar-nav-proj__item").removeClass("active-link");
  $(this).addClass("active-link");

  let elem = $(this).data("filter");
  let items = $(".project-box").find(elem);
  $(".box-item").fadeOut(200);
  setTimeout(() => {
    $(items).fadeIn(150);
  }, 195);
});

//  ACTIVE MOBILE MENU
$(".wrapper-menu").click(function () {
  $(this).toggleClass("open");
  $(".mobile-menu").fadeToggle(300);
});

let navMobile = $(".mobile-nav__item a");
$(function () {
  navMobile.on("click", function () {
    let selector = $(this).attr("href");
    $(".mobile-menu").fadeOut(300);
    $(".wrapper-menu").removeClass("open");

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

// RESIZE WINDOW/ FOR MOBILE
window.addEventListener("resize", function () {
  let wh = screen.width;
  if (wh >= 567) {
    let mobpopup = document.querySelector(".mobile-menu");
    mobpopup.style.display = "none";
    let menu = document.querySelector(".wrapper-menu");
    if (menu.classList.contains("open")) {
      menu.classList.remove("open");
    }
  }
});

//  ANIMATION CONTENT
AOS.init({
  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 75, // offset (in px) from the original trigger point
  delay: 100, // values from 0 to 3000, with step 50ms
  duration: 500, // values from 0 to 3000, with step 50ms
  easing: "ease", // default easing for AOS animations
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
