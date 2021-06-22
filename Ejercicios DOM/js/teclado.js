const d = document

export function shortcuts(e){
    console.log(e)
    console.log(e.type)
    console.log(e.key)
    console.log(e.keyCode)
    //estas son para saber si estoy presionando la tecla ctrl o alt junto con alguna otra
    console.log(`ctrl: ${e.ctrlKey}`)
    console.log(`alt: ${e.altKey}`)
    console.log(`shift: ${e.shiftKey}`)
    if(e.key === "a" && e.altKey){
        alert("apretaste alt+a")
    }
}