//dato1
var nombre="MIchell";
console.log(nombre);
var numero=1000;
console.log(numero);
var objeto={
    nombre:"Michell",
    apellido:"Condori",
    telefono:"55443322"
}
console.log(objeto);
//datos2
var bandera=false;
console.log(typeof bandera);
function mifuncion(){}
console.log(typeof mifuncion);
var simbolo =Symbol("mi simbolo");
console.log(typeof simbolo);
class persona{
    constructor(nombre, apellido){
        this,nombre=nombre;
        this.apellido=apellido;
    }
}
console.log(typeof persona);
 var x;
 confirm.log(typeof x);

 x=undefined;
 console.log(typeof x);
 var y =null;
 console.log(typeof y);

 //arreglos y datos vacios
 var y=null;
 console.log(typeof y);
 var autos =['BWM', 'Audi','Volvo'];
 console.log(autos);
 console.log(typeof autos);
 var z='';
 console.log(z);
 console.log(typeof z);
 // concatenar
 var nombre='Michell';
 var apellido='Condori';
 var nombrecompleto=nombre+' '+ apellido;
 console.log(nombrecompleto)
 var nombrecompleto2='Sabrina'+' '+'Michell';
 console.log(nombrecompleto2);
 var x=nombre + 2 + 4;
 console.log(x);
 x=nombre+(2+4);
console.log(x);
x=2 +4+nombre;
console.log(x)
//concatenarstring
let nombre;
nombre="Michell";
console.log(nombre);
const apellido="Condori";
//reglas de declaración 
let nombreCompleto="Michell Condori";
let nombrecompleto="Sabrina Guzmán";
console.log(nombreCompleto);
console.log(nombrecompleto);
let alnombreCompleto;
let _nombreCompleto;
let $nombreCompleto;
let ruptura=10;
//operadores matemáticos
let a=3, b=2;
let z=a+b;
console.log("Resultado de suma:" +z);
z=a-b
console.log("Resultado de la resta:"+z);
z=a*b
console.log("Resultado de la mult:"+z);
z=a/b
console.log("Resultado de la división:"+z);
z=a%b
console.log("Resultado de operación módulo (residuo)"+z);
z=a**b
console.log("Resultado de operador"+z);

//incremento y decremento de variables
//precedencia de operadores 
//operadores de comparación
//operadores de diferencia
//Operador AND
//Operador OR
let vacaciones=false, diadescanso=true;
if(vacaciones || diadescanso){
    console.log("Padre puede asistir al juego de su hijo");

}
else{
    console.log("El padre esta ocupado");
}
// Funcion NaN
let miNumero="17";

let edad=Number(miNumero);
console.log(edad);

if(isNaN(edad)){
    console.log("No es un número");
}
else{
    if(edad>=18){
        console.log("Puede votar");
    }
    else{
        console.log("Muy joven para votar");
    }
}
if (isNaN(edad)){
    console.log("No es un número");
}
else{
    let resultado=(edad>=18)?"Puede votar" :"Muy joven para votar";
    console.log(resultado);
}
//condicionar if
let numero=2
if(numero==1){
    console.log("Número uno");
}
else if (numero==2){
    console.log("Número dos");
}
else if (numero==3){
    console.log("Número tres");
}
else if (numero==4){
    console.log("Número cuatro");
}
else{
    console.log("Número desconocido");
}
//Condicionar con Switch
let numero=1;
let numerotexto='Valor desconocido';
switch(numero){
    case 1:
        numerotexto='Número uno';
        break;

    case 2:
        numerotexto='Número dos';
        break;
    case 3:
        numerotexto='Número tres';
        break;

    case 4:
        numerotexto='Número cuatro';
        break;
    default:
        numerotexto='Caso no encontrado';
}
console.log(numerotexto)
//ciclo while
let contador=0;
while(contador<3){
    console.log(contador);
    contador++;
}
console.log("Fin ciclo while");
//ciclo for
for(let contador=0;contador<3;contador++){
    console.log(contador);
}
console.log("Fin ciclo for");
//arreglos en javascript
const auto =['BMW','Mercedes Benz', 'Volvo'];
console.log(autos);
//accediendo a elementos de un Array







 






































