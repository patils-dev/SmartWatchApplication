 $(document).ready(function(){
    $("#msg-btn").click(function(){
      $(".inner-rectangle").hide();
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
function displaytime(){
    var today = new Date();
    var time = today.getHours() + ":" + today.getMinutes() 
}
