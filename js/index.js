window.onload = function() {
    // 获取元素
    var tel = document.querySelector(".first");
    var yz = document.querySelector(".yz");
    var yzm = document.querySelector("#yzm");
    var dengl = document.querySelector(".three");
    var zhuc = document.querySelector(".four");
    //  手机正则
    var regTel = /^1[3|4|5|6|7|8|9]\d{9}$/;
    var regYz = /^\d{1,6}$/;

    function blurs(obj, reg) {
        obj.onblur = function() {
            if (reg.test(this.value)) {
                this.nextElementSibling.className = "success";
                this.nextElementSibling.innerHTML = "<i></i>Yes 输入正确";
                return true;
            } else {
                this.nextElementSibling.className = "lose";
                this.nextElementSibling.innerHTML = "<i></i>No 输入错误";
                return false;
            }
        }
    }
    blurs(tel, regTel);
    // blurs(yz, regYz);

    // --------------获取验证码
    var a = Math.random() * 100000;
    a = Math.floor(a);
    var b = a;
    yzm.onclick = function() {
        //   点击后 变为获取验证码60s
        // 按钮禁用 60s后恢复
        yzm.disabled = true;
        // 倒计时

        var num = 9;
        yzm.value = "获取验证码（" + num + "s）";
        var timer = setInterval(function() {
            num--;
            yzm.value = "获取验证码（" + num + "s）";
            if (num == -1) {
                yzm.disabled = false;
                confirm(a);
                yzm.value = "获取验证码";
                clearInterval(timer);
            }
        }, 1000);

    }

    yz.onblur = function() {
        if (regYz.test(this.value) && this.value == b) {
            this.nextElementSibling.className = "success";
            this.nextElementSibling.innerHTML = "<i></i>Yes 输入正确";
            return true;
        } else {
            this.nextElementSibling.className = "lose";
            this.nextElementSibling.innerHTML = "<i></i>No 输入错误";
            return false;
        }
    }
    dengl.onclick = function() {
        var flag = false;
        var res1 = tel.onblur();
        var res2 = yz.onblur();
        // console.log(res1, res2);

        if (res1 == true && res2 == true) {
            flag = true;
        }
        if (flag) {
            location.href = 'file:///D:/移动电商/SJPS011-移动电商/first/ddqr.html';
        } else {
            alert("亲 手机号或验证码没输对哦")
        }
    }
    zhuc.onclick = function() {
        var flag = false;
        var res1 = tel.onblur();
        var res2 = yz.onblur();
        // console.log(res1, res2);

        if (res1 == true && res2 == true) {
            flag = true;
        }
        if (flag) {
            location.href = 'file:///D:/移动电商/SJPS011-移动电商/first/ddqr.html';
        } else {
            alert("亲 手机号或验证码没输对哦")
        }
    }


















}