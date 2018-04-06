$(document).ready(function(){
    // $("#clickBtn").click(function(){
    //     alert("XLT");
    // });
    $("#clickBtn").on("click",clickHandler1);
    $("#clickBtn").on("click",clickHandler2);
});
function clickHandler1(){
    alert("clickHandler1");
}
function clickHandler2(){
    alert("clickHandler2");
}