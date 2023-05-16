// let nombreCompleto = "Variable que cambia";
// let edad = "diez años";
// edad = 10;

// const documentoNacionalDeIdentidad = 4324324242;

//DATA TYPES
/*
    LOS 3 MAS IMPORTANTES
        NUMBERS
        STRINGS
        BOOLEANS
    OTROS
        UNDEFINED
        NULL
        SYMBOL
        BIGINT
*/

// let totalPagar = 100;
// console.log(totalPagar);
// totalPagar -= 10;
// const ivaPagar = totalPagar * 0.21;
// console.log(ivaPagar);

/*
EJERCICIO 1:
    Van a comprar al supermercado los siguientes productos:
     - Pan $430;
     - Agua $500;
     - Azucar $220;
    
    OBJETIVOS:
    1) Crear variables representativas para cada producto con su precio;
    2) calcular el IVA total de la operacion (alicuota de IVA = 21%);
    3) calcular el subtotal de la operacion;
    4) calcular el total a pagar;
*/

//EJERCICIO 1
//1
const pan = 430;
const agua = 500;
const azucar = 220;
//2
// const ivaTotal = 430 * 0.21 + 500 * 0.21 + 220 * 0.21;
// console.log(ivaTotal);
//3
const subtotal = pan + agua + azucar;
console.log(subtotal);

const ivaTotal = subtotal * 0.21;
console.log(ivaTotal);

//4
const total = subtotal + ivaTotal;
console.log(total);

/*
    EJERCICIO 2:
    Nos solicitan crear una aplicacion que permita calcular el indice de masa corporal de dos personas y decir si el primero fue mayor al segundo.

    FORMULA IMC = masa / altura ** 2  otra forma de escribirlo   IMC = masa / altura * altura
  
    Esta aplicacion debera:
    1) Solicitar los datos necesarios para cada persona (una a la vez: nombre, masa y altura);
    2) Crear una variable para cada persona que contenga su IMC;
    4) Crear variable elPrimeroEsMayor;
    3) Mostrar valores de los IMCs calculados y si el primero fue el mayor
*/

//1
const primerNombre = prompt("Ingrese nombre primer persona");

const primerMasaString = prompt("Ingrese masa de la primer persona");
const primerMasaNumber = Number(primerMasaString);

const primerAlturaString = prompt("Ingrese altura de la primer persona");
const primerAlturaNumber = Number(primerAlturaString);
