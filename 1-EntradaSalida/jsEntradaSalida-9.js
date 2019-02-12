/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar por ventana emergente el AUMENTO Y  el nuevo sueldo con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
var sueldo;
var aumento;
var nuevosueldo;
sueldo=parseInt(document.getElementById("sueldo").value);
aumento=(sueldo*10)/100;
nuevosueldo=(sueldo+aumento);
alert("el aumento es de $  "+aumento);
document.getElementById("resultado").value=nuevosueldo;







	
}
