
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
//7) Programa una funci??n que valide si una palabra o frase dada, es un pal??ndromo 
//(que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolver?? true.
const palabraPolidromo = (palabra = "") => (!palabra)
    ? console.warn("Debe ingresar una palabra o frase")
    : (palabra.toLowerCase() === palabra.toLowerCase().split("").reverse().join(""))
        ? console.info(`El string "${palabra}" es polidromo`)
        : console.info(`El string "${palabra}" no es polidromo`)
palabraPolidromo("asddsaa")
palabraPolidromo("asddsA")

console.log("###### Ej8 ######")
//8) Programa una funci??n que elimine cierto patr??n de caracteres de un texto dado, 
//pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolver??  "1, 2, 3, 4 y 5.
const eliminarCaracteres = (texto = "", eliminar) => console.info(texto.replace(new RegExp(eliminar, "ig"),""))
eliminarCaracteres("Esto es un texto del que elimino una palabra", "Que")
eliminarCaracteres("Esto es un texto con numeros 1 2 3 4 del que elimino una palabra", "[a-p]")


console.log("###### Ej9 ######")
//9) Programa una funci??n que obtenga un numero aleatorio entre 501 y 600.
const aleatorio501_600 = () => console.log((Math.random()*100 + 501))
aleatorio501_600()



console.log("###### Ej10 ######")
//10) Programa una funci??n que reciba un n??mero y eval??e si es capic??a o no (que se lee igual en un sentido que en otro), 
//pe. miFuncion(2002) devolver?? true.




console.log("###### Ej11 ######")
//11) Programa una funci??n que calcule el factorial de un n??mero (El factorial de un entero positivo n, 
//se define como el producto de todos los n??meros enteros positivos desde 1 hasta n), pe. miFuncion(5) devolver?? 120.
//const factorial = (num = 0) => console.log(array(n)).forEach(element => {


console.log("###### Ej12 ######")
// 12) Programa una funci??n que determine si un n??mero es primo (aquel que solo es divisible por s?? mismo y 1) o no, 
//pe. miFuncion(7) devolver?? true.
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
// 13) Programa una funci??n que determine si un n??mero es par o impar, pe. miFuncion(29) devolver?? Impar.



console.log("###### Ej14 ######")
// 14) Programa una funci??n para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolver?? 32??F.

console.log("###### Ej15 ######")
//15) Programa una funci??n para convertir n??meros de base binaria a decimal y viceversa, 
//pe. miFuncion(100,2) devolver?? 4 base 10.
const convertirBase = (numero = 0, base = 0) => (base === 2)
    ?console.info(`EL numero ${numero} base 2 cambiado a base 10 es ${parseInt(numero, base)}`)
    :console.info(`EL numero ${numero} base 10 cambiado a base 2 es ${numero.toString(2)}`)
convertirBase(10001010110010, 2)
convertirBase(1000, 2)
convertirBase(9, 10)
convertirBase(735, 10)

console.log("###### Ej16 ######")
//16) Programa una funci??n que devuelva el monto final despu??s de aplicar un descuento a una cantidad dada, 
//pe. miFuncion(1000, 20) devolver?? 800.
const descontar = (monto = 0, descuento = 0) => console.info(`EL monto ${monto} luego de aplicar el descuento de ${descuento}% queda en ${monto * (1-descuento/100)}`)
descontar(900,30)


console.log("###### Ej17 ######")
//17) Programa una funci??n que dada una fecha v??lida determine cuantos a??os han pasado hasta el d??a de hoy, 
//pe. miFuncion(new Date(1984,4,23)) devolver?? 35 a??os (en 2020).
const diferenciaFecha = (fecha) => console.info(Date.now().year - fecha.year)
diferenciaFecha(Date(1984,4,23))


console.log("###### Ej18 ######")
//18) Programa una funci??n que dada una cadena de texto cuente el n??mero de vocales y consonantes, 
//pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5.


console.log("###### Ej19 ######")
//19) Programa una funci??n que valide que un texto sea un nombre v??lido, 
//pe. miFuncion("Jonathan MirCha") devolver?? verdadero.


console.log("###### Ej20 ######")
//20) Programa una funci??n que valide que un texto sea un email v??lido, 
//pe. miFuncion("jonmircha@gmail.com") devolver?? verdadero.





