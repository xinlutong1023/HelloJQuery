/**
 * first
 * last
 * eq
 * filter
 * not
 */
$(document).ready(function(){
    // $("div p").first().css("background-color","red");
    // $("div p").eq(0).css("background-color","red");
    $("div p").filter(".pclass").css("background-color","red");
    // $("div p").not(".pclass").css("background-color","red");
})