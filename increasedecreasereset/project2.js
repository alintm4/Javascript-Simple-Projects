
const increasebtn= document.getElementById("increase");
const decreasebtn= document.getElementById("decrease");
const resetbtn= document.getElementById("reset");
const countlabel1= document.getElementById("countlabel");
let count=0;
increasebtn.onclick=function(){
    count++;
    countlabel1.textContent= count;
}
decreasebtn.onclick=function(){
    count--;
    countlabel1.textContent= count;
}
resetbtn.onclick= function(){
    count= 0;
    countlabel1.textContent= count;
}