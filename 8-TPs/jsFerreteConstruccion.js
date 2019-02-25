/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
var largo;
var ancho;
var perimetro;
var alambre;
// tomar los datos por document.getElementById. y calcular el perimetro.
largo = parseInt(document.getElementById("Largo").value);
ancho = parseInt(document.getElementById("Ancho").value);
//perimetro es largo x 2 + ancho x 2;
perimetro = largo * 2 +  ancho * 2;
alambre = perimetro * 3;
alert("la cantidad de alambre a usar es : "+ alambre);
}
function Circulo () 
{
var radio;
var alambre;
radio = parseInt(document.getElementById("Radio").value);
//prerimetro es  2 x radio x pi
perimetro = 2 * radio * Math.PI;
alambre = perimetro * 3;
alert("la cantidad de alambre a usar es : "+ alambre.toFixed(2));






	
}
function Materiales () 
{
    var largo;
    var ancho;
    var area;
    var cemento;
    var cal;
    //AREA ES BASE POR ALTURA (LARGO X ANCHO)
    largo = parseInt(document.getElementById("Largo").value);
    ancho = parseInt(document.getElementById("Ancho").value);
    area = largo * ancho;
    cemento = 2 * area;
    cal = 3 * area;
    alert("la cant. de bolsas de cemento a usar es :   "+ cemento+"  la cantidad de cal a usar es : "+ cal );





}