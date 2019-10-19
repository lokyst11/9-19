// 动态过渡
var addTransition = function(ele) {
  ele.style.transition = "all .6s";
  ele.style.webkitTransition = "all .6s";
};
// 移除过渡
var removeTransition = function(ele) {
  ele.style.transition = "none";
  ele.style.webkitTransition = "none";
};

// 设置容器平移 -- 也就是滑动动画 
// 	ele:当前元素
// 	xwidth:平移的距离

var setTranslateX = function(ele, xwidth) {
  ele.style.transform = "translateX(" + xwidth + "px)";
  ele.style.webkitTransform = "translateX(" + xwidth + "px)";
}


var banner = function() {
  var timer = ''
  var startInterval = function() {
    timer = setInterval(function() {
      index++; // 基于索引 做位移
      addTransition(imgBox); // 为轮播图片组的ul设置过渡函数
      setTranslateX(imgBox, -index * width); // 根据当前索引值计算平移的距离
    }, 2000);
  }
  var banner = document.querySelector(".jd_banner");
  var width = banner.offsetWidth; // 屏幕的宽度
  var imgBox = banner.querySelector("ul:first-child"); // 轮播图片ul
  var length = imgBox.querySelectorAll("li").length; // 图片的个数
  var pointBox = banner.querySelector("ul:last-child"); // 分页器ul
  var points = pointBox.querySelectorAll("li"); // 分页器集合

  var index = 1; // 初始化索引，由于要无缝衔接，索引从1开始
  startInterval();

  imgBox.addEventListener("transitionend", function() {
    if (index >= length - 1) {
      index = 1;
      //  清过渡，瞬间定位imgBox  
      removeTransition(imgBox);
      setTranslateX(imgBox, -index * width);
    }
    // 滑动的时候也需要无缝
    else if (index <= 0) {
      index = 8;
      removeTransition(imgBox);
      setTranslateX(imgBox, -index * width);
    }
    showPoint(index - 1); // 改变分页器状态
  });

  var showPoint = function(index) {
    for (var i = 0; i < points.length; i++) {
      points[i].className = '';
    }
    points[index].className = "now";
  };
  /* 滑动切换 (touch事件) */
  var startX = 0; // 触摸起始点
  imgBox.addEventListener("touchstart", function(e) {
    // 记录起始位置的X坐标
    clearInterval(timer);
    startX = e.touches[0].clientX;
  });

  var distanceX = 0;
  var translateX = 0;
  // **** 加一个标识，判断用户有没有滑动
  var isMove = false
  imgBox.addEventListener("touchmove", function(e) {
    var moveX = e.touches[0].clientX;
    // 计算位移,有正负方向
    distanceX = moveX - startX;
    // 计算目标元素的位移
    // 元素将要的定位 = 当前定位 + 手指移动的距离
    translateX = -index * width + distanceX;
    // ********** 要想图片实时地跟着手指走，一定要把过渡清楚掉
    removeTransition(imgBox)
    setTranslateX(imgBox, translateX);
    isMove = true; // 确定用户有滑动
    e.preventDefault(); // 去除移动端浏览器默认的滑动事件
  });


  imgBox.addEventListener("touchend", function(e) {
    if (isMove) {
      if (Math.abs(distanceX) > width / 3) {
        // 切换
        if (distanceX > 0) {
          // 上一张
          index = index - 1;
        } else {
          // 下一张
          index = index + 1;
        }
        addTransition(imgBox); // 设置过渡动画
        setTranslateX(imgBox, -index * width);
        if (index >= 9) {
          index = 1;
        }
        if (index <= 0) {
          index = 8;
        }
        showPoint(index - 1);

      } else {
        // 不满足滑动条件，回退到之前的状态
        addTransition(imgBox);
        setTranslateX(imgBox, -index * width);
        showPoint(index - 1);
      }
    }
    // **** 最好做一次参数的重置
    startX = 0;
    distanceX = 0;
    isMove = false;
    // ****** 为了严谨，再清一次定时器
    clearInterval(timer)
      // 加上定时器
    startInterval();
  });
};