console.log("###### Ej24 ######")
//24) Programa una funci??n que dado un arreglo de n??meros devuelva un objeto con dos arreglos, el primero tendr?? los numeros ordenados en forma ascendente 
//y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolver?? { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const ordenarArreglo = (arr = undefined) => {
    return console.info({
        arr,
        asc: arr.map(el => el).sort(),
        desc: arr.map(el => el).sort().reverse()
    })
}
ordenarArreglo([1,2,3,4,8,5,4])


console.log("###### Ej27 ######")
// 27) Programa una clase llamada Pelicula.
// La clase recibir?? un objeto al momento de instanciarse con los siguentes datos: id de la pel??cula en IMDB, titulo, director, a??o de estreno, 
// pa??s o pa??ses de origen, g??neros y calificaci??n en IMBD.
//   - Todos los datos del objeto son obligatorios.
    //   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
    //      7 restantes n??meros.
    //   - Valida que el t??tulo no rebase los 100 caracteres.
    //   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el a??o de estreno sea un n??mero entero de 4 d??gitos.
//   - Valida que el pa??s o paises sea introducidos en forma de arreglo.
//   - Valida que los g??neros sean introducidos en forma de arreglo.
//   - Valida que los g??neros introducidos esten dentro de los g??neros 
//      aceptados*.
//   - Crea un m??todo est??tico que devuelva los g??neros aceptados*.
//   - Valida que la calificaci??n sea un n??mero entre 0 y 10 pudiendo ser 
//     decimal de una posici??n.
//   - Crea un m??todo que devuelva toda la ficha t??cnica de la pel??cula.
//   - Apartir de un arreglo con la informaci??n de 3 pel??culas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha t??cnica 
//     de cada pel??cula.

// * G??neros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, 
// Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.

 console.clear()
class Pelicula{
    constructor({id, titulo, director, anoEstreno, paisOrigen, generos, calificacion}){
        this.id = id
        this.titulo = titulo
        this.director = director
        this.anoEstreno = anoEstreno
        this.paisOrigen = paisOrigen
        this.generos = generos
        this.calificacion = calificacion
        this.validarId()
        this.validarTitulo()
        this.validarDirector()
        this.validarPais()
        this.validarGeneros()
    }

    static get listaGeneros(){
        return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary ,Drama", 
        "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", 
        "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"]
    }

    static generosAceptados(){
        return console.info(`Los generos aceptados son: ${Pelicula.listaGeneros.join(", ")}`)
    }

    validarCadena(propiedad, valor){
        if (!valor) return console.warn(`El ${propiedad} "${valor}" es vacio`)
        if (typeof valor !== "string") return console.error(`El ${propiedad} "${valor} no es una cadena de texto`)
        return true
    }
    validarArreglo(propiedad, valor){
        if(!valor) return console.warn(`${propiedad} "${valor}" es vacio`)
        if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" no es un arreglo`)
        if(valor.length === 0) return console.error(`${propiedad} "${valor}" no tiene datos`)
        for (let cadena of valor){
            if (typeof cadena !== "string") return console.error(`El valor "${cadena}" ingresado no es una cadena de texto`)
        }
        return true
    }



    validarId(){
        if (this.validarCadena("id",this.id)){
            if(!(/^([a-z]){2}([0-9]{7})$/.test(this.id)))return console.error(`id ${this.id} no coincide con el formato de id`)
        }
    }
    validarTitulo(){
        if (this.validarCadena("titulo",this.titulo)){
            if(this.titulo.length > 100) return console.error(`el titulo "${this.titulo}" excede los 100 caracteres`)
        }
    }
    validarDirector(){
        if (this.validarCadena("direcotr",this.director)){
            if(this.director.length > 50) return console.error(`el director "${this.director}" excede los 50 caracteres`)
        }
    }
    validarPais(){
        this.validarArreglo("paisOrigen",this.paisOrigen)
    }
    validarGeneros(){
        this.validarArreglo("generos",this.generos)
        for (let genero of this.generos){
            console.log(genero, Pelicula.listaGeneros.includes(genero))//Esto como es un metodo estatico no necesita instancia
            if (!Pelicula.listaGeneros.includes(genero)){
                console.error(`el genero "${genero}" no existe. Los generos permitidos son los siguientes:`)
                Pelicula.generosAceptados()

            }

        }
    }


}
Pelicula.generosAceptados()
const peli = new Pelicula({
    id:"ab1234567",
    titulo: "La pelicula de JavaScript",
    director: "Gonzalo Garzon",
    anoEstreno: 1992,
    paisOrigen: ["Argentina","Chile","Brasil"],
    generos: ["Comedy", "Romancea", "Sport"],
    calificacion: 8.5
})