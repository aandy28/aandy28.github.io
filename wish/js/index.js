$(document).ready(function(){
    var ticket="<div class='star'></div>";
    var numTickets=100;
    for(var x=1;x<=numTickets;x++){
        $(ticket).appendTo("body");
    }
    // get window dimentions
    var ww = $(window).width();
    var wh = $(window).height();
    var colours = ["#1d1a61","#460530"];
    $(".star").each(function(i){
        var rotationNum=Math.round((Math.random()*360)+1);
        var posx = Math.round(Math.random() * ww)-20;
        var posy = Math.round(Math.random() * wh)-20;
        var randColour = colours[Math.floor(Math.random() * colours.length)];
  
        $(this).css("top", posy + "px").css("left", posx + "px").css("background-color",randColour);
    });
  
$("body .star:nth-child(4n)").addClass("flicker");
  $("body .star:nth-child(2n)").addClass("flickerTwo");
    

});