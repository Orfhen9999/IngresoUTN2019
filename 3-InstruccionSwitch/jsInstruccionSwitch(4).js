function Mostrar()
{
//tomo el mes 
var mesDelAño = document.getElementById('mes').value;



//alert (mesDelAño);
alert(mesDelAño);



switch(mesDelAño) {
    //caso en el que agrupe el mes de 28 dias
    case "Febrero": alert("este mes tiene 28 dias");
    break;
    //caso en el que se agrupan los de 30 dias
    case "Abril":
    case "Junio":
    case "Septiembre":
    case "Noviembre":  alert("este mes tiene 30 dias");
    break;
   //default para agrupar el resto de dias, que son los de 31dias
    default:
    alert("este mes tiene 31 dias")
    break;





}







/*estos entran en el default:

    case "Enero":31
    break;
    
    case "Marzo":31
    break;
    
    break;
    case "Mayo":31
    break;
    
    break;
    case "Julio":31
    break;
    case "Agosto":31
    break;
    
    break;
    case "Obtubre":31
    break;
    
    break;
    case "Diciembre":31
    break;

}	
	
*/


}//FIN DE LA FUNCIÓN