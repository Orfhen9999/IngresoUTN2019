function Mostrar()
{
	
	
	var contador=1;
    var positivo=0;
    var negativo=0;
    var num;
    var respuesta='si';
    var multiplicar= 1;
    var sumar= 0 ;
    while(respuesta == "si") {
        num = parseInt(prompt("ingrese numero"+ contador));
        while(isNaN(num))  {
			
            num = parseInt(prompt("error!   ingrese numero"+contador));

        }
        if(num < 0 ) {
            negativo = num;
        }
        else {
            positivo = num;
        }
        multiplicar = multiplicar * negativo;
        sumar = sumar + positivo;

        respuesta = prompt("desea continuar?   si o no");
        while( respuesta != "si" && respuesta != "no") {
            respuesta = prompt("error . ingrese si o no");

            
		}
		contador ++;






    }






document.getElementById('suma').value=sumar;
document.getElementById('producto').value=multiplicar;




}//FIN DE LA FUNCIÓN