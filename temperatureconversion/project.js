const textbox=document.getElementById("textbox");
const ctof=document.getElementById("ctof");
const ftoc=document.getElementById("ftoc");
const anss=document.getElementById("anss");
let temp;

function convert(){
if(ctof.checked){
temp=Number(textbox.value);
temp=temp*9/5 +32;
    anss.textContent= `The converted temp is ${temp.toFixed(1)}`
}
else if(ftoc.checked){
    temp=Number(textbox.value);
    temp=(5*(temp-32))/9;
    anss.textContent= `The converted temp is ${temp.toFixed(1)}`
}
else{
    anss.textContent= "Select a unit first";
}
}