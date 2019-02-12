/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
var num1;
var num2;
num1=parseInt(document.getElementById("numeroUno").value);
num2=parseInt(document.getElementById("numeroDos").value);
resultado=(num1+num2);
alert("el resultado de la suma es  :"+resultado);

    
}

function restar()
{
    //Aca parseInt no es necesario
num1=(document.getElementById("numeroUno").value);
num2=(document.getElementById("numeroDos").value);
resultado=(num1-num2);

alert("el resultado es:  "+resultado);



}

function multiplicar()
{ 
    num1=parseInt(document.getElementById("numeroUno").value);
    num2=parseInt(document.getElementById("numeroDos").value);
    resultado=(num1*num2);
    
    alert("el resultado es:  "+resultado); 
    


}

function dividir()
{
num1=parseInt(document.getElementById("numeroUno").value);
num2=parseInt(document.getElementById("numeroDos").value);
resultado=(num1/num2);

alert("el resultado es:  "+resultado);
    

}

