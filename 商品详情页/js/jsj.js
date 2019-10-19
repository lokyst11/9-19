// var box = $(".box");
// var a = $(".box .imgs a");
// var w = a.width();
// var imgs = $(".imgs");

// var index = 1;
// imgs.css("transition", "none");
// imgs.css("transform", `translateX(${-index*w}px)`);
// setTimeout(function() {
//   imgs.css("transition", "all 300ms");
// }, 1);
// box.on("swipeLeft", function() {
//   index++;

//   imgs.css("transform", `translateX(${-index*w}px)`);
// });
// box.on("swipeRight", function() {
//   index--;

//   imgs.css("transform", `translateX(${-index*w}px)`);
// });

// box.on("transitionend", function() {
//   if (index == a.length - 1) {
//     index = 1;
//     imgs.css("transition", "none");
//     imgs.css("transform", `translateX(${-index*w}px)`);
//     setTimeout(function() {
//       imgs.css("transition", "all 300ms");
//     }, 1);
//   }
// });
// box.on("transitionend", function() {
//   if (index == 0) {
//     index = a.length - 2;
//     imgs.css("transition", "none");
//     imgs.css("transform", `translateX(${-index*w}px)`);
//     setTimeout(function() {
//       imgs.css("transition", "all 300ms");
//     }, 1);
//   }

// });
$(function() {
  var box = $(".box");
  var as = $(".box .imgs a");
  var w = as.width();
  var imgs = $(".imgs");

  var index = 1;
  imgs.css("transition", "none");
  imgs.css("transform", `translateX(${-index*w}px)`);
  setTimeout(function() {
    imgs.css("transition", "all 300ms");
  }, 1);
  box.on('swipeLeft', function() {
    console.log(1);
    index++;
    imgs.css("transform", `translateX(${-index*w}px)`);
  });
  box.on("swipeRight", function() {
    console.log(1);
    index--;

    imgs.css("transform", `translateX(${-index*w}px)`);
  });

  box.on("transitionend", function() {
    if (index == as.length - 1) {
      index = 1;
      imgs.css("transition", "none");
      imgs.css("transform", `translateX(${-index*w}px)`);
      setTimeout(function() {
        imgs.css("transition", "all 300ms");
      }, 1);
    }
    $('.nav1 span').eq(index - 1).addClass('cur').siblings().removeClass('cur');
  });
  box.on("transitionend", function() {
    if (index == 0) {
      index = as.length - 2;
      imgs.css("transition", "none");
      imgs.css("transform", `translateX(${-index*w}px)`);
      setTimeout(function() {
        imgs.css("transition", "all 300ms");
      }, 1);
    }
  });

})


$(function() {
  $('.fu1').click(function() {
    if ($('.im')[0].style.display == 'none') {
      $('.im').show().siblings().hide();
    } else {
      $('.im').hide().siblings().show();
    }

  });
})