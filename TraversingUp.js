/**
 * parent()
 * parents()
 * parentsUntil()
 */
$(document).ready(function(){
    // $("p").parent().css({border:"3px solid red"});
    // $("p").parents().css({border:"3px solid red"});
    $("p").parentsUntil("#div1").css({border:"3px solid red"});
});