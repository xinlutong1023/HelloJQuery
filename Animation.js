$(document).ready(function(){
    $("#hide").bind("click",PHide);
    $("#show").bind("click",PShow);
    $("#toggle").bind("click",PToggle);
});
function PHide(){
    $("p").hide(1000);
}
function PShow(){
    $("p").show(1000);
}
function PToggle(){
    $("p").toggle(1000);
}
