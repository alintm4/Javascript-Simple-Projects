function genpass(length, includecapitalletter, includelowerletter,includesymbols,includenumbers){
const capitalletter="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerletter="abcdefghijklmnopqrstuvwxyz";
const symbols="!@#$%^&*()_";
const numbers="0123456789";
let allowedchar="";
let password="";
allowedchar+= +includecapitalletter? capitalletter: "";
allowedchar+= +includelowerletter? lowerletter: "";
allowedchar+= +includesymbols? symbols: "";
allowedchar+= +includenumbers? numbers: "";
for(i=0;i<length;i++){
    const randomIndex=Math.floor(Math.random()*allowedchar.length);
    password +=allowedchar[randomIndex];
}
return password;
}
const length=12;
const includecapitalletter=true;
const includelowerletter=true;
const includesymbols=true;
const includenumbers=true;
const password=genpass(length,
    includecapitalletter,
    includelowerletter,
    includesymbols,
    includenumbers);
    console.log(`Generated password is ${password}`);