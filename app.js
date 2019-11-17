const msgArray=
[
 {name:"Aditi",msg:"Hello. How are you today?",time:11.00},
 {name:"Shital",msg:"Hey! I'm fine. How are you??",time:4.05},
 {name:"Jotiraj",msg:"Todays weather is very cloudy.what do you gonna do today? ",time:7.00},
 {name:"Anaya",msg:"Hii, where are you? Have you read today's news?? ",time:6.00}
]


$(document).ready(function(){

    $("#msg-btn").click(function(){
        $(".timer,.playMusic,.stopwatch,.full-msg").hide();
        $(".message-top").show();
    });


    $("#msg1").click(function(){
        $(".timer,.playMusic,.stopwatch,.message-top").hide();
        document.getElementById("msg-name").innerHTML=msgArray[0].name;
        document.getElementById("msg").innerHTML=msgArray[0].msg;
        $(".full-msg").show();
    });


    $("#msg2").click(function(){
       $(".timer,.playMusic,.stopwatch,..message-top").hide();

       document.getElementById("msg-name").innerHTML=msgArray[1].name;
       document.getElementById("msg").innerHTML=msgArray[1].msg;
       $(".full-msg").show();
    });
}); 

$("#msg3").click(function(){
    $(".timer,.playMusic,.stopwatch,.message-top").hide();
    document.getElementById("msg-name").innerHTML=msgArray[2].name;
    document.getElementById("msg").innerHTML=msgArray[2].msg;
    $(".full-msg").show();
});


$("#msg4").click(function(){
  $(".timer,.playMusic,.stopwatch,.message-top").hide();
  document.getElementById("msg-name").innerHTML=msgArray[3].name;
  document.getElementById("msg").innerHTML=msgArray[3].msg;
  $(".full-msg").show();
});

   
$("#music-btn").click(function(){
  $(".timer,.message-top,.full-msg,.stopwatch").hide();
  $(".playMusic").show();
});


$("#time-btn").click(function displaytime() {
      $(".timer,.message-top,.playMusic,.full-msg").hide();
      $(".stopwatch").show();

      console.log("runnin")
      var h2 = document.getElementsByTagName('h2')[0],
      start = document.getElementById('start-btn'),
      clear = document.getElementById('reset-btn'),
      seconds = 0, minutes = 0, hours = 0, t;
      let pressed=false;
      let lapcount=1;
      $("#start-btn").click(function(){
        
          if(pressed){
              stop();
              start.textContent='start';
          }
          else{
              timer();
              start.textContent='stop';
          }
          $("#reset-btn").click(function(){
              reset();
          });
          $("#lap-btn").click(function(){
              $(".timer,.message-top,.stopwatch,.full-msg,.playMusic").hide();
                    
          $(".stopwatch").show();
              lap();
              $(".lapsShows").show();
          })
      });

    function add() {
        seconds++;
        if (seconds >= 60) {
            seconds = 0;
            minutes++;
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
        }
        h2.textContent = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
        timer();
    }

    function timer() {
        t = setTimeout(add, 1000);
        pressed=true;
    }

    function stop(){
        pressed=false;
        clearTimeout(t);
    }

    function reset(){
        h2.textContent = "00:00:00";
        seconds = 0; minutes = 0; hours = 0; 
        lapcount=1;
   }
   function lap()
   {
        let node = document.createElement("LI");
        let textnode = document.createTextNode("LAP "+lapcount+" - "+hours+":"+minutes+":"+seconds);
        node.appendChild(textnode);
        document.getElementById("lap-display").appendChild(node);
        lapcount+=1;
   }
})

$("#music-btn").click(function(){
    $(".timer,.message-top,.stopwatch,.full-msg").hide();
    $(".playMusic").show();
});
    
$("#backbutton1,#backbutton3").click(function(){
    $(".message-top,.stopwatch,.full-msg,.playMusic").hide();
    $(".timer").show();
    stop();
});

$('#backbutton2').click(function(){
    $(".timer,.playMusic,.stopwatch,.full-msg").hide();
    $(".message-top").show();
})

$("#time-btn").click(function(){
    $(".message-top,.playMusic,.full-msg,.timer,.time").hide();
    $(".time").show();
    $(".stopwatch").show();
});
  
function displayData(){
  let d=new Date().toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, minute: 'numeric' });
  let newD = new Date();
  let n = newD.getDay();
  let week=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
  let monthNames = 
  ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  document.getElementById("monthdisplay").innerHTML=monthNames[newD.getMonth()]+' 0'+newD.getDate();
  document.getElementById("timedisplay").innerHTML =d;
  document.getElementById("timedisplay1").innerHTML=d;
  document.getElementById("timedisplay2").innerHTML=d;
  document.getElementById("timedisplay3").innerHTML=d;
  document.getElementById("daydisplay").innerHTML=week[n];
}
  window.onload=displayData();
  