console.log("Entramos a index")

document.addEventListener("click",(e)=>{
    console.log("click en:",e.target)
    //eventoClick(e)
    if(e.target.matches(".topnav a")){
        console.log("Es un elemento <a> de tapnav")
        eventoClick(e)
    }
})
function eventoClick(e){
    console.log(`eventoClick - soy ${this} - el click lo origino ${e.target.href}`)
}

