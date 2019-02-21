function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;

alert (mesDelAño);
switch(mesDelAño) {
    //1er rango de casos
    case "Enero": 
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":alert("falta para el invierno")
    break;
    //2do rango de casos
    case "Julio": 
    case "Agosto":alert("abrigate que hace frio")
    break;
    //3er rango se completa con default
    default: alert("Ya pasamos el frio, ahora calor!!!.")
    break;

}



}//FIN DE LA FUNCIÓN