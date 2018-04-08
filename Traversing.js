/**
 * siblings()
 * next()
 * nextAll()
 * nextUntil()
 * prev()
 * preAll()
 * preUnti()
 */
$(document).ready(function(){
    // $("h4").siblings().css({border:"3px solid red"});
    // $("h4").next().css({border:"3px solid red"});
    // $("h4").nextAll().css({border:"3px solid red"});
    $("p").nextUntil("h6").css({border:"3px solid red"});
});