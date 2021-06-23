const d = document
let x = 0, y = 0

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


export function moveBall(e, ball, stage){
    const $ball = d.querySelector(ball)
    const $stage = d.querySelector(stage)
    const $limitBall = $ball.getBoundingClientRect()
    const $limitStage = $stage.getBoundingClientRect()
    console.log($limitBall)
    console.log($limitStage)
    
    switch (e.keyCode) {
        case 37:
            e.preventDefault()
            if($limitBall.left > $limitStage.left) x--
            break;
        case 38:
            e.preventDefault()
            if($limitBall.top > $limitStage.top) y--
            break;
        case 39:
            e.preventDefault()
            if($limitBall.right < $limitStage.right) x++
            break;
        case 40:
            e.preventDefault()
            if($limitBall.bottom < $limitStage.bottom) y++
            break;
    
        default:
            break;
    }
    $ball.style.transform = `translate(${x*10}px,${y*10}px)`
    
}
