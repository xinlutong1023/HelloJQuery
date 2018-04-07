$(document).ready(function(){
    $("button").click(function(){
        // $("p").hide(function(){
        //     alert("回调函数");
        // });
        $("p").css("color","yellow").slideUp(1000).slideDown(1000);
    });
});