$(document).ready(function(){
   $ (window).on("load",function(){
    imgLocation();
    window.onScroll()=function(){

    }
   });
});
function scrollside(){
    var box=$(".box");
    var lastboxHeight=box.last().get(0).offsetTop+Math.floor(box.last().height()/2);
    var documentHeight$=(document).width();
    var scrollTop=
}
function imgLocation(){
    var box=$(".box");
    var boxWidth=box.eq(0).width();
    var num=Math.floor($(window).width()/boxWidth);
    var boxArr=[];
    box.each(function(index,value){
        // console.log(index+"--"+value);
        var boxHeight=box.eq(index).height();
        if(index<num){
            boxArr[index]=boxHeight();
            console.log(boxHeight);
        }else{
            var minboxHeight=Math.min.apply(null,boxArr);
            var minboxIndex=$.inArray(minboxHeight,boxArr);
            // console.log(minboxIndex);
            // console.log(value);
            $(value).css({
                "position":"absolute",
                "top":minboxHeight,
                "left":box.eq(minboxIndex).position().left
            });
            boxArr[minboxIndex]+=box.eq(index).height();
        }
    });
}