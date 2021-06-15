
        //Api hablar
        // console.log(window)
        // let texto = "Texto generado automáticamente"
        // const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto))
        // hablar(texto)


        console.log("############### Elementos del documento ###############")
        console.log(window.document)
        console.log(document)
        console.log(document.body)
        console.log(document.documentElement)
        console.log(document.doctype)
        console.log(document.characterSet)
        console.log(document.links)
        console.log(document.forms)
        console.log(document.styleSheets)
        console.log(document.scripts)
        //Selecciona lo q tengo seleccionado luego de 3 segundos en la paguina
        setTimeout(() => {
            console.log(document.getSelection().toString())
        }, 3000);
        //document.write("<h2>Esto es un texto agregado desde DOM)</h2>")
        
        
        //Nodos
        console.clear()
        console.log("############### Nodos ###############")
        console.log(document.getElementsByTagName("li"))
        console.log(document.getElementsByClassName("card"))
        console.log(document.getElementsByName("nombre"))
        console.log(document.getElementById("menu"))

        //Esto fue reemplazado por: (pero solo trae el primero q encuentre)
        console.log(document.querySelector("#menu"))
        console.log(document.querySelector("a"))
        //con esto podemos selecionar todos
        console.log(document.querySelectorAll("a"))
        console.log(document.querySelectorAll("a").length)
        document.querySelectorAll("a").forEach(el => console.log(el))
        console.log(document.querySelectorAll(".card"))
        console.log(document.querySelectorAll(".card")[2])
        console.log(document.querySelectorAll("#menu"))
        console.log(document.querySelectorAll("#menu li"))

        //Atributes
        console.clear()
        console.log("############### Atributes y data-Attributes ###############")
        console.log(document.documentElement.lang)
        console.log(document.documentElement.getAttribute("lang"))
        console.log(document.querySelector(".link-dom").href)
        console.log(document.querySelector(".link-dom").getAttribute("href"))

        //Para modificar atributos
        document.documentElement.lang = "en"
        console.log(document.documentElement.lang)
        document.documentElement.setAttribute("lang","es-MX")
        console.log(document.documentElement.lang)

        //Guardar elementos
        const linkDOM = document.querySelector(".link-dom")
        //Se utiliza como convencion empezar el nombre de la variable con $ cuando guarda elementos del DOM
        const $linkDOM = document.querySelector(".link-dom")
        console.log($linkDOM.getAttribute("href"))
        //si pongo esto me cierra la inspeccion de codigo de chrome
        // $linkDOM.setAttribute("target","_blank")
        
        $linkDOM.setAttribute("rel","noopener")
        //abrir un link
        $linkDOM.setAttribute("href","https://es.stackoverflow.com/questions/342404/error-cs0120-se-requiere-una-referencia-de-objeto-para-el-campo-m%C3%A9todo-o-propie")

        console.log($linkDOM.hasAttribute("rel"))
        $linkDOM.removeAttribute("rel")

        // data-Attributes Obtener,modificar, imprimir
        console.log($linkDOM.getAttribute("data-description"))
        console.log($linkDOM.dataset)
        console.log($linkDOM.dataset.description)
        $linkDOM.setAttribute("data-description","modelo de objeto del documento")
        console.log($linkDOM.dataset.description)
        $linkDOM.dataset.description = "Otra descripcion"
        console.log($linkDOM.dataset.description)

        //Estilos y variables
        console.clear()
        console.log("############### Estilos y variables ###############")
        const $linkDOM2=(document.querySelector(".link-dom"))
        console.log($linkDOM2.style)
        console.log($linkDOM2.getAttribute("style"))
        console.log($linkDOM2.style.backgroundColor)
        console.log($linkDOM2.style.color)
        console.log(window.getComputedStyle($linkDOM2))
        console.log(window.getComputedStyle($linkDOM2).getPropertyValue("color"))

        //Elimino la linea que tiene porqu es un enlase
        $linkDOM2.style.setProperty("text-decoration","none")
        //La convierto en bloque
        $linkDOM2.style.setProperty("display","block")
        $linkDOM2.style.width= "50%"
        $linkDOM2.style.textAlign= "center"
        $linkDOM2.style.marginLeft= "auto"
        $linkDOM2.style.marginRight= "auto"
        $linkDOM2.style.padding = "1rem"
        $linkDOM2.style.borderRadius = "1rem"


        //Variables CSS - custom properties CSS
        //Accedo desde js a las variables del css
        const $html = document.documentElement
        const $body = document.body
        let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
        let varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color")
        console.log(varDarkColor)
        console.log(varYellowColor)

        $body.style.backgroundColor = varDarkColor
        $body.style.color = varYellowColor

        //si lo modifino en el estilo cambia pero no aplica porque sigue aplicando el que tengo seteado en la variable de js varDarkColor, tengo que actualizarlo
        $html.style.setProperty("--dark-color","pink")
        varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
        //$body.style.backgroundColor = varDarkColor
