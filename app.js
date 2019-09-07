 var d=new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
var newD = new Date();
var n = newD.getDay();
let week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
document.getElementById("timedisplay").innerHTML =d;
document.getElementById("monthdisplay").innerHTML=week[n];
 
 
 const msgArray=[{msg:"Hello. How are you today?",time:11.00},
 {msg:"Hey! I'm fine. Thanks for asking!",time:4.05},
 {msg:"Sweet! So, what do you wanna do today?",time:7.00},
 {msg:"Nah, I dunno. Play soccer.. or learn more coding perhaps?",time:6.00}
]
 
 $(document).ready(function(){
    $("#msg-btn").click(function(){
      $(".timer").hide();
      $(".playMusic").hide();
      $(".stopwatch").hide();
      $(".full-msg").hide();
      $(".message-top").show();
    });
}); 
$(document).ready(function(){
    $("#msg1").click(function(){
      $(".timer").hide();
      $(".playMusic").hide();
      $(".stopwatch").hide();
      $(".message-top").hide();
      console.log(msgArray[0].msg1)
        document.getElementById("msg").innerHTML=msgArray[0].msg;
        // console.log(msgArray[0].time)
        // document.getElementsByClassName("time-left[0]").innerHTML=msgArray[0].time;
      $(".full-msg").show();
    });
}); 
$(document).ready(function(){
    $("#msg2").click(function(){
      $(".timer").hide();
      $(".playMusic").hide();
      $(".stopwatch").hide();
      $(".message-top").hide();
      console.log(msgArray[0].msg1)
        document.getElementById("msg").innerHTML=msgArray[1].msg;
      $(".full-msg").show();
    });
}); 
$(document).ready(function(){
    $("#msg3").click(function(){
      $(".timer").hide();
      $(".playMusic").hide();
      $(".stopwatch").hide();
      $(".message-top").hide();
      console.log(msgArray[0].msg1)
        document.getElementById("msg").innerHTML=msgArray[2].msg;
      $(".full-msg").show();
    });
}); 
$(document).ready(function(){
    $("#msg4").click(function(){
      $(".timer").hide();
      $(".playMusic").hide();
      $(".stopwatch").hide();
      $(".message-top").hide();
      console.log(msgArray[0].msg1)
        document.getElementById("msg").innerHTML=msgArray[3].msg;
      $(".full-msg").show();
    });
}); 
$(document).ready(function() {
    
    $("#timer-btn").click(function displaytime(){
        $(".timer").hide();
        $(".message-top").hide();
       $(".playMusic").hide();
       $(".full-msg").hide();
       $(".stopwatch").show();
       let timer=document.getElementById("display-timer");
       let togglebtn=document.getElementById("start-btn");
       let resetbtn=document.getElementById("reset-btn");
       let watch=new stopwatch(timer);
       $("#start-btn").click(function(){
           console.log("in fun")
           if(watch.isOn){
               watch.stop();
               togglebtn.textContent='start';
           }
           else{
            watch.start();
            togglebtn.textContent='stop';
           }
       })
       $("#reset-btn").click(function(){
            watch.reset();
        })
    });
  });
  
  
  
    
$(document).ready(function(){
    $("#music-btn").click(function(){
      $(".timer").hide();
      $(".message-top").hide();
      $(".stopwatch").hide();
      $(".full-msg").hide();
      $(".playMusic").show();
    });
}); 

$(document).ready(function(){
    $("#backbutton").click(function(){
    
      $(".message-top").hide();
      $(".stopwatch").hide();
      $(".full-msg").hide();
      $(".playMusic").hide();
      $(".timer").show();
    });
}); 

$(document).ready(function(){
    $("#time-btn").click(function(){
        $(".message-top").hide();
        $(".playMusic").hide();
        $(".full-msg").hide();
        $(".stopwatch").hide();
        $(".timer").show();
    });
}); 

console.log("app")