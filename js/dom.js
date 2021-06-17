
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
        $linkDOM2.style.backgroundColor = "Blue"





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
        $html.style.setProperty("--dark-color","Black")
        varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color")
        //$body.style.backgroundColor = varDarkColor
        varBlackColor = getComputedStyle($html).getPropertyValue("--black-color")
        varWhiteColor = getComputedStyle($html).getPropertyValue("--white-color")
        varCardsColor = getComputedStyle($html).getPropertyValue("--cards-color")
        varBkgCardsColor = getComputedStyle($html).getPropertyValue("--cards-bkgColor")
        $body.style.backgroundColor = varWhiteColor
        $body.style.color = varBlackColor
        const $cards = document.querySelector(".cards")
        const $cloneCards = $cards.cloneNode(true)//Esto es de mas adelante
        $cards.style.backgroundColor = varBkgCardsColor
        const $allCard = document.querySelectorAll(".card")[1]
        console.log("asd")
        $allCard.style.color = varCardsColor





        //Clases CSS
        console.clear()
        console.log("############### Clases CSS ###############")
        
        const $card = document.querySelector(".card")
        console.log($card.className)
        console.log($card.classList)
        
        //veo que card no contiene la clase rotate-45
        console.log($card.classList.contains("rotate-45"))
        
        //entonces la agrego
        $card.classList.add("rotate-45")
        console.log($card.classList.contains("rotate-45"))

        //tambien podemso deliminar
        $card.classList.remove("rotate-45")

        //Toggle agrega si no existe o elimina si existe
        $card.classList.toggle("rotate-45")

        //replace reemplaza una clase por otra
        $card.classList.replace("rotate-45","rotate-135")

        //para varios: (add, remove, toogle, etc.)
        $card.classList.add("opacity-80","sepia")





        //Texto y html
        console.clear()
        console.log("############### Texto y html ###############")
        const $watIsDOM = document.getElementById("Que-es")

        let text = `
    <p>
        El modelo de Objetos del documento (<b><i>DOM - Document Object Model</i></b>) es una API para documentos HTML y XML
    </p>
    <p>
        Este provee una representacion estructural del documento, permitiendo modificar su contenido y presentacion cisual mediante codigo JS.
    </p>
    <p>
        <mark>El DOM no es parte de la especificacion de JavaScript, es una API para los navegadores</mark>
    </p>`;
        console.log("ALGO")
        $watIsDOM.innerText = text
        //Otra variante
        $watIsDOM.textContent = text
        //Si queremos que interprete las etiquetas (inner inserta dentro de el elemnto 
        //dodne estamos aprados)
        $watIsDOM.innerHTML = text
        //Outher reemplaza el elemento donde estamos por el nuevo por eso este ejemplo 
        //no quedan parrafos dentro de parrafos, sino solo 3 parrafos
        $watIsDOM.outerHTML = text
        


        
        //Traversing
        console.clear()
        console.log("############### Traversing ###############")

        const $cardsT = document.querySelector(".cards")
        console.log($cardsT)
        //todos los hijos, incluye hijos de hijos
        console.log($cardsT.childNodes)
        //solo hijos directos
        console.log($cardsT.children)
        console.log($cardsT.children[2])
        //padre
        console.log($cardsT.parentElement)
        //da el primer nodo dentro, da texto y es un slato de lina porqu los espacios, 
        //tabs y enters en html son un tipo de nodo, si la quito el primer nodo sera img
        console.log($cardsT.firstChild)
        //para filtrar tipos de hijos elementos
        console.log($cardsT.firstElementChild)
        console.log($cardsT.lastElementChild)
        //hermano anterior y posterior (tambien existe sin element para buscar otro tipo de nodo)
        console.log($cardsT.previousSibling)
        console.log($cardsT.previousElementSibling)
        console.log($cardsT.nextElementSibling)
        //closest Busca el padre mas cercano del tipo de selector que le demos
        console.log($cardsT.closest("body"))
        console.log($cardsT.children[3].closest("section"))





        //Creando elementos y fragmentos
        console.clear()
        console.log("############### Creando elementos y fragmentos ###############")

        const $figure = document.createElement("figure")
        const $img = document.createElement("img")
        const $figcaption = document.createElement("figcaption")
        const $figcaptionText = document.createTextNode("Animals 2")
        

        $img.setAttribute("src","https://placeimg.com/200/200/animals")
        $img.setAttribute("alt","Animals")

        $figcaption.appendChild($figcaptionText)
        $figure.appendChild($img)
        $figure.appendChild($figcaption)
        $cards.appendChild($figure)
        //Esto no tiene la clase q le da el estilo, por eso le agrego la clase
        $figure.classList.add("card")

        //Agregp ptra de otra forma ES RECOMENDABLE LA FORMA ANTERIOR
        const $figure2 = document.createElement("figure")
        $figure2.innerHTML = `<img src="https://placeimg.com/200/200/people" alt="People">
        <figcaption>People 2</figcaption>`
        $figure2.classList.add("card")
        $cards.appendChild($figure2)

        //Para hacerlo dinamicamente (Luego en AJAX lo hacemos mejor)
        const estaciones = ["Primavera","Verano","Otoño","Invierno"]
        const $ul = document.createElement("ul")
        //Esto no es buena practica
        document.write("<h3>Estaciones del año</h3>")
        document.body.appendChild($ul)
        estaciones.forEach(el => {
            const $li = document.createElement("li")
            $li.textContent = el
            $ul.appendChild($li)
        })

        //tambien lo puedo hacer con innerHTML
        const continentes = ["Africa","America","Asia","Europa","Oseania"]
        const $ul2 = document.createElement("ul")
        document.write("<h3>Continentes del mundo</h3>")
        document.body.appendChild($ul2)
        continentes.forEach(el => { $ul2.innerHTML += `<li>${el}</li>`})

        //Fragmento del dom es para agrupar cambios al dom y luego poder insertarlso todos juntos 
        //para no sobrecargar y ganar velocidad
        const meses = ["Enero","Febrero","Marzo","Abril","Marzo","Junio","Julio",
        "Agosto","Septiembre","Octubre","Noviembre","Diciembre"]
        $ul3 = document.createElement("ul")
        $fragment = document.createDocumentFragment()
        meses.forEach(el => {
            const $li = document.createElement("lI")
            $li.textContent= el
            $fragment.appendChild($li)
        })
        document.write("<h3>Meses del año</h3>")
        $ul3.appendChild($fragment)
        document.body.appendChild($ul3)


    


        //Templates HTML
        console.clear()
        console.log("############### Templates HTML ###############")
        const $template = document.getElementById("template-card").content
        const $fragmentT = document.createDocumentFragment()
        const cardContent = [
            {
                title: "Tecnologia",
                img: "https://placeimg.com/200/200/tech"
            },
            {
                title: "Animales",
                img: "https://placeimg.com/200/200/animals"
            },
            {
                title: "Arquitectura",
                img: "https://placeimg.com/200/200/arch"
            },
            {
                title: "Gente",
                img: "https://placeimg.com/200/200/people"
            },
            {
                title: "Naturaleza",
                img: "https://placeimg.com/200/200/nature"
            }
        ]
        const $figureTemplate = $template.children[0]
        console.log("Algo")
        console.log($figure2)
        console.log($figureTemplate)
        $figureTemplate.classList.add("cardEsp")
        cardContent.forEach(el => {
            //vamos a modificar el nodo template, luego debemos clonmarlo porque hay solo 1 
            //al q vamos a ir modificando en cada ciclo
            $template.querySelector("img").setAttribute("src",el.img)
            $template.querySelector("img").setAttribute("alt",el.title)
            $template.querySelector("figcaption").textContent = el.title
            //debo clonarlo (True es para que copie la estructura interna)
            let $clone = document.importNode($template, true)
            $fragmentT.appendChild($clone)
        })
        
        $cards.appendChild($fragmentT)








        //Modificar elementos (Old style)
        console.clear()
        console.log("############### Modificar elementos (Old style) ###############")
        const $newCard = document.createElement("figure")
        $newCard.innerHTML =  `<img src="https://placeimg.com/200/200/any" alt="any">
        <figcaption>Any</figcaption>`
        $newCard.classList.add("card")
        $newCard.classList.add("cardOld")

        //Esto reemplaza un elemento
        //$cards.replaceChild($newCard,$cards.children[9])
        //Esto inserta un elemento antes de otro
        $cards.insertBefore($newCard, $cards.children[10])
        //para eliminar
        $cards.removeChild($cards.children[10])

        //Puedo clonar elementos (true para que compue su contenido)
        //const $cloneCards = $cards.cloneNode(true)
        //Ejecute la clonacion mas arriba cuando el cards aun no tenia modificaciones.
        $cloneCards.setAttribute("id","cards2")
        $cloneCards.children[2].removeAttribute("style")
        $cloneCards.children[3].removeAttribute("style")
        document.body.appendChild($cloneCards)
        





        //Modificar elementos (Cool style)
        console.clear()
        console.log("############### Modificar elementos (Cool style) ###############")
        /*
        .insertAdjacent..
            .insertAdjacentElement(position, el)
            .insertAdjacentHTML(position,el)
            .insertAdjacentText(position,el)

        Posiciones:
            beforebegin (hermano anterior) 
            afterbegin (primer hijo)
            beforeend (ultimo hijo)
            afterend (hermano siguiente)
        */
       //Creo 
        const $newCardCool1 = document.createElement("figure")
        $newCardCool1.innerHTML =  `<img src="https://placeimg.com/200/200/any" alt="any">
        <figcaption>afterbegin</figcaption>`
        $newCardCool1.classList.add("card")

        $cloneCards.insertAdjacentElement("afterbegin",$newCardCool1)

        const $newCardCool2 = document.createElement("figure")
        let $contentCard =  `<img src="https://placeimg.com/200/200/any" alt="any">
        <figcaption></figcaption>`
        $newCardCool2.classList.add("card")
        $newCardCool2.insertAdjacentHTML("beforeend",$contentCard)
        $newCardCool2.querySelector("figcaption").insertAdjacentText("afterbegin","Usando insertAdjasentText")
        
        $cloneCards.insertAdjacentElement("afterbegin",$newCardCool2)
        //Equivalente a esto se puede usar:
        $cards.prepend($newCardCool2)
        /*
            before (hermano anterior) 
            prepend (primer hijo)
            apend (ultimo hijo)
            after (hermano siguiente)
        */

            
            
            
            
            
            
            

        //Manejador de eventos
        console.clear()
        console.log("############### Manejador de eventos ###############")
        //manejador con atributo html. Se carga el nombre de la funcion en el html
        function holaMundo(){
            alert("Hola mundo")
            console.log(event)
        }
        //manejador semantico. Se maneja desde js, buscando el elemento y agregando la funcion que hace ante dado evento
        const $eventoSemantico = document.getElementById("evento-semantico")
        $eventoSemantico.onclick = holaMundo //Si pongo los parentecis se ejecuta al cargar la paguina
        $eventoSemantico.onclick = function(e){
            alert("HOla mundo - Manejador de eventos semanticos")
            //puedo pasar el paramerto q le mande o el event q esta por defecto siempre
            console.log(e)
            console.log(event)
        }
        //manejador multiple
        const $eventoMultiple = document.getElementById("evento-multiple")
        $eventoMultiple.addEventListener("click",holaMundo)
        $eventoMultiple.addEventListener("click",(e) => {
            alert("Hola mundo - Manejador de eventos multiple")
            console.log(e)
            console.log(e.type)
            console.log(e.target)
        })






        //Eventos con Parámetros y Remover Eventos 
        console.clear()
        console.log("############### Eventos con Parámetros y Remover Eventos  ###############")
        function saludar(nombre = "Desconocido"){
            alert(`Hola ${nombre}`)
            console.log(event)
        }
        //la funcion manejadora no puede tomar parametros, nisiquiera los por defecto
        $eventoMultiple.addEventListener("click",saludar)
        //Por eso lo hacemos como una arrow function para poder mandarle lo necesario
        $eventoMultiple.addEventListener("click",()=>saludar())
        $eventoMultiple.addEventListener("click",()=>{
            saludar("Pepe")
            saludar("Alan")
        })

        //para remover un evento debo declarar una funcion asi que luego llamare desde otro evento
        const removerDobleClick = (e) =>{
            alert(`Removiento evento de tipo: ${e.type}`)
            console.log(e)
            $eventoRemover.removeEventListener("dblclick",removerDobleClick)
            $eventoRemover.disabled = true
        }
        const $eventoRemover = document.getElementById("evento-remover")
        $eventoRemover.addEventListener("dblclick",removerDobleClick)
        








        //Flujo de eventos (Burbuja y captura) y stopPropagation
        console.clear()
        console.log("############### Flujo de eventos (Burbuja y captura)  ###############")
        const $divsEventos = document.querySelectorAll(".eventos-flujo div")
        function flujoEventos(e){
            console.log(`Hola soy ${this.className}, el click lo origino ${e.target.className}`)
            //Esta linea elimina la propagacion para que no continue a otros
            e.stopPropagation()
        }
        console.log($divsEventos)
        $divsEventos.forEach(div =>{
            //Fase de burbuja (de adentr hacia afuera)
            div.addEventListener("click",flujoEventos)
            //Fase de captura
            //Esta funcion addlistener tiene un 3er parametro opcional: defecto false, puedo poner true
            div.addEventListener("click",flujoEventos,true)
            //tambien puedo pasar un objeto en ese parametro
            div.addEventListener("click",flujoEventos,{
                capture: false, //Este es el que llamamos antes
                once: true, //este hace que el evento se ejecute solo una vez, luego no se repite
            })
        })
        const $linkEventos = document.querySelector(".eventos-flujo a")
        $linkEventos.addEventListener("click",(e)=>{
            alert("Esto es una alerta del link d eventos")
            //Cancelo la accion que hace, en este caso la apertura del link
            e.preventDefault()
            //Esto lo pongo porque el enlace esta dentro del div3 y si no lo corto tambien ejecuta el evento de dicho div
            e.stopPropagation()
        }) 

        
        
        
        //Delegacion de eventos      
        console.clear()
        console.log("############### Delegacion de eventos  ###############")

        const $divEventos2 = document.querySelectorAll(".eventos-flujo2 div")
        //Podemos saber a que elemento de todo el documento le hicimos click
        document.addEventListener("click",(e)=>{
            console.log("click en:",e.target)
            if(e.target.matches(".eventos-flujo2 a")){
            alert("Es un alert de delegacion de eventos. Seleccionaste un <a> de eventos-flujo2")
            }
            if(e.target.matches(".eventos-flujo2 div")){
                //saldra undefined porque el elemento en si es el documento
                flujoEventos(e)
            }
        })
        





        //Manejo del BOM
        console.clear()
        console.log("############### Manejo del BOM  ###############")
        window.addEventListener("resize",e=>{
            console.clear()
            console.log("Evento resize")
            console.log(window.innerWidth) 
            console.log(window.innerHeight)
            console.log(window.outerWidth)
            console.log(window.outerHeight)
            
        })
        window.addEventListener("scroll",e=>{
            console.clear()
            console.log("Evento scroll")
            console.log(window.scrollX)
            console.log(window.scrollY)
            console.log(e)
        })
        
        window.addEventListener("load",e=>{
            console.log("Evento load")
            console.log(window.scrollX)
            console.log(window.scrollY)
            console.log(e)
        })

        //Este metodo es mucho mas rapido que el load porque se ejecuta antes de cargar los estilos, imagenes, etc
        document.addEventListener("DOMContentLoaded",e=>{
            console.log("Evento DOMContentLoaded")
            console.log(window.scrollX)
            console.log(window.scrollY)
            console.log(e)
        })



