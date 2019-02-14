function Mostrar()
{
//tomo la edad  



// no se entiende pero anda :D
/*
var edad;
edad=parseInt(document.getElementById("edad").value);
if(edad <13 != edad <=17){

    alert("es adolecente");
}


*/






//ejemplo de negacion: si edad NO es menor a 13 O edad mayor a 17 entonces es ADOLECENTE . 


var edad;
edad=parseInt(document.getElementById("edad").value);
if(!(edad <13 || edad >17)){

    alert("es adolecente");

}



//ejemplo :si edad es mayor a 13 y edad menor a 18 es  VERDADERO (TRUE)
/*var edad;
edad=parseInt(document.getElementById("edad").value);
if(edad >=13 && edad <18){
    alert("es adolecente   "+edad);
}
*/

}//FIN DE LA FUNCIÓN