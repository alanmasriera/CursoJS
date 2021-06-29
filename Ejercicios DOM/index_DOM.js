import getGeolocation from "./geolocalizacion.js";
import scrollTopButton from "./js/boton_scroll.js";
import countdown from "./js/cuenta_regresiva.js";
import userDeviceInfo from "./js/deteccion_dispositivos.js";
import networkStatus from "./js/deteccion_red.js";
import webCam from "./js/deteccion_webcam.js";
import searchFilters from "./js/filtro_busquedas.js";
import hamburgerMenu from "./js/menu_hamburguesa.js";
import speechReader from "./js/narrador.js";
import responsiveMedia from "./js/objeto_responsive.js";
import responsiveTester from "./js/prueba_responsive.js";
import { showTime, reloj, alarma} from "./js/reloj.js";
import slider from "./js/responsive_slider.js";
import scrollSpy from "./js/scroll_espia.js";
import draw from "./js/sorteo.js";
import { shortcuts, moveBall } from "./js/teclado.js";
import darkTheme from "./js/tema_oscuro.js";
import contactFormValidations from "./js/validaciones_formulario.js";
import smartVideo from "./js/video_inteligente.js";

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
    responsiveTester("responsive-tester")
    userDeviceInfo("user-device")
    webCam("webcam")
    getGeolocation("geolocation")
    searchFilters(".card-filter",".card")
    draw("#winner-btn",".player")
    slider()
    scrollSpy()
    smartVideo()
    contactFormValidations()
})

d.addEventListener("keydown",e=>{
    shortcuts(e)
    moveBall(e,".ball",".stage")
})

darkTheme(".dark-theme-btn","dark-mode")
networkStatus()
speechReader()