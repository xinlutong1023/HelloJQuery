var a=$.noConflict();
a(document).ready(function(){
    a("#btn").on("click",function(){
        a("div").text("new");
    });
});