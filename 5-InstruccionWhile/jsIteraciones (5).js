function Mostrar()
{

var sexo = (prompt("ingrese f ó m .").toLowerCase());
while(sexo != "f" && sexo != "m" ){

    sexo = (prompt("dato invalido. ingrese f o m ").toLowerCase());
   
}



document.getElementById('Sexo').value=sexo;

}//FIN DE LA FUNCIÓN