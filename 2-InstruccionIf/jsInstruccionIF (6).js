function Mostrar()
{
//tomo la edad  

var edad;
edad=parseInt(document.getElementById("edad").value);
if(edad >=18) {
    alert("es mayor");
}
else
if(edad >=13 ) {
    alert("es adolecente");

}
else  {
    alert("es menor de edad");
}




}//FIN DE LA FUNCIÓN
