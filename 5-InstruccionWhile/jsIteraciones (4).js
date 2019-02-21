function Mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));
    // inNaN()se usa paa verificar si el tipo de dato es numerico.
	// para que ingrese al bucle, con el || or  tiene que cumplirse al menos una condicion.
	// si usamos el && and, tienen que cumplirse las dos para que entre al bucle.
	//en ese caso hay que negar.
	while(numero < 0 || numero > 10 || isNaN(numero)){

		numero = parseInt(prompt("numero incorrecto. ingrese un numero valido"));
	}
	//se devuelve por ID
	document.getElementById("Numero").value = numero;





    //alert("numero valido!");







}//FIN DE LA FUNCIÓN