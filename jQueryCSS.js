$(document).ready(function(){
    // $("div").css("width","100px");
    // $("div").css("height","100px");
    // $("div").css("background","#0ff000");
    // $("div").css({
    //     width:"100px",height:"100px",backgroundColor:"#00ff00"
    // })
$("div").addClass("style");
$("div").click(function(){
    $(this).removeClass("style");
})

});