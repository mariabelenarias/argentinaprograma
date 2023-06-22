const readlineSync = require('readline-sync');
let numeroEntero = readlineSync.question("Ingrese un numero entero del 1 al 12: ");
let mes;
let cantidadDeDias;
switch (parseInt(numeroEntero)) {
        case 1:
        mes = "enero";
        cantidadDeDias = 31;
        break;
        case 2 :
        mes = "febrero";
        cantidadDeDias = 28;
        break;
        case 3 :
        mes = "marzo";
        cantidadDeDias = 30;
        break;
        case 4 :
        mes = "abril";
        cantidadDeDias = 30;
        break;
        case 5 :
        mes = "mayo";
        cantidadDeDias = 31;
        break;
        case 6 :
        mes = "junio";
        cantidadDeDias = 30;
        break;
        case 7 :
        mes = "julio";
        cantidadDeDias = 31;
        break;
        case 8 :
        mes = "agosto";
        cantidadDeDias = 30;
        break;
        case 9 :
        mes = "septiembre";
        cantidadDeDias = 31;
        break;
        case 10 :
        mes = "octubre";
        cantidadDeDias = 31;
        break;
        case 11 :
        mes = "noviembre";
        cantidadDeDias = 30;
        break;
        case 12 :
        mes = "diciembre";
        cantidadDeDias = 31;
        break;
        default:   
        console.log ("no es un mes del año");        
} 
console.log ("La cantidad de dias del mes de %s es %i", mes, cantidadDeDias);