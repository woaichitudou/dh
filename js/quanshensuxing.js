var height = ($(window).height()); //浏览器当前窗口可视区域高度
var width = ($(window).width()); //浏览器当前窗口可视区域宽度
var lenght = $(".content-box").length;
var time = 30; //定义时间
$(".content-box").eq(0).addClass("show").siblings(".content-box").removeClass("show");

$(".content").css("width", width * lenght)
$(".content").css("height", height - 40)

$(".content-box ").css("width", width)
$(".content-box ").css("height", height - 40)

$(".box ").css("width", width)
$(".box ").css("height", height - 40)


for (var i = 0; i < lenght; i++) {
    var span = `<span></span>`
    $(".bt").append(span)
}
$(".bt span").eq(0).addClass("bj");

$(".left").click(right)
$(".right").click(left)
$(".cli").click(ks)

//动画开始
function ks() {
    var sj = $(this).siblings(".show time").html()
    timeri = setInterval(js, 1000);
    timer = setInterval(dh, 1000);
    $(this).hide();
    $(".btn").hide();
    if (sj == 0) {
        $(".show time").html(time)
    }
}
//动画
function dh() {
    var i = $(".show .xian").index()
    console.log(i)
    var n = $(".show .img-box img").length;
    console.log(n)
    i++;
    if (i == n) {
        i = 0;
        $(".show .img-box img").eq(i).addClass("xian").siblings().removeClass("xian");
    } else {
        $(".show .img-box img").eq(i).addClass("xian").siblings().removeClass("xian");
    }
}
//计时
function js() {
    // console.log($(this))
    var sj = $(".show time").html()
    if (sj == 0) {
        clearInterval(timeri)
        clearInterval(timer)
        $(".cli").show();
        $(".btn").show();
    } else {
        sj--;
    }
    $(".show  time").html(sj);
    $(".show .test").click(function() {
        clearInterval(timeri)
        clearInterval(timer)
        $(".cli").show();
        $(".btn").show();
    })
}

//右按钮
function right() {
    $(".show time").html(30)
    var i = $(".bj").index();
    i--;
    if (i < 0) {
        i = lenght - 1;
        var a = i + 1
        var text = "全身塑型(" + a + "-14)"
        $(".nav-box span").html(text)
        $(".content-box").eq(i).addClass("show").siblings(".content-box").removeClass("show");
        $(".show .img-box img").eq(0).addClass("xian").siblings().removeClass("xian")
        $(".content").css("marginLeft", -i * width)
        $(".bt span").eq(i).addClass("bj").siblings().removeClass("bj");
    } else {
        var a = i + 1
        var text = "全身塑型(" + a + "-14)"
        $(".nav-box span").html(text)
        $(".content").css("marginLeft", -i * width)
        $(".bt span").eq(i).addClass("bj").siblings().removeClass("bj");
        $(".content-box").eq(i).addClass("show").siblings(".content-box").removeClass("show");
        $(".show .img-box img").eq(0).addClass("xian").siblings().removeClass("xian")

    }
}
//左按钮
function left() {

    $(".show time").html(30)
    var i = $(".bj").index();
    i++;
    if (i >= lenght) {
        i = 0;
        var a = i + 1
        var text = "全身塑性(" + a + "-14)"
        $(".nav-box span").html(text)
        $(".content").css("marginLeft", -i * width)
        $(".content-box").eq(i).addClass("show").siblings(".content-box").removeClass("show");
        $(".bt span").eq(i).addClass("bj").siblings().removeClass("bj");
        $(".show .img-box img").eq(0).addClass("xian").siblings().removeClass("xian")
    } else {
        var a = i + 1
        var text = "全身塑性(" + a + "-14)"
        $(".nav-box span").html(text)
        $(".content").css("marginLeft", -i * width)
        $(".content-box").eq(i).addClass("show").siblings(".content-box").removeClass("show");
        $(".bt span").eq(i).addClass("bj").siblings().removeClass("bj");
        $(".show .img-box img").eq(0).addClass("xian").siblings().removeClass("xian")
    }
}
// $('.yinyue').click(function() {
//     // console.log(o)
//     $('video').tigger('play');
//     $('video').tigger('pause');
// })

// 音频
function playMusic() {
    var player = $("#player")[0]; /*jquery对象转换成js对象*/
    if (player.paused) { /*如果已经暂停*/
        player.play(); /*播放*/
    } else {
        player.pause(); /*暂停*/
    }
}