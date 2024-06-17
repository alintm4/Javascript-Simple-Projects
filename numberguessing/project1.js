 const max=100;
const min=1;
const ans=Math.floor(Math.random()*(max-min+1))+min;

let running=true;
let attempts=0;
let guess;

while(running){
    guess=window.prompt("Guess a number between 1 and 100");
guess=Number(guess);
if(isNaN(ans)){
    window.alert("it is not a number");
}
else if(guess<min || guess>max){
    window.alert("enter between range");
}
else{
    attempts++;
    if(guess<ans){
        window.alert("Too low");
    }
    else if(guess>ans){
        window.alert("Too high");
    }
    else{
        window.alert(`you are correct. The ans was ${ans}. and it took you ${attempts} attempts.` );
        running=false;
    }
}
}