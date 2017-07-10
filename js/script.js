//page scrolling
  $("a[href^='#']").on("click", function(event) {
    var target = $(this.getAttribute("href"));

    if (target.length) {
      event.preventDefault();
      $("html, body").stop().animate({
        scrollTop: target.offset().top
      }, 500);
    }
   });

//parallax images

  // var followX = 0,
  //     followY = 0,
  //     x = 0,
  //     y = 0,
  //     friction = 1 / 30,
  //     moveBox;

  // function moveBackground() {
  //   x += (followX - x) * friction;
  //   y += (followY - y) * friction;

  //   translate = 'translate(' + x + 'px, ' + y + 'px) scale(1.1)';

  //   $(moveBox).css({
  //     '-webit-transform': translate,
  //     '-moz-transform': translate,
  //     'transform': translate
  //   });

  //   window.requestAnimationFrame(moveBackground);
  // }

  // $(window).on('mousemove click', function(e) {

  //   if (e.target.className !== 'img') {
  //     return true;
  //   }

  //   moveBox = e.target;

  //   var mouseX = Math.max(-100, Math.min(100, $(moveBox).offset().left + $(moveBox).width() / 2 - e.clientX));
  //   var mouseY = Math.max(-100, Math.min(100, $(moveBox).position().top + $(moveBox).height() / 2 - e.clientY));
  //   followX = (30 * mouseX) / 100; // 100 : 12 = mouxeX : follow
  //   followY = (30 * mouseY) / 100;

  // });

  // moveBackground();


