const display=document.getElementById("display");
let timer=null;
let starttime=0;
let watchtime=0;
let isRunning=false;
function start(){
if(!isRunning){
    starttime=Date.now()-watchtime;
timer=setInterval(update,10);
    isRunning=true;
}
}
function stop(){
if(isRunning){
    clearInterval(timer);
    watchtime=Date.now()-starttime;

    isRunning=false;
}
}
function reset(){
clearInterval(timer);
starttime=0;
watchtime=0;
isRunning=false;
display.textContent="00:00:00:00";
}
function update(){
 const currenttime=Date.now();
 watchtime=currenttime-starttime;
let hours=Math.floor(watchtime/(1000*60*60));
let minutes=Math.floor(watchtime/(1000*60)%60);
let seconds=Math.floor(watchtime/1000 % 60);
let mili=Math.floor(watchtime%(1000)/10);
hours=String(hours).padStart(2,"0");
minutes=String(minutes).padStart(2,"0");
seconds=String(seconds).padStart(2,"0");
mili=String(mili).padStart(2,"0");
display.textContent=`${hours}:${minutes}:${seconds}:${mili}`;
}