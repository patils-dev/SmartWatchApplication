function stopwatch(elem)
  {
      
        var time=0;
        var interval;
        var offset;

      function update()
      {
        // console.log("update")
        if(this.isOn){
          time+=delta();
        }
        //   console.log(time);
          var formattedTime=timeFormatter(time);
          console.log(formattedTime);
          elem.textContent=formattedTime;
        //   elem.textContent=timeFormatter(time);
      }
      function delta()
      {
            var now=Date.now();
           var timePassed=now-offset;
           offset=now;
           return timePassed;
      }
      function timeFormatter(timeInMilliSecond)
      {
        //   console.log("formattoe")
            var time=new Date(timeInMilliSecond);
            var hour=time.getHours().toString();
            var minute=time.getMinutes().toString();
            var second=time.getSeconds().toString();

            if(hour.length<2)
            {
                hour='0'+hour;
            }
            if(minute.lenth<2)
            {
                minute='0'+minute;
            }
            if(second.length<2){
                second='0'+second;
            }
            return (hour+":"+minute+":"+second);
      };
      this.isOn=false;
     this.start=function()
     {
         console.log("start")
         if(!this.isOn){
             interval=setInterval(update.bind(this),10);
             console.log("start")
            offset=Date.now();
             this.isOn=true;
         }
     };
     this.stop=function()
     {
        if(this.isOn){
            clearInterval(interval);
            interval=null;
            this.isOn=false;
        }
     };
     this.reset=function(){
         time=0;
         update();
     };
  }


