function Mostrar()
{

	var contador=1;
	var num;
	var maximo = 0 ;
	var minimo = 0 ;
	
	var respuesta='si';

	while(respuesta!='no') {
		num = parseInt(prompt("ingrese  numero  "+ contador));
		while(isNaN(num)) {
			num = parseInt(prompt("error !   ingrese  numero" + contador));
		}
		if(maximo == 0 && minimo == 0 ) {
			minimo = num;
			maximo = num;

		
		}
		else if( num < minimo) {
			minimo = num;
		}
		else  {
			maximo = num;
		}
		contador ++;
		respuesta = (prompt("desea ingresar otro numero? si o no?").toLowerCase());
		while(respuesta != "si" && respuesta != "no") {
			respuesta = (prompt("respuesta no valida. responda : si o no?").toLowerCase());
		}



	}
	
		document.getElementById("maximo").value = maximo;
		document.getElementById("minimo").value = minimo;
	
	




}//FIN DE LA FUNCIÓN