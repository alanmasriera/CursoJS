import countdown from "./js/cuenta_regresiva.js";
import hamburgerMenu from "./js/menu_hamburguesa.js";
import { showTime, reloj, alarma} from "./js/reloj.js";
import { shortcuts, moveBall } from "./js/teclado.js";

const  d = document
console.log("En index_DOM")
d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn",".panel",".menu a")
    reloj("#iniciar-reloj","#parar-reloj")
    alarma("assets/alarma-morning-mix.mp3","#iniciar-alarma","#parar-alarma")
    countdown("countdown","Jun 01 2022 00:00:00","Feliz nuevo año")
})

d.addEventListener("keydown",e=>{
    shortcuts(e)
    moveBall(e,".ball",".stage")
})