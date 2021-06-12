
import {ContarCaracteres} from "./Ej1.js";
import {RecortarStr} from "./ej2.js"
import{SplitTexto} from "./Ej3.js"
import {RepetirTexto} from "./Ej4.js"
import {InvertirParrafo, ContarPalabras} from "./Ej5-6-7-8.js"

console.log("Este es el js de Ejercicios1")

console.log("###### Ej1 ######")
console.log(ContarCaracteres("hola mundo"))
const ContarCaracteres2 = (cadena = "") => (!cadena) ? console.warn("no ingreso ninguna cadena") : console.info(`la cadena ${cadena} tiene ${cadena.length} caracteres`)
ContarCaracteres2()
ContarCaracteres2("ESTO ES PARA CONTAR")

console.log("###### Ej2 ######")
console.log(RecortarStr("alan masriera", 8))

const recortarStr2 = (texto = "", caracteres = undefined) => 
(!texto) || (!caracteres)
?console.warn("Algun atributo mal ingresado") 
: console.info(`La cadena ingresada "${texto}" cortada a "${caracteres}" caracteres queda: "${texto.slice(0,caracteres)}"`)
recortarStr2("Esta es una cadena larga", 8)
recortarStr2("", 8)

console.log("###### Ej3 ######")
console.log(SplitTexto("Alan Masriera DNI 36354471", " "))

const splitTexto2 = (texto = "", separador = undefined ) => (!texto) 
    ? console.warn("Debe ingresar un texto")
    : (separador === undefined)
        ? console.warn("Debe ingresar un separador")
        :console.info(texto.split(separador))
        //:console.info(`El texto "${texto}" separado por "${separador}" devuelve el siguiente arreglo: ${texto.split(separador)}`)
splitTexto2("Este es un texto"," ")
splitTexto2("Este es un texto",3)
splitTexto2(""," ")



console.log("###### Ej4 ######")
console.log(RepetirTexto("Alan", 5))
const repetirTexto2 = (texto = "", cantidad = 1) => (!texto)
    ? console.warn("debe ingresar una cadena valida")
    : console.info(`Al repetir el texto "${texto}" "${cantidad}" veces el resultado es: ${texto.repeat(cantidad)}`)
repetirTexto2("alan esto es un string", 10)


console.log("###### Ej5 ######")
console.log(`Ej 5: parrafo invertido "${InvertirParrafo("alan")}"`)
const invertirParrafo2 = (parrafo = "") => (!parrafo)
    ? console.warn("debe ingresar un parrafo")
    : console.info(`El parrafo "${parrafo}" invertido queda "${parrafo.split("").reverse().join("")}"`)
invertirParrafo2("Parrafo a invertir")
    
      
console.log("###### Ej6 ######")
console.log(`Ej 6: contar palabras en texto "${ContarPalabras("hola, soy alan", "a")}"`)
const contarPalabras2 = (texto = "", palabraBuscada = undefined) => (!texto)
    ? console.warn("Debe ingresar texto")
    : (palabraBuscada === undefined)
        ? console.warn("Debe ingresar al menos un caracter a buscar")
        : console.info(`El substring "${palabraBuscada}" aparece ${texto.split(palabraBuscada).length - 1} veces en el texto "${texto}"`)

contarPalabras2("Este es un texto largo con algunas letras repetidas","a")

console.log("###### Ej7 ######")
//7) Programa una función que valide si una palabra o frase dada, es un palíndromo 
//(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true.
const palabraPolidromo = (palabra = "") => (!palabra)
    ? console.warn("Debe ingresar una palabra o frase")
    : (palabra.toLowerCase() === palabra.toLowerCase().split("").reverse().join(""))
        ? console.info(`El string "${palabra}" es polidromo`)
        : console.info(`El string "${palabra}" no es polidromo`)
palabraPolidromo("asddsaa")
palabraPolidromo("asddsA")

console.log("###### Ej8 ######")
//8) Programa una función que elimine cierto patrón de caracteres de un texto dado, 
//pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5.
const eliminarCaracteres = (texto = "", eliminar) => console.info(texto.replace(new RegExp(eliminar, "ig"),""))
eliminarCaracteres("Esto es un texto del que elimino una palabra", "Que")
eliminarCaracteres("Esto es un texto con numeros 1 2 3 4 del que elimino una palabra", "[a-p]")


console.log("###### Ej9 ######")
//9) Programa una función que obtenga un numero aleatorio entre 501 y 600.
const aleatorio501_600 = () => console.log((Math.random()*100 + 501))
aleatorio501_600()



console.log("###### Ej10 ######")
//10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), 
//pe. miFuncion(2002) devolverá true.




console.log("###### Ej11 ######")
//11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, 
//se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120.
//const factorial = (num = 0) => console.log(array(n)).forEach(element => {


console.log("###### Ej12 ######")
// 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, 
//pe. miFuncion(7) devolverá true.
const nPrimo = (num) => {
    let primo = true
    for (let i = 2; i < num ; i++){
        if (num % i === 0){primo = false;break;}
    }
    return console.info(`el numero ${num} es primo?: ${primo}`)
}
nPrimo(7)
nPrimo(101)
nPrimo(1001)
nPrimo(37)


console.log("###### Ej13 ######")
// 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar.



console.log("###### Ej14 ######")
// 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F.

console.log("###### Ej15 ######")
//15) Programa una función para convertir números de base binaria a decimal y viceversa, 
//pe. miFuncion(100,2) devolverá 4 base 10.
const convertirBase = (numero = 0, base = 0) => (base === 2)
    ?console.info(`EL numero ${numero} base 2 cambiado a base 10 es ${parseInt(numero, base)}`)
    :console.info(`EL numero ${numero} base 10 cambiado a base 2 es ${numero.toString(2)}`)
convertirBase(10001010110010, 2)
convertirBase(1000, 2)
convertirBase(9, 10)
convertirBase(735, 10)

console.log("###### Ej16 ######")
//16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, 
//pe. miFuncion(1000, 20) devolverá 800.
const descontar = (monto = 0, descuento = 0) => console.info(`EL monto ${monto} luego de aplicar el descuento de ${descuento}% queda en ${monto * (1-descuento/100)}`)
descontar(900,30)


console.log("###### Ej17 ######")
//17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, 
//pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020).
const diferenciaFecha = (fecha) => console.info(Date.now().year - fecha.year)
diferenciaFecha(Date(1984,4,23))


console.log("###### Ej18 ######")
//18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, 
//pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.


console.log("###### Ej19 ######")
//19) Programa una función que valide que un texto sea un nombre válido, 
//pe. miFuncion("Jonathan MirCha") devolverá verdadero.


console.log("###### Ej20 ######")
//20) Programa una función que valide que un texto sea un email válido, 
//pe. miFuncion("jonmircha@gmail.com") devolverá verdadero.