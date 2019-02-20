function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var num;
	num=Math.floor(Math.random()*10+1);
	if(num >=9)  {
		alert("usted se sacó un :   "+ num + "    exelente");
	}
	else if(num >=4)  {
		alert("usted se sacó un :   "+ num  + "   aprobo");
	}
	else  {
		alert("usted se sacó un :   "+ num + "    vamos, la proxima se puede");
	}





}//FIN DE LA FUNCIÓN