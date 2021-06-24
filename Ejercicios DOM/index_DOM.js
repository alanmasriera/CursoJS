import scrollTopButton from "./js/boton_scroll.js";
import countdown from "./js/cuenta_regresiva.js";
import hamburgerMenu from "./js/menu_hamburguesa.js";
import responsiveMedia from "./js/objeto_responsive.js";
import { showTime, reloj, alarma} from "./js/reloj.js";
import { shortcuts, moveBall } from "./js/teclado.js";
import darkTheme from "./js/tema_oscuro.js";

const  d = document
console.log("En index_DOM")
d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn",".panel",".menu a")
    reloj("#iniciar-reloj","#parar-reloj")
    alarma("assets/alarma-morning-mix.mp3","#iniciar-alarma","#parar-alarma")
    countdown("countdown","Jun 01 2022 00:00:00","Feliz nuevo año")
    scrollTopButton(".scroll-top-btn")
    //responsiveMedia("youtube", "(min-width: 1024px)","Contenido movil", "Contenido escritorio")
    responsiveMedia("youtube", 
    "(min-width: 1024px)",
    `<a href="https://www.youtube.com/watch?v=p1Y0quHlBnw" target="_blank" rel="noopener"> Ver video </a> `,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/p1Y0quHlBnw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>` 
    )
    //responsiveMedia("gmaps", "(min-width: 1024px)","Contenido movil", ``)
    responsiveMedia("gmaps",
    "(min-width: 1024px)",
    `<a href="https://goo.gl/maps/tMARdKVeEzoPeMab6" target="_blank" rel="noopener"> Ver mapa </a> `,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27243.451159088214!2d-64.20699175!3d-31.402238399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x943298830933ad09%3A0xb72fd713f4c77c4e!2sNuevocentro%20Shopping!5e0!3m2!1ses-419!2sar!4v1624543309764!5m2!1ses-419!2sar" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
    )
})

d.addEventListener("keydown",e=>{
    shortcuts(e)
    moveBall(e,".ball",".stage")
})

darkTheme(".dark-theme-btn","dark-mode")