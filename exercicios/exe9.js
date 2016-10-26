var time=prompt("Que horas são?")
if(time>=0 && time<=19){
    alert("É DIA")
}
 else if(time>=20 && time<=23){
    alert("É NOITE")
 }
 else alert("HORÁRIO INCORRETO");