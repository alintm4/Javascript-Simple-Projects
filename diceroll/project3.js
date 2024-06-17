function myfunctiona(){
    const num= document.getElementById("num").value;
    const diceresult=document.getElementById("diceresult");
    const diceimage=document.getElementById("diceimage");
    const values=[];
    const images=[];
    for(i=0;i<num;i++){
        const value=Math.floor(Math.random()*6)+1;
        values.push(value);
        images.push(`<img src="${value}.png" alt="Dice ${value}">`);
    }
diceresult.textContent= `dice: ${values.join(',')}`;
diceimage.innerHTML= images.join('');
}
