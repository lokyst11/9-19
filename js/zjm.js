$(function() {
    $(".spa").on("click", function() {
        $(this).addClass("nav-li").siblings().removeClass("nav-li");
        var index = $(this).index();
        $(this).parent().siblings(".content").children("ul").eq(index).removeClass("ds").siblings().addClass("ds");
    })




    // 轮播图
    // 1.修改HTML ，首位各增一张；
    // 2.修改CSS代码
    // 3.默认显示 第一张 HTML顺序的第二张；



    // 1.给box注册左划事件
    var box = $('.tu');
    var li = $(".tu li");
    var w = li.width();
    var ul = $(".tu ul");

    // 默认显示第一张，下标0；

    // HTML结构第二张，显示1.jpg
    var index = 1;
    // 过渡关了
    ul.css("transition", "none");
    // 移动
    ul.css("transform", `translateX(${-index*w}px)`);
    // 开启
    setTimeout(function() {
        // 回来还得开启过渡效果
        ul.css("transition", "all 300ms");
    }, 1);


    // 
    box.on("swipeLeft", function() {
        clearInterval(timer);
        // 2.左划后，UL向左 移动 一格 （一个图片的宽度；）
        // 控制 全局 下标
        index++;

        // 往左滑动
        ul.css("transform", `translateX(${-index*w}px)`);
    });


    box.on("swipeRight", function() {
        clearInterval(timer);
        // 2.有划后，UL向右 移动 一格 （一个图片的宽度；）
        // 控制 全局 下标
        index--;

        //滑动
        ul.css("transform", `translateX(${-index*w}px)`);
    });


    // 无缝滚动：
    // 当我们划到 显示6.jpg。HTML顺序是第7个（倒数第二张）
    // 往左划
    // 显示 1.jpg （倒数第一张）下标7，
    // 开始执行过渡：
    // 过渡结束后，一瞬间 移动到 真实的1.jpg,HTML顺序是2，下标为1；
    ul.on("transitionend", function() {
        // console.log(1);
        // 到达HTML顺序上 最后的1.jpg
        if (index == li.length - 1) {
            // 一瞬间 回到真正的1.jpg 下标为1；
            index = 1;
            // 关闭过渡效果
            ul.css("transition", "none");

            // 回到真实的位置
            ul.css("transform", `translateX(${-index*w}px)`);

            // 把上面执行完了，等一下，为了让UL一瞬间执行后，在开启过渡效果
            setTimeout(function() {
                // 回来还得开启过渡效果
                ul.css("transition", "all 300ms");
            }, 1);
        }



        // 往右 现在初始化 index：1  显示1.jpg
        // 划一下，index:0,  显示6.jpg
        if (index == 0) {
            // 一瞬间 回到真实6.jpg 倒数第二张 
            index = li.length - 2;

            // 关闭过渡效果
            ul.css("transition", "none");

            // 回到真实的位置
            ul.css("transform", `translateX(${-index*w}px)`);

            setTimeout(function() {
                // 回来还得开启过渡效果
                ul.css("transition", "all 300ms");
            }, 1);

        }
    });
    // 自动轮播
    var timer = setInterval(function() {
        index++;

        // 往左滑动
        ul.css("transform", `translateX(${-index*w}px)`);
    }, 2000)



    // $('.tu').on("touchstart", function() {
    //     clearInterval(timer)
    // })
    // $('.tu').on("touchend", function() {
    //     timer = setInterval(function() {
    //         $('.tu').trigger("swipeLeft")
    //     }, 2000)
    // })




    // -----------------footer

    $("footer .lis").click(function() {
        $(this).find('div').find('.ds').show().parent().siblings().removeClass("spn");
        // $(this).siblings('.lis').find('div').find('.ds').hide();
        $(this).find('div').find('.dn').hide().parent().siblings().addClass("spn");
        $(this).siblings('.lis').find('div').find('.dn').show().parent().siblings().removeClass("spn");
        $(this).siblings('.lis').find('div').find('.ds').hide().parent().siblings().removeClass("spn");
    })


})