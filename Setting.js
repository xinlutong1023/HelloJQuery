$(document).ready(function(){
    $("#btn1").click(function(){
        $("#p1").text("辛璐同");
    });
    $("#btn2").click(function(){
        $("#p2").html("<a>心心心</a>");
    });
    $("#btn3").click(function(){
        $("#i3").val("xinlutong");
    });
    $("#btn4").click(function(){
        $("#aid").attr("href","text")
    });
    $("#btn5").click(function(){
        $("#p5").text(function(i,ot){
            return "old:"+ot+" new:xindeneirong"+(i);

        });
    });
});