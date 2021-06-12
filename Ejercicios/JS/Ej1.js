//1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFuncion("Hola Mundo") 
//devolverá 10.
export function ContarCaracteres (texto = ""){
    try{
        if (typeof(texto) != 'string'){throw new Error("el dato ingresado no es texto")}
        return texto.length
    }
    catch(error){console.log(error);}

}