export const pi = Math.PI

let usuario = "Alan"
let password = "asdf"

export function func3(){
    return "Esto es string de funcion 3"
}

export class clase{
    constructor(genero){
        console.log("Este es el constructor de la clase")
        this.nombreConst = "nombre de constructor"
        this.genero = genero
    }
    func1(){
        console.log("esto es func1")
        return `funcion 1. Nombre: ${this.nombreConst}, genero: ${this.genero}.`
    }
    func2(){
        console.log("esto es func2")
    }
}