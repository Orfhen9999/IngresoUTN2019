/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{

       var precio;
       var descuento;
       var precioFinal;

       precio=parseFloat(document.getElementById("importe").value);

       descuento=precio * 25/100;

       precioFinal=precio-descuento;

       alert("el descuento efectuado es de $  "+descuento);

       document.getElementById("resultado").value=precioFinal;


















  /*var sueldo;
  sueldo=parseInt(document.getElementById("importe").value);
  descuento=(sueldo*25)/100;
  resultado=(sueldo-descuento);
  document.getElementById("resultado").value=resultado;

    */



}
