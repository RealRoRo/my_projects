container = document.getElementsByClassName('container')[0];
named = document.getElementById('name');
container.addEventListener('mouseover',function(){
  console.log(named.innerText)
  named.style.transition='visibility 1s';
  named.style.visibility='visible';
})
container.addEventListener('mouseout',function(){
  console.log(named.innerText)
  named.style.visibility='hidden'
})


function currentTIME(){
  currentTime = new Date();
  console.log(currentTime.getHours()+":" +currentTime.getMinutes()+":"+currentTime.getSeconds())
  sethr = document.getElementById('hr')
  setmin = document.getElementById('min')
  setsec = document.getElementById('sec')
  ampm = document.getElementById('ampm')
  
  hour=(currentTime.getHours())
  if(hour>=12)  {
    hour= hour-12;
    ampm.innerText='PM'
  }else{
    ampm.innerText='AM'
  }
  hour=String(hour)
  min=String(currentTime.getMinutes())
  sec=String(currentTime.getSeconds())
  if(hour.length!=2){
    hour='0'+hour;
  }
  if(min.length!=2){
    min='0'+min;
  }
  if(sec.length!=2){
    sec='0'+sec;
  }
  
  sethr.innerText=hour
  setmin.innerText=min
  setsec.innerText=sec
  //day
  // var weekday = new Array(7);
  // weekday[0] = "Sunday";
  // weekday[1] = "Monday";
  // weekday[2] = "Tuesday";
  // weekday[3] = "Wednesday";
  // weekday[4] = "Thursday";
  // weekday[5] = "Friday";
  // weekday[6] = "Saturday";
  // console.log(weekday[currentTime.getDay()])
  let weekend=document.getElementsByClassName('weekend')
  for(var i=0;i<weekend.length;i++){
    if(currentTime.getDay()==i){
      weekend[i].style.color='red'
    }
  }
  let dateEvent = document.getElementById('date')
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  // dateEvent.innerText=(currentTime.toLocaleDateString(undefined, options));
  dateAndDay=(currentTime.toLocaleDateString(undefined, options));
  var index=dateAndDay.indexOf(',')
  console.log(index)
  console.log(dateAndDay)
  onlyDate = dateAndDay.slice(index+2)
  console.log(onlyDate)
  dateEvent.innerText=onlyDate;

}
setInterval(currentTIME, 1000)
