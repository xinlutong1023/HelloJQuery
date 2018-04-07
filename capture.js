$(document).ready(function(){
    $("#btn").click(function(){
        alert("内容是:"+$("#it").val());
    });
    $("#btn1").click(function(){
        alert("内容是:"+$("#baidu").attr("href"));
    });
});