//24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente 
//y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }.
const ordenarArreglo = (arr = undefined) => {
    return console.info({
        arr,
        asc: arr.map(el => el).sort(),
        desc: arr.map(el => el).sort().reverse()
    })
}
ordenarArreglo([1,2,3,4,8,5,4])



// 27) Programa una clase llamada Pelicula.
// La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, 
// país o países de origen, géneros y calificación en IMBD.
//   - Todos los datos del objeto son obligatorios.
    //   - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 
    //      7 restantes números.
    //   - Valida que el título no rebase los 100 caracteres.
    //   - Valida que el director no rebase los 50 caracteres.
//   - Valida que el año de estreno sea un número entero de 4 dígitos.
//   - Valida que el país o paises sea introducidos en forma de arreglo.
//   - Valida que los géneros sean introducidos en forma de arreglo.
//   - Valida que los géneros introducidos esten dentro de los géneros 
//      aceptados*.
//   - Crea un método estático que devuelva los géneros aceptados*.
//   - Valida que la calificación sea un número entre 0 y 10 pudiendo ser 
//     decimal de una posición.
//   - Crea un método que devuelva toda la ficha técnica de la película.
//   - Apartir de un arreglo con la información de 3 películas genera 3 
//     instancias de la clase de forma automatizada e imprime la ficha técnica 
//     de cada película.

// * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, 
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