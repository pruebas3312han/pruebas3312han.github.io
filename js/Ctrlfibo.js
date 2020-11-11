"use strict";
function fibonacci(){
    var valor = document.getElementById('dato').value;
    var a=0,b=1,c=b+a,out="";
    for (var i=0; i<valor-1; i++){
        a=b;
        b=c;
        c=a+b;
        out=out+"\n"+c;
    document.getElementById('resultado').innerHTML=out;
    }
}
function borrar(){
    document.getElementById("resultado").value ="";
    document.getElementById("dato").value = "";   
}
