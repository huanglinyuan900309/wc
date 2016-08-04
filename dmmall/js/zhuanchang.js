/*页面转场的js*S*/

$(document).ready(function(){
//页面淡入淡出
  $("body").append("<div id=\"mask\" style=\"background-color:white;width:100%;height:90000px;position:absolute;z-index:9999;top:0;left:0;\"></div>");
  $("#mask").fadeOut("slow");
  $("a[target],a[href*='javascript'],a.lightbox-processed,a[href*='#']").addClass("speciallinks");
  $("a:not(.speciallinks)").click(function(){
    $("#mask").fadeIn(1000);
    $("object,embed").css("visibility","hidden");
    });
});