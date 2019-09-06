 $(document).ready(function(){
    $("#msg-btn").click(function(){
      $(".inner-rectangle").hide();
      $(".playMusic").hide();
      $(".message-top").show();
    });
}); 
$(document).ready(function() {
    
    $("#time-btn").click(function displaytime(){

    });
  });
    
  $(document).ready(function(){
    $("#music-btn").click(function(){
      $(".inner-rectangle").hide();
      $(".message-top").hide();
      $(".playMusic").show();
    });
}); 

var d=new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
var newD = new Date();
var n = newD.getDay()
let week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
document.getElementById("timedisplay").innerHTML =d;
document.getElementById("monthdisplay").innerHTML =week[n];