$(document).ready(function(){
    $("#msg1").click(function(){
      $(".timer").hide();
      $(".playMusic").hide();
      $(".stopwatch").hide();
      $(".message-top").hide();       
       $(".full-msg").show();

       let cityWeather = $('.message-top .#msg1');
       console.log(cityWeather);
    });
});
$(document).ready(function(){
    $("#msg-btn").click(function(){
      $(".timer").hide();
      $(".playMusic").hide();
      $(".stopwatch").hide();
      $(".full-msg").hide();
      $(".message-top").show();
    });
}); 