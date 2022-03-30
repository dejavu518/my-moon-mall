$(function() {
    // 数量加减事件------------------------------------------------------------------------------------------------------
    $(".td3 button").click(function() {
            // 获取数量
            var n = $(this).siblings(".count").val()
                // 获取元素class名
            var className = $(this).attr("class")
                // 获取单价
            var single = Number($(this).parent().siblings(".td2").children("span:odd").text())
                // 获取总价
            var total = Number($(this).parent().siblings(".td4").children("span:odd").text())
                //条件判断
            if (className == "increase") {
                n++
                $(this).siblings(".count").val(n)
            } else {
                if (n > 1) {
                    n--
                    $(this).siblings(".count").val(n)
                } else {
                    $(this).siblings(".count").val(1)
                }
            }
            // 总价保留两位小数
            total = (single * n).toFixed(2)
            $(this).parent().siblings(".td4").children("span:odd").text(total)
        })
        //移除事件------------------------------------------------------------------------------------------------------
    $(".td5 img").click(function() {
            $(this).parent().parent().remove()
                //获取表身tr长度
            var tr_len = $("tbody tr").length
            $("#already").text(tr_len)
        })
        //购物车勾选事件------------------------------------------------------------------------------------------------
    $(".td1 input").click(function() {
            var len = $("input[type='checkbox']:checked").length
                // 条件判断渲染已选数量
            if (len > 0) {
                $("#already").text(len)
            } else {
                $("#already").text(0)
            }
            // 渲染总价
            var arrs = []
            $(".checkbox:checked").each(function() {
                arrs.push(parseInt($(this).parent().parent().siblings(".td4").children("span:odd").text()))
            })
            var sum = 0
            for (var i = 0; i < arrs.length; i++) {
                sum += arrs[i]
            }
            var bigSum = sum.toFixed(2)
            $("#sum").text(bigSum)
            $(".total").children("span:odd").text(bigSum)
        })
        //选项卡切换事件--------------------------------------------------------------------------------------------
    $(".cart_button").click(function() {
            //获取id名字
            var idName = $(this).attr("id")
            console.log(idName)
                // 条件判断
            if (idName == "b2") {
                $(this).css({ "background": "#e2214b", "color": "#ffffff" })
                $("#b3").css({ "background": "#efefef", "color": "#9b9b9c" })
                $(".page1,.page3").css("display", "none")
                $(".page2").css("display", "block")
            } else if (idName == "b3") {
                $(this).css({ "background": "#e2214b", "color": "#ffffff" })
                $(".page1,.page2").css("display", "none")
                $(".page3").css("display", "block")
            } else {
                $("#b2,#b3").css({ "background": "#efefef", "color": "#9b9b9c" })
                $(".page2,.page3").css("display", "none")
                $(".page1").css("display", "block")
            }
        })
        //页面二勾选显示隐藏事件----------------------------------------------------------------------------------------
    $(".send").click(function() {
        var show = $(this).is(":checked")
        if (show) {
            $(".page2_main_l_bot_main").css("display", "block").slideDown()
        } else {
            $(".page2_main_l_bot_main").css("display", "none").slideUp()

        }

    })
})