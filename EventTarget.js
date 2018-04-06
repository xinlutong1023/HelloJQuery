$(document).ready(function(){
    $("body").bind("click",bodyHandler);
    $("div").bind("click",divHandler);
});

function bodyHandler(event){
    conlog(event);
}

function divHandler(event){
    conlog(event);
}
function conlog(event){
//    console.log(event);
}
