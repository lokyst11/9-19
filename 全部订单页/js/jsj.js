var box = $(".inner");
var li = $("li");
var w = li.width();
var ul = $("ul");
var index = 0;
box.on("swipeLeft", function() {
  index++;
  if (index == li.length) {
    index = 0;
  }
  ul.css("transform", `translateX(${-index*w}px)`);
});
box.on("swipeRight", function() {
  index--;
  if (index == -1) {
    index = li.length - 1;
  }
  ul.css("transform", `translateX(${-index*w}px)`);
});