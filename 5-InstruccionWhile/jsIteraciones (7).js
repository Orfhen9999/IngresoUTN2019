function Mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var num;
	while(respuesta != "no") {
		num = parseInt(prompt("ingrese numero "));
		while( isNaN(num)) {
			num = parseInt(prompt("error.no es numero.   ingrese numero "));
		}
		acumulador = acumulador + num;
		contador ++;
		respuesta = (prompt("desea ungresar otro numero? si o no").toLowerCase());
		while(respuesta != "si" && respuesta !="no") {
			respuesta = (prompt("error.  ingrese si o no").toLowerCase());
		}



	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN