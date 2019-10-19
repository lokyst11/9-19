$(function() {
  $('.nav_1 a').click(function() {
    $(this).addClass('cu').siblings().removeClass('cu');
  })
})



$(function() {
  $('.nav_2 a').click(function() {
    $(this).addClass('cur').siblings().removeClass('cur');
  })
})