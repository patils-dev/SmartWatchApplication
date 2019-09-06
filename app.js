 $(document).ready(function(){
    $("#msg-btn").click(function(){
      $(".timer").hide();
      $(".playMusic").hide();
      $(".stopwatch").hide();
      $(".message-top").show();
    });
}); 
$(document).ready(function(){
    $("#msg1").click(function(){
      $(".timer").hide();
      $(".playMusic").hide();
      $(".stopwatch").hide();
      $(".message-top").hide();
      $(".full-msg").show();
    });
}); 
$(document).ready(function() {
    
    $("#timer-btn").click(function displaytime(){
        $(".timer").hide();
        $(".message-top").hide();
       $(".playMusic").hide();
       $(".stopwatch").show();
    });
  });
    
$(document).ready(function(){
    $("#music-btn").click(function(){
      $(".timer").hide();
      $(".message-top").hide();
      $(".stopwatch").hide();
      $(".playMusic").show();
    });
}); 

$(document).ready(function(){
    $("#time-btn").click(function(){
        $(".message-top").hide();
        $(".playMusic").hide();
        $(".timer").show();
    });
}); 

var d=new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
var newD = new Date();
var n = newD.getDay();
let week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
document.getElementById("timedisplay").innerHTML =d;
document.getElementById("monthdisplay").innerHTML =week[n];