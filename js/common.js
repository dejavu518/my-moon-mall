$(function() {
    //登陆注册逻辑----------------------------------------------------------------------------------
    //语言切换事件--鼠标移入
    $(".head_r ul").siblings().mouseenter(function() {
            $(this).css("color", "#e2214b")
            $(".lan_choose").css("display", "block").animate({
                top: "35px"
            })
        })
        // 语言切换事件--鼠标移出
    $(".lan_choose").mouseleave(function() {
            $(".head_r span").css("color", "#ffffff")
            $(this).css("display", "none")
        })
        // 头部导航栏--------------------------------------------------------------------------------------
        //二级
    $(".main-menu li").mouseenter(function() {
            $(this).children(".second").css({ display: "block" }).stop().animate({
                top: "100%",
                opacity: "1"
            })
        }).mouseleave(function() {
            $(this).children(".second").stop().animate({
                top: "120%",
                opacity: "0"
            }, function() {
                $(this).css({ display: "none" })
            })
        })
        //三级
    $(".pages li").mouseenter(function() {
            $(this).children(".third").stop().animate({
                left: "100%",
                opacity: "1"
            })
        }).mouseleave(function() {
            $(this).children(".third").stop().animate({
                left: "120%",
                opacity: "0"
            })
        })
        // 搜索
    $(".search-btn").click(function() {
            if ($(".search-input").width() != 0) {
                $(".search-input").stop().animate({
                    width: "0",
                    opacity: "0"
                }, function() {
                    $(this).css("display", "none")
                })
            } else {
                $(".search-input").css("display", "block").stop().animate({
                    width: "860px",
                    opacity: "1"
                })
            }
        })
        // 购物车
    $(".cart-btn").click(function() {
            if ($(this).siblings(".cart-wrapper").css("opacity") == 0) {
                $(this).siblings(".cart-wrapper").css({ display: "block" }).stop().animate({
                    opacity: "1",
                    top: "100%"
                })
                $(this).css({ backgroundColor: "#414141" })
            } else {
                $(this).siblings(".cart-wrapper").stop().animate({
                    opacity: "0",
                    top: "120%"
                })
                $(this).css({ backgroundColor: "#ffffff" })
            }
        })
        //商标轮播图箭头点击事件------------------------------------------------------------------------------------
        //左边
    $(".top_l").click(function() {
            var marL = parseInt($(".top_big").css("marginLeft"))
            console.log(marL)
            if (marL > -750) {
                $(".top_big").animate({
                    marginLeft: marL - 190 + "px"
                })
            } else {
                $(".top_big").animate({
                    marginLeft: 0
                })
            }

        })
        //右边
    $(".top_r").click(function() {
            var marL = parseInt($(".top_big").css("marginLeft"))
            if (marL < 0) {
                $(".top_big").animate({
                    marginLeft: marL + 190 + "px"
                })
            } else {
                $(".top_big").animate({
                    marginLeft: 0
                })
            }
            console.log(marL)
        })
        // shop手风琴菜单-------------------------------------------------------------------------------------------------------------------
    $(".shop_first>li").click(function() {
        $(this).next().slideToggle().siblings(".shop_second").slideUp()
        $(this).siblings(".shop_first>li").children(".shop_arr").removeClass("act_arrow")
        $(this).children(".shop_arr").toggleClass("act_arrow")
    })
})