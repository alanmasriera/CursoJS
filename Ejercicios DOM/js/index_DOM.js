import hamburgerMenu from "./menu_hamburguesa.js";
import { showTime } from "./reloj.js";

const  d = document
console.log("En index_DOM")
d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn",".panel",".menu a")
})
showTime()