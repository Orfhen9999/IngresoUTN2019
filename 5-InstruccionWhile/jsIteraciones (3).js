function Mostrar()
{

var clave = prompt("ingrese el número clave.");

clave = "utn750";


//mientras que la clave sea distinta a "utn750" entra al bucle
while(clave != "utn750"){
    alert("clave incorrecta");
    clave=prompt("ingrese de nuevo la contraseña");




    //otra forma seria:
    //clave=prompt("clave incorrecta.  ingrese de nuevo la contraseña:");

}

//sale del bucle cuando sea igual la contraseña
alert("contraseña correcta");




}//FIN DE LA FUNCIÓN
