/**
 * append被选中元素结尾添加
 * prepend开头插入内容
 * before之前
 * after之后插入
 */
$(document).ready(function(){
     $("#btn1").click(function(){
    //     $("#p1").append("the first");
    // });
    $("#p1").prepend("prepend");
     });
     $("#btn2").click(function(){
        $("#p2").before("before");
         });
});

function appendText(){
    /**
     * html
     * jQuery
     * JS-Dom
     */
    var text1="<p>html</p>"
    var text2=$("<p></p>").text("xlt");
    var text3=document.createElement("p");
    text3.innerHTML="xxx";
    $("body").append(text1,text2,text3);
}