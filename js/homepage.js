$(function() {
    //鞋子--鼠标进入事件（封装）// -----------------------------------------------------------------------
    function fn1(current, num, a, b, c, d) {
        $(current).mouseenter(function() {
            $(this).stop().css("boxShadow", num + "px 10px 10px #888888").animate({
                marginTop: "-10px",
                opacity: 0.98
            }, 200)
            $(a).stop().css("display", "block").animate({
                height: "95px"
            })
            $(b).stop().css("display", "block").animate({
                height: "260px"
            })
            $(c).stop().css("display", "block").animate({
                width: "270px"
            })
            $(d).stop().css("display", "block").animate({
                width: "495px"
            })
        })
    }
    fn1(".img1", -10, ".shoe_left_l", ".shoe_left_r", ".shoe_left_t", ".shoe_left_b")
    fn1(".img2", 10, "shoe_right_r", ".shoe_right_l", ".shoe_right_t", ".shoe_right_b")
        //鞋子鼠标移出事件（封装）// ----------------------------------------------------------------------------
    function fn2(current) {
        $(current).mouseleave(function() {
            $(this).stop().css("boxShadow", "0 0 0 #888888").animate({
                marginTop: "10px",
                opacity: 1
            }, 200)
            $(".verti").stop().animate({
                height: 0,
            }, 500)
            $(".hori").stop().animate({
                width: 0
            }, 500)
        })
    }
    fn2(".img1")
    fn2(".img2")
        //轮播图箭头点击事件------------------------------------------------------------------------------------
        //左边
    $(".view_arrows_l").click(function() {
            var marL = parseInt($(".view_big").css("marginLeft"))
            if (marL > -620) {
                $(".view_big").animate({
                    marginLeft: marL - 310 + "px"
                })
            } else {
                $(".view_big").animate({
                    marginLeft: 0
                })
            }
            console.log(marL)

        })
        //右边
    $(".view_arrows_r").click(function() {
        var marL = parseInt($(".view_big").css("marginLeft"))
        if (marL < 0) {
            $(".view_big").animate({
                marginLeft: marL + 310 + "px"
            })
        } else {
            $(".view_big").animate({
                marginLeft: 0
            })
        }
        console.log(marL)

    })

    //博客轮播图箭头点击事件------------------------------------------------------------------------------------
    //左边
    $(".blog_l").click(function() {
            var marL = parseInt($(".blog_big").css("marginLeft"))
            console.log(marL)
            if (marL > -1150) {
                $(".blog_big").animate({
                    marginLeft: marL - 575 + "px"
                })
            } else {
                $(".blog_big").animate({
                    marginLeft: 0
                })
            }

        })
        //右边
    $(".blog_r").click(function() {
        var marL = parseInt($(".blog_big").css("marginLeft"))
        if (marL < 0) {
            $(".blog_big").animate({
                marginLeft: marL + 575 + "px"
            })
        } else {
            $(".blog_big").animate({
                marginLeft: 0
            })
        }
        console.log(marL)
    })
})