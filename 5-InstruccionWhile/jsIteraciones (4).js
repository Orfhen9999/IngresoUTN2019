function Mostrar()
{

	var numero = parseInt(prompt("ingrese un número entre 0 y 10."));
    // inNaN()se usa paa verificar si el tipo de dato es numerico.
	while(numero < 0 || numero > 10 || isNaN(numero)){

		numero = parseInt(prompt("numero incorrecto. ingrese un numero valido"));
	}
	//se devuelve por ID
	document.getElementById("Numero").value = numero;





    //alert("numero valido!");







}//FIN DE LA FUNCIÓN