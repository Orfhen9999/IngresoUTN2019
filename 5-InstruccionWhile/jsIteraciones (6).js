function Mostrar()
{

	var contador=1;
	var acumulador=0;
	var num;
	while(contador < 6) {
		num = parseInt(prompt("ingrese numero"+ contador));
		
		acumulador = acumulador + num
		contador ++;
		
		alert(acumulador);
	}




document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/5;

}//FIN DE LA FUNCIÓN