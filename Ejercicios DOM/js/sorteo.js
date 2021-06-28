const d = document

export default function draw(btn, selector){
    const getwinner = (selector) =>{
        const $players = d.querySelectorAll(selector)
        const random = Math.floor(Math.random() * $players.length)
        const winner = $players[random]
        return `El ganador es: ${winner.textContent}`
    }

    d.addEventListener("click", e=>{
        if(e.target.matches(btn)){
            let result = getwinner(selector)
            alert(result)
        }
    })
}



//Copiando esta funcion y luego ejecutandola podemos hacer un sorteo entre todas 
//las personas que comentaron
// const getwinnerComment = (selector) =>{
//     const $players = document.querySelectorAll(selector)
//     const random = Math.floor(Math.random() * $players.length)
//     const winner = $players[random]
//     return `El ganador es: ${winner.textContent}`
// }

// getwinnerComment("ytd-comment-thread-renderer #author-text span